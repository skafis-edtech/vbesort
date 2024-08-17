FROM python:3.9-slim

WORKDIR /

COPY . /

RUN pip install pillow pdf2image PyPDF2 pymupdf

RUN mkdir /exam_pdfs

CMD ["bash"]