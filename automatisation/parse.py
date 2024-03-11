import PyPDF2
import codecs
from os import listdir
from os.path import isfile, join

onlyfiles = [f for f in listdir("egzaminai/") if isfile(join("egzaminai/", f))]
for fi in onlyfiles:
    print(fi)
    year = fi[0:6]
    pdfFileObj = open('egzaminai/'+year+ '.pdf', 'rb')
    pdfReader = PyPDF2.PdfReader(pdfFileObj)
    preamble = """assign each of the
    30 questions to a theme,
    for the first 7 questions choose the theme from [kinematics, forces, momentum/collisions, energy/work]
    , for 08-10 choose from: [molecular, thermodynamics],
    for 11-16 from: [electrostatics, electrodynamics, magnetism,capacitors],
    for 17-23 from: [waves(not_light), linear_optics, wave_optics,capacitors,pendulums],
    for 24-26 from: [quantum/photoeffect, atom_physics],
    for 27-30 from: [astronomy]
    if you do not feel confident that a question fits any of the available categories well,
    assign it to [theory], output results as a python dictionary with question number - int(DO NOT USE LEADING ZEROES) (question number, theme) in  with no name just print in one line"""
    ans = []
    f = codecs.open('out.txt', mode="w", encoding="UTF-8")
    f.write(preamble+"\n")
    c=1
    for i in range(1,10):
        page = pdfReader.pages[i]
        a = page.extract_text().split("\n")



        for j in range(len(a)-1):
            if (a[j+1][0:3]==str(c).zfill(2)+"."):
                pilnas = ""
                o=0
                while (a[j+1+o]!= " " and "C" not in a[j+1+o]):
                    pilnas+=a[j+1+o]
                    o+=1
                ans.append(pilnas)
                c+=1
                print(c)
                f.write(pilnas+"\n")
    f.close()
    bee = input()
    b = eval(bee)
    outas = open(year+".txt","w")

    pdfFileObj = open('atsakymai/'+year+"a.pdf", 'rb')
    pdfReader = PyPDF2.PdfReader(pdfFileObj)
    page = pdfReader.pages[0]
    a = page.extract_text().split("\n")
    d = {}
    for i in range(len(a)):
        if ("1 2 3" in a[i]):
            l=i
            break
    t1 = a[l].split(" ")
    t2 = a[l+2].split(" ")
    for i in range(len(t1)):
        if(t1[i]!=" " and t1[i]!="" and "a" not in t1[i]): d.update({t1[i]:t2[i]})
    t1 = a[l+4].split(" ")
    t2 = a[l+5].split(" ")
    for i in range(len(t1)):
        d.update({t1[i]:t2[i]})
    t1 = a[l+7].split(" ")
    t2 = a[l+8].split(" ")
    for i in range(len(t1)):
        d.update({t1[i]:t2[i]})
    print("\n")
    for i in range(len(b)):
        if (year[5]=="1"):tem = "g"
        else: tem = "k"

        outas.write(year[0:4]+tem+"1-"+str(i+1).zfill(2)+".png ")
        outas.write(str(b[i+1])+" ")
        outas.write(str(d.get(str(i+1)))+"\n")

    outas.close()
    # closing the pdf file object
    pdfFileObj.close()
