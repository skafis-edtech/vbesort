import fitz  # PyMuPDF
import os

# Define input PDF file
pdf_path = "input/2024k.pdf"

# Open the PDF file
pdf_document = fitz.open(pdf_path)

# Set to store unique fonts
all_fonts = set()

# Iterate over each page in the PDF
for page_num in range(len(pdf_document)):
    page = pdf_document.load_page(page_num)  # Load the page
    blocks = page.get_text("dict")["blocks"]  # Extract text information as dictionary
    
    # Iterate over each block
    for block in blocks:
        if "lines" not in block:
            continue  # Skip if no text lines are present
        
        # Iterate over lines and spans to find fonts
        for line in block["lines"]:
            for span in line["spans"]:
                font = span["font"]  # Extract the font name
                all_fonts.add(font)  # Add the font to the set to keep it unique

# Close the PDF after processing
pdf_document.close()

# Output the fonts found
print("Fonts used in the PDF:")
for font in all_fonts:
    print(font)
