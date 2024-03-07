# Prisidėk

## Kaip galima prisidėti?

- Screenshotinti užduotis ir atsakymus
- Rūšiuoti užduotis
- Rašyti/taisyti programos kodą
- Paremti pinigais

## Užduočių ir atsakymų screenshotinimas

Screenshotinti viešai prieinamas užduotis/atsakymus ir jų .png failus užvardinti, kaip nurodyta apačioje. Neprieinamas viešai užduotis/atsakymus, žinoma, irgi galima screenshotint, bet negarantuoju ar galėsiu jas/juos panaudoti.

Atsakymų screenshotai turi būti užvardinti taip pat, kaip užduočių failai, tik sudėti į atskirą folderį.

Pirmųjų dalių atsakymų (A, B, C, arba D) nereikia screenshotinti. Tam yra per daug vargo. Galima tiesiog surašyti raides tiesiai į programos kodą.

Jei užduotis/atsakymas išeina iš vieno screenshoto galimybių, atskirus užduoties/atsakymo dalių screenshotus galima sujungti pvz. naudojant MS Paint programą.

Nuscreenshotinus užduotis (arba dar geriau ir prieš tai, kad nebūtų kokių nesusipratimų) su manim susisiekti ir kažkaip (gal per kokį Google Drive) persiųsti screenshotus.

Screenshotinant stenkitės palaikyti vienodas dimensijas – net jei bus daug tuščios vietos (kitaip gausis kaip biologijos VBE kai kurie screenshotai – per dideli).

### Matematikos PUPP

2021 metų:  
2021-1-25.png  
2021-1-01.png  
2021-2-09.png  
(I srautas 25 užduotis)  
(I srautas 1 užduotis)  
(II srautas 9 užduotis)

2005-2019 metų:  
Taip pat, kaip matematikos VBE, tik be I, II ir III dalių specifikacijos, ir be pagrindinės ar šalutinės sesijų specifikacijos.

Daugiau pavyzdžių [čia](https://github.com/vbesort/vbesort.github.io/tree/gh-pages/pupp-problems)

### Biologijos VBE

**Pavyzdžiai:**  
2021g1-01.png  
2021g1-02.png  
2021g1-13.png  
2021g2-01.png  
2021k4-08.png

Daugiau pavyzdžių [čia](https://github.com/vbesort/vbesort.github.io/tree/gh-pages/bio-problems)

**Formali gramatika:**  
\<filename> ::= \<year>\<g | k>\<section> - \<number>.png

\<year> ::= 2023 | 2022 | 2021 | 2020 | ... | 2002  
\<section> ::= 1 | 2 | 3 | 4  
\<number> ::= 01 | 02 | ... | 09 | 10 | 11 | ... | 99

**Paaiškinimai:**  
year - kurių metų egzamino užduotis.

g - pagrindinė sesija.

k - pakartotinė sesija.

section - kurioje dalyje: I dalyje, II dalyje ar III dalyje - yra užduotis.

### Istorijos VBE

2021g1-01.png  
2021g1-02.png  
2021g1-12.png  
2021g2-3u.png  
2021g2-3s.png

3u - trečiųjų šaltinių klausimai  
3s - tretieji šaltiniai

Daugiau pavyzdžių [čia](https://github.com/vbesort/vbesort.github.io/tree/gh-pages/hist-problems)

### Kita

Sugalvojus kažkokią taisyklę (formalią gramatiką), kaip vardinti failus, screenshotinti bet kokias viešai prieinamas užduotis. Turbūt labiausiai naudinga būtų matematikos NMPP. Turėti omeny, kad be aiškaus screenshotų failų vardinimo taisyklės paaiškinimo, man tie screenshotai bus beverčiai.

## Užduočių rūšiavimas

- Redaguoti [Matematikos nr-topic-lut.json](./src/MainPage/MathTab/data/nr-topic-lut.json), [Biologijos nr-topic-lut.json](./src/MainPage/BioTab/data/nr-topic-lut.json), [Istorijos nr-topic-lut.json](./src/MainPage/HistTab/data/nr-topic-lut.json), [Matematikos PUPP nr-topic-lut.json](./src/MainPage/PuppTab/data/nr-topic-lut.json) failus, priskiriant/keičiant tam tikrą "topic" reikšmę.
- Keisti/papildyti temų aibę [Matematikos topics-names-list.json](./src/MainPage/MathTab/data/topics-names-list.json), [Biologijos topics-names-list.json](./src/MainPage/BioTab/data/topics-names-list.json), [Istorijos topics-names-list.json](./src/MainPage/HistTab/data/topics-names-list.json), [Matematikos PUPP topics-names-list.json](./src/MainPage/PuppTab/data/topics-names-list.json) failuose.
- Susisiekti su manimi ir pasitarti/pasidalinti užduočių rūšiavimo idėjomis.

## Programos kodo rašymas/taisymas

Fork šitą repo >>> pakeisk/pataisyk kodą >>> padaryk PR. Galima savarankiškai sugalvoti, kur būtų naudinga, arba galima susisiekti su manimi ir pasitarti.

## Rėmimas pinigais

Padėkai bei kad nebūtų reklamų:

- Revolut pavedimu: `Naglis Šuliokas LT943250092929077836`
- PayPal donation (su PayPal mokesčiais): [donation link'as](https://www.paypal.com/donate/?hosted_button_id=86R4K9Y6BLSXA)
