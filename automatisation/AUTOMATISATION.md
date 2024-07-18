# Automatisation

Aprašymas kaip naudotis python scripts klausimų generavimui, mano kompiuteriu sugeneruoti 13 egzaminų užduotis užtrunka apie 3.5 minutės.

Automatisation folderyje yra du failai, gen_questions.py ir parse.py

- gen_questions sugeneruoja klausimų nuotraukas iš pdf failų
- parse sugeneruoja txt failus kurie turi kiekvienos klausimo nuotraukos temą ir atsakymą šalia.

## Set up

### Folderiai

įsikelkite abu failus į savo darbine direktoriją, toje pačioje direktorijoje sukurkite 4 folderius.

"final"
"page_images"
"atsakymai"
"egzaminai"

"final" ir "page_images" turi likti tušti, o į "egzaminai" reikia sudėti visų egzaminų, iš kurių norite sugeneruoti klausimus, užduočių failus.

Egzaminų failai turi vadintis "metai-1.pdf" jei pagrindinės sesijos egzaminas arba "metai-2.pdf" jei pakartotinės. Atsakymų failai turi vadintis taip pat, tik kad su "a" gale. pvz užd. failas "2023-1.pdf" ir jo ats. "2023-1a.pdf"

### Bibliotekos

kad kodas veiktų, reikia šių bibliotekų:

- PIL - "pip install pillow"
- pdf2image - "pip install pdf2image"
- PyPDF2 - "pip install PyPDF2"
- codecs - built-in

visas galima instaliuoti su pip, tiesiog rašant pvz. "pip install ... "

Dar reikia atsisiųsti iš čia  
https://github.com/oschwartz10612/poppler-windows/releases/  
failą Release-24.02.0-0.zip, jį extractinti ir folderį pavadinimu "poppler-24.02.0" irgi įdėti į projekto direktoriją.

paskutinis set-up dalykas: gen_questions.py apačioje reikia įrašyti savo projekto direktoriją "create_folder()" funkcijos argumente, ten šiuo metu įrašytas mano projekto path.

## Naudojimasis

Tiesiog reikia paleisti "gen_questions.py" ir jis sugeneruos klausimus į final folderį.

parse.py sudėtingiau: jis dabar setupintas taip, kad paleidus sugeneruoja out.txt failą, kurio turinį reikia nusiųsti chatgpt ir jis turėtų outputitinti vienoje linijoje python dictionary vienoje eilutėje ir jį įpastinti į prgramą (ji prašys inputo).
tada jis sugeneruos .txt failą kuriame bus image - topic - atsakymas  
Galima pakeisti koda, kad jis to nedarytų ir tik sugeneruotų image - ataskymas failą - reiktų iškomentuoti bee = input() liniją ir outas.write(str(b[i+1])+" ") liniją

### notes

Labai rekomenduoju greitai peržiūrėti rezultatą, jei klausimas yra per du puslapius jis nesuveikia, ir šiap kartais būna random klaidų
