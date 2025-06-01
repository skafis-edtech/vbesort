import fitz
import os
import re
from PIL import Image
import numpy as np

pdf_path = "input/2023V.pdf"
output_dir = "output/"
NUMBERS_FONT="GlyphLessFont"

RIGHT_MARGIN_X = 580
MARGIN_FROM_BOTTOM = 160
ADD_TOP_MARGIN = 3
FIRST_PAGE = 6

if not os.path.exists(output_dir):
    os.makedirs(output_dir)

pdf_document = fitz.open(pdf_path)

# Changed for the new example problems 2024 II part example
problem_pattern = re.compile(r"\b\d{1,2}\b") # original pattern: re.compile(r"\b\d{1,2}\b")

def redact_word_in_pdf(pdf_document, word="Juodraštis"):
    for page_num in range(len(pdf_document)):
        page = pdf_document.load_page(page_num)
        text_instances = page.search_for(word)

        for inst in text_instances:
            page.add_redact_annot(inst)
            page.apply_redactions()

    pdf_document.saveIncr()

def extract_problem_number_in_font(page, font_name):
    text_instances = []
    blocks = page.get_text("dict")["blocks"]
    
    for block in blocks:
        if "lines" not in block:
            continue
        
        for line in block["lines"]:
            for span in line["spans"]:
                if font_name in span["font"]: 
                    if re.match(problem_pattern, span["text"].strip()):
                        text_instances.append((span["text"].strip(), fitz.Rect(span["bbox"])))
    return text_instances

def check_for_b_before_problem(problem_number, text_with_fonts_file="output/text_with_fonts.txt"):
    if not os.path.isfile(text_with_fonts_file):
        print(f"The file {text_with_fonts_file} does not exist. You need to first run text_content_analysis.py script to generate this file.")
        exit(1)

    with open(text_with_fonts_file, "r", encoding="utf-8") as f:
        lines = f.readlines()

    problem_pattern = re.compile(rf"^{re.escape(problem_number)}\.?$")

    for i, line in enumerate(lines):
        match = re.match(r"(.*) \((.*)\)", line.strip())
        if match:
            text = match.group(1).strip()
            font = match.group(2).strip()

            if font != "Arial-BoldMT":
                continue

            if re.match(problem_pattern, text):
                if i >= 2:
                    prev_line = lines[i-2].strip()
                    prev_line_match = re.match(r"(.*) \((.*)\)", prev_line)
                    if prev_line_match:
                        prev_text = prev_line_match.group(1).strip()
                        prev_font = prev_line_match.group(2).strip()

                        if prev_text == "B" and prev_font == "Arial-BoldMT":
                            return True
    return False 

def has_subproblems(problem_number, text_with_fonts_file="output/text_with_fonts.txt"):
    if not os.path.isfile(text_with_fonts_file):
        print(f"The file {text_with_fonts_file} does not exist.")
        return False

    subproblem_pattern = re.compile(rf"\b{problem_number}\.\d+\b")
    with open(text_with_fonts_file, "r", encoding="utf-8") as f:
        for line in f:
            match = re.match(r"(.*) \((.*)\)", line.strip())
            if match:
                text = match.group(1).strip()
                if re.match(subproblem_pattern, text):
                    return True
    return False

def check_non_white_content_on_all_sides(image_path, margin=10):
    image = Image.open(image_path)
    image_np = np.array(image.convert("L"))

    top_margin = image_np[:margin, :]
    bottom_margin = image_np[-margin:, :]
    left_margin = image_np[:, :margin]
    right_margin = image_np[:, -margin:]

    if np.min(top_margin) < 240:
        print(f"Warning: Non-white content found in the top {margin}px of {image_path}")
    if np.min(bottom_margin) < 240:
        print(f"Warning: Non-white content found in the bottom {margin}px of {image_path}")
    if np.min(left_margin) < 240:
        print(f"Warning: Non-white content found in the left {margin}px of {image_path}")
    if np.min(right_margin) < 240:
        print(f"Warning: Non-white content found in the right {margin}px of {image_path}")

def remove_bottom_whitespace(image_path):
    image = Image.open(image_path)
    image_np = np.array(image.convert("L"))

    non_white_rows = np.where(np.min(image_np, axis=1) < 240)[0]

    if non_white_rows.size > 0:
        bottom_row = non_white_rows[-1]

        cropped_image = image.crop((0, 0, image.width, bottom_row + 6))
        cropped_image.save(image_path)

    check_non_white_content_on_all_sides(image_path, margin=2)

# ============================================= CODE STARTS HERE ================================================

redact_word_in_pdf(pdf_document)

for page_num in range(FIRST_PAGE, len(pdf_document)): 
    page = pdf_document.load_page(page_num) 
    
    problems = extract_problem_number_in_font(page, NUMBERS_FONT)

    print("Page", page_num, ":", len(problems), "problems found")
    for i in range(len(problems)):
        print(problems[i][0], round(problems[i][1].y0, 2))
    print()

    b_is_on_root = None 

    for i, (problem_number, rect) in enumerate(problems):

        if problem_number.endswith('.'):
            problem_number = problem_number[:-1]

        x1, y1, x2, y2 = rect

        if check_for_b_before_problem(problem_number):
            if '.' in problem_number: 
                problem_number = f"s{problem_number}B" 
            else: 
                if has_subproblems(problem_number):  
                    b_is_on_root = problem_number 
                    problem_number = f"r{problem_number}" 
                else:
                    problem_number = f"w{problem_number}B"
                    b_is_on_root = problem_number
            x1 -= 25
        else: 
            if b_is_on_root and b_is_on_root == problem_number.split('.')[0]:
                problem_number = f"s{problem_number}B"
            else:
                b_is_on_root = None
                if '.' in problem_number:
                    problem_number = f"s{problem_number}"
                elif has_subproblems(problem_number):
                    problem_number = f"r{problem_number}"
                else:
                    problem_number = f"w{problem_number}"
            x1 -= 10

        y1 -= ADD_TOP_MARGIN
        x2 = RIGHT_MARGIN_X
        y2 = problems[i+1][1].y0 - ADD_TOP_MARGIN if i+1 < len(problems) else min(page.rect.y1 - MARGIN_FROM_BOTTOM, y1 + 50)

        zoom = 4  
        matrix = fitz.Matrix(zoom, zoom)

        # DEBUGGING
        print(f"Clipping coords: x1={x1}, y1={y1}, x2={x2}, y2={y2}")
        if x2 <= x1 or y2 <= y1:
            print(f"Skipping invalid region: {x1}, {y1}, {x2}, {y2}")
            continue  # Skip this iteration to avoid a crash
        # DEBUGGING END

        pix = page.get_pixmap(matrix=matrix, clip=(x1, y1, x2, y2)) 

        # Addition to the new example problems 2024 II part example
        if sum(char.isdigit() for char in problem_number) == 1:
            problem_number = re.sub(r'(\d)', r'0\1', problem_number)


        output_image_path = os.path.join(output_dir, f"{problem_number}.png")
        pix.save(output_image_path)

        remove_bottom_whitespace(output_image_path)

pdf_document.close()
print(f"All problems in font 'Arial-BoldMT' have been extracted and saved as individual images in {output_dir}")