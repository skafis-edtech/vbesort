###
# This script generates question images from math nmpp8 exam pdfs.
# Naming: m8<whatever-pdf-is-named>-<problem-number-2-digits>.png (e.g. m820171-01.png)
###

from PIL import Image
import fitz
from pdf2image import convert_from_path
import os
from os import listdir
from os.path import isfile, join


# Create a folder of name dir_name in parent_dir
def create_folder(dir_name, parent_dir):
    p = os.path.join(parent_dir, dir_name)
    print(p)
    if dir_name not in listdir(parent_dir):
        os.mkdir(p)


# Convert pdf to image files
def pdf_to_images(pdf_path, output_folder):
    dpi = 300  # must be exatly this for the pixel inspection to work
    document = fitz.open(pdf_path)
    num_pages = document.page_count
    for page_number in range(num_pages):
        page = document.load_page(page_number)
        scale = dpi / 72  # 72 DPI is the default resolution
        zoom_matrix = fitz.Matrix(scale, scale)
        pix = page.get_pixmap(matrix=zoom_matrix)
        img = Image.frombytes("RGB", [pix.width, pix.height], pix.samples)
        if not os.path.exists(output_folder):
            os.makedirs(output_folder)
        output_path = f"{output_folder}/page_{page_number + 1}.png"
        img.save(output_path)
        print(f"Saved page {page_number + 1} as {output_path}")
    return num_pages


###
# This function creates question images from a page image.
# It tracks the grey question number boxes.
# Tool used: https://pixspy.com/
###
def create_question_images(page_image_filename, save_to_dir, year_string, count):
    if not os.path.exists(save_to_dir):
        os.makedirs(save_to_dir)

    grey = (147, 149, 151)
    # grey = (0, 0, 0)
    grey2 = (167, 169, 172)
    # grey_box_start_x = 150
    # grey_box_start_x = 245
    grey_box_start_x = 175
    end_x = 2251
    start_y = 272
    end_y = 3307

    img = Image.open(page_image_filename)
    pixel_map = img.load()

    # Collect all grey box coordinates
    grey_box_ys = []
    y = start_y
    while y < end_y:
        if (
            pixel_map[grey_box_start_x, y] == grey
            or pixel_map[grey_box_start_x, y] == grey2
        ):
            print(f"Found grey number box at y={y}")
            grey_box_ys.append(y)
            y += 120
        else:
            y += 1

    if grey_box_ys == []:
        print("No grey number box found")
        return 0

    # Save each question as a separate image
    for i in range(count, count + len(grey_box_ys)):
        # Adjust the -numbers to fit nice cropping
        y_from = grey_box_ys[i - count] - 2
        y_to = (
            grey_box_ys[i - count + 1]
            if i - count + 1 < len(grey_box_ys)
            else end_y + 10
        ) - 2
        x_from = grey_box_start_x - 2
        x_to = end_x
        question_img = img.crop((x_from, y_from, x_to, y_to))
        question_img.save(f"{save_to_dir}/m8{year_string}-{str(i+1).zfill(2)}.png")
        print(f"Saved question {i+1} as m8{year_string}-{str(i+1).zfill(2)}.png")

    return len(grey_box_ys)


if __name__ == "__main__":
    create_folder("output", "./")
    create_folder("temp", "./")
    create_folder("final", "./output")
    create_folder("page_images", "./temp")
    # onlyfiles = [f for f in listdir("exam_pdfs/") if isfile(join("exam_pdfs/", f))]
    onlyfiles = ["2016p.pdf"]
    failed_files = onlyfiles.copy()
    for file in onlyfiles:
        create_folder(file[0:-5], "./output/final")
        create_folder(file[0:-4], "./temp/page_images")
        page_count = pdf_to_images(
            f"exam_pdfs/{file}", f"./temp/page_images/{file[0:-4]}"
        )

        count = 0
        for i in range(1, page_count + 1):
            count += create_question_images(
                f"./temp/page_images/{file[0:-4]}/page_{i}.png",
                f"./output/final/{file[0:-5]}/",
                file[0:-4],
                count,
            )
        if count > 0:
            failed_files.remove(file)
        # else:
        #     os.system(f"rm -r ./temp/page_images/{file[0:-4]}")
    if failed_files == onlyfiles:
        # os.system("rm -r ./temp")
        print("\n\nAll files converted successfully!")
    else:
        print("\n\nFailed files:")
        print(failed_files)
