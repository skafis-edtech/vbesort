import fitz  # PyMuPDF
import re

# Path to the PDF file
pdf_path = "/home/home/Downloads/uzd9-10.pdf"

# Pattern to match two digits followed by a dot
pattern = re.compile(r'\n\d{1}\.')

# Open the PDF
doc = fitz.open(pdf_path)

# Loop through each page
for page_num in range(len(doc)):
    page = doc.load_page(page_num)
    text = page.get_text("text")
    
    # Find all matches in the text
    matches = pattern.finditer(text)
    
    for match in matches:
        # Get the matched string and its start position in the text
        matched_str = match.group()
        match_start = match.start()
        
        # Extract the position of the matched string
        match_rects = page.search_for(matched_str)
        
        for rect in match_rects:
            x0, y0, x1, y1 = rect
            print(f"Found '{matched_str}' on page {page_num + 1} at position: ({x0}, {y0}, {x1}, {y1})")

doc.close()
