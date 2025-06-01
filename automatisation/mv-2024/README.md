# Math VBE automatisation

This makes screenshots of problems from pdf which has problem numbers as numbers not image.

## Packages

pip install pymupdf

pip install pillow

pip install numpy

## Instructions

1. Place 2023V.pdf file OCRed (problem numbers are numbers, not images).
2. run `python3 text_content_analysis.py`
3. Inspect the generated `output/text_with_fonts.txt` to find the font of problem enumeration numbers.
4. Edit `main_script.py` constant for the font.
5. run `python3 main_script.py`.
6. Inspect the images.

Done.

## Info

Question numbers have font `Yantramanav` (pdffiller.com) (do they tho?)

General info about PDF (http://pdf-analyser.edpsciences.org)

`detect_fonts.py` shows used fonts like this:

````Fonts used in the PDF:
MT-Extra
ArialMT
Wingdings-Regular
TimesNewRomanPS-BoldMT
TimesNewRomanPSMT
Arial-BoldMT
SymbolMT
TimesNewRomanPS-ItalicMT
TimesNewRomanPS-BoldItalicMT
Calibri
Times New Roman TUR,Bold```
````

`text_content_analysis.py` prints out the text of pdf with specified fonts.

After analysis looks like numbers are in `Arial-BoldMT` font mostly.
