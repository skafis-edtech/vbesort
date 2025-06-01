import fitz  # PyMuPDF
import os

# Define input PDF file and output text file
pdf_path = "input/2023V.pdf"
output_dir = "output/"
output_txt = "output/text_with_fonts.txt"

# Open the PDF file
pdf_document = fitz.open(pdf_path)

if not os.path.exists(output_dir):
    os.makedirs(output_dir)

# Open the output file to write the text with fonts
with open(output_txt, "w", encoding="utf-8") as f:
    
    # Iterate over each page in the PDF
    for page_num in range(len(pdf_document)):
        page = pdf_document.load_page(page_num)  # Load the page
        f.write(f"\n--- Page {page_num + 1} ---\n")  # Write page header
        
        blocks = page.get_text("dict")["blocks"]  # Extract text information as dictionary
        
        # Iterate over each block
        for block in blocks:
            if "lines" not in block:
                continue  # Skip if no text lines are present
            
            # Iterate over lines and spans to get text and fonts
            for line in block["lines"]:
                for span in line["spans"]:
                    text = span["text"].strip()  # Extract the text
                    font = span["font"]  # Extract the font name
                    
                    if text:  # Only write non-empty text
                        f.write(f"{text} ({font})\n")  # Write the text with the font in parentheses

# Close the PDF file after processing
pdf_document.close()

print(f"Text with fonts has been written to {output_txt}")
