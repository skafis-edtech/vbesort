import fitz  # PyMuPDF
import numpy as np
from PIL import Image
import os

pdf_path = "input/2024g_ans.pdf"
output_dir = "output/"
x1 = 82
threshold = 50
width = 100  # Width of the cropped area to display around the found black pixel
height = 50  # Height of the cropped area

pdf_document = fitz.open(pdf_path)

if not os.path.exists(output_dir):
    os.makedirs(output_dir)

def find_black_pixels(page, x1, threshold):
    pix = page.get_pixmap()
    img = np.frombuffer(pix.samples, dtype=np.uint8).reshape(pix.height, pix.width, pix.n)
    y_coords = []
    for y in range(img.shape[0]):
        pixel_value = img[y, x1][:3] if img.shape[2] == 4 else img[y, x1]
        if all(channel < threshold for channel in pixel_value):
            y_coords.append(y)
    return y_coords, pix

def save_image_from_coords(pix, x1, y, page_num, img_num, output_dir):
    img = Image.frombytes("RGB", [pix.width, pix.height], pix.samples)
    crop_area = (x1, y, min(x1 + width, pix.width), min(y + height, pix.height))
    cropped_img = img.crop(crop_area)
    output_image_path = os.path.join(output_dir, f"page_{page_num + 1}_img_{img_num + 1}.png")
    cropped_img.save(output_image_path)
    print(f"Saved image for page {page_num + 1} at y={y} as {output_image_path}")

for page_num in range(len(pdf_document)):
    page = pdf_document.load_page(page_num)
    black_pixels_y, pix = find_black_pixels(page, x1, threshold)
    
    for img_num, y in enumerate(black_pixels_y):
        save_image_from_coords(pix, x1, y, page_num, img_num, output_dir)
    print(f"Page {page_num + 1}: {black_pixels_y}")
