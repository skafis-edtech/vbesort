from PIL import Image
from pdf2image import convert_from_path
import os
from os import listdir
from os.path import isfile, join

def create_folder(filename,parent_directory):
    directory = filename[0:6]
    parent_dir = parent_directory + "/final"
    p = os.path.join(parent_dir, directory)
    print(p)
    if(directory not in listdir(parent_dir)): os.mkdir(p)
    directory = filename[0:6]
    parent_dir = parent_directory+"\page_images"
    p = os.path.join(parent_dir, directory)
    if(directory not in listdir(parent_dir)): os.mkdir(p)

def create_question_images(filename):
    count = 1
    a = filename.split("-")
    year = a[0]
    d = {1:"g",2:"k"}
    session = d.get(int(a[1][0]))
    for page in range(1,10):

        img = Image.open("page_images/"+filename[0:6]+f"/pdf_page_{page}.png")
        w,h = img.size
        pixel_map = img.load()
        hloc = 158
        for i in range(h-20):
            for ad in range(8):
                if(pixel_map[hloc+ad,i]==(0,0,0)):
                    if(pixel_map[hloc+ad,i+1]==(0,0,0) and pixel_map[hloc+ad,i+2]==(0,0,0) and pixel_map[hloc+ad,i+3]==(0,0,0)): #27 for some 107 for others
                        if(pixel_map[hloc+ad,i-1]==(27,27,27) and pixel_map[hloc+ad+1,i-1]==(27,27,27) or pixel_map[hloc+ad,i-1]==(107,107,107) and pixel_map[hloc+ad+1,i-1]==(107,107,107)):
                            for j in range(h):
                                if (pixel_map[hloc+ad,j+i+5]==(0,0,0) or pixel_map[hloc+ad+1,j+i+5]==(0,0,0) or pixel_map[hloc+ad-1,j+i+5]==(0,0,0) or pixel_map[hloc+ad+2,j+i+5]==(0,0,0) or pixel_map[hloc+ad-2,j+i+5]==(0,0,0)):
                                    himg = j+5
                                    break
                            new = Image.new(mode="RGB", size=(w, himg))
                            qpixelmap = new.load()
                            for wid in range(w):
                                for hig in range(himg):
                                    #print(i-30+hig)
                                    qpixelmap[wid,hig]=pixel_map[wid,i-30+hig]
                            new.save(f"final/"+filename[0:6]+f"/{year}{session}1-{str(count).zfill(2)}.png", format="png")
                            print(count)
                            count+=1
                            if (count==31):return 0
                            break
def pdf_to_images(filename):
    pdf_images = convert_from_path("egzaminai/"+filename, poppler_path=r"poppler-24.02.0\Library\bin")
    for idx in range(len(pdf_images)):
        pdf_images[idx].save('page_images/'+filename[0:6]+'/pdf_page_'+ str(idx+1) +'.png', 'PNG')
    print("Successfully converted PDF to images")


def remove_whitespace(filename):
    padding = 10
    a = filename.split("-")
    year = a[0]
    d = {1:"g",2:"k"}
    session = d.get(int(a[1][0]))
    for i in range(1,31):
        img = Image.open(f"final/"+filename[0:6]+f"/{year}{session}1-{str(i).zfill(2)}.png")
        w,h = img.size
        pixel_map = img.load()
        t = False
        rows_to_remove=0
        for hig in range(h):
            for wig in range(w):
                if(pixel_map[wig,h-hig-1]!=(255,255,255)):
                    t = True
                    break
            rows_to_remove+=1
            if t: break
        if(rows_to_remove>=padding):rows_to_remove-=padding

        new = Image.new(mode = "RGB",size = (w,h-rows_to_remove))
        newpixel_map = new.load()
        for hig in range(h-rows_to_remove):
            for wig in range(w):
                newpixel_map[wig,hig] = pixel_map[wig,hig]
        new.save(f"final/"+filename[0:6]+f"/{year}{session}1-{str(i).zfill(2)}.png")

onlyfiles = [f for f in listdir("egzaminai/") if isfile(join("egzaminai/", f))]
#onlyfiles = ["2020-1.pdf"]
for file in onlyfiles:
    create_folder(file, "E:\pyth\pdfparse")
    pdf_to_images(file)
    create_question_images(file)
    remove_whitespace(file)

#currently p good, dies on q's that span pages and leaves too much whitespace
#sometimes, problem 1 - idk,
