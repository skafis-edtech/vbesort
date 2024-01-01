# Prisidėk

Kaip prisidėti prie tinklapio tobulinimo?

## Kur galima prisidėti?

- Screenshotinti užduotis
- Rūšiuoti užduotis ir atsakymus
- Duoti idėjų
- Rašyti/taisyti programos kodą
- Kurti dizainą
- Paremti pinigais

## Užduočių/atsakymų screenshotinimas

Screenshotinti viešai prieinamas užduotis/atsakymus ir jų .png failus užvardinti, kaip nurodyta apačioje. Neprieinamas viešai užduotis/atsakymus, žinoma, irgi galima screenshotint, bet negarantuoju ar galėsiu jas/juos panaudoti.

Svarbiausia taisyklingai užvardinti užduočių failus. Atsakymų failai gali būti kad ir iš eilės skaičiais užvardinti. Bet, žinoma, mažiau darbo programuoti būtų, jei atsakymų screenshotai būtų užvardinti taip pat, kaip užduočių, tik sudėti į atskirą folderį.

!!! Pirmųjų dalių atsakymų (A, B, C, arba D) nereikia screenshotinti. Tam yra per daug vargo. Galima tiesiog surašyti raides tiesiai į programos kodą.

Jei užduotis/atsakymas išeina iš screenshotinimo galimybių, atskirus užduoties/atsakymo dalių screenshotus galima sujungti pvz. naudojant MS Paint programą.

Nuscreenshotinus užduotis (arba dar geriau ir prieš tai, kad nebūtų kokių nesusipratimų) su manim susisiekti ir kažkaip (gal per kokį Google Drive) persiųsti screenshotus.

### Biologijos VBE

**Pavyzdžiai:**  
2021g1-01.png  
2021g1-02.png  
2021g1-13.png  
2021g2-01.png  
2021k4-08.png

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

### Matematikos VBE

**Pavyzdžiai:**  
2023g1w02B.png  
2023k2r14.png  
2023k2s14.1B.png  
2023k2s14.2A.png

Daugiau pavyzdžių [čia](https://github.com/vbesort/vbesort.github.io/tree/gh-pages/math-problems)

**Formali gramatika:**  
\<filename> ::= \<year>\<g | k>\<section>\<w | r | s>\<number>[\<A | B>].png

\<year> ::= 2023 | 2022 | 2021 | 2020 | ... | 2002
\<section> ::= 1 | 2 | 3  
\<number> ::= 01 | 02 | ... | 10 | 11 | 11.1 | 11.2 | ... | 12 | 12.1 | ... | 99.9

**Paaiškinimai:**  
year - kurių metų egzamino užduotis.

g - pagrindinė sesija.

k - pakartotinė sesija.

section - kurioje dalyje: I dalyje, II dalyje ar III dalyje - yra užduotis.

w - užduotis yra pilna, be jokių smulkesnių tos užduoties dalių (t.y. pvz. užduoties numeris 15, ir nėra jokios užduoties 15.1)

r - screenshote yra tik "šakninė" užduoties dalis, t.y. tik sąlygos pradžia (t.y. pvz. 21 užduoties salyga, kuri turi atskiras užduoties dalis 21.1 ir 21.2)

s - screenshote yra "dalinė" užduotis, kuri turi kažkokią "šakninę" sąlygos dalį (t.y. pvz. 21.1 užduotis, kuri turi atskirame 21 screenshote sąlygos pradžią)

A - Išplėstinio kurso užduotis (prie užduoties nieko nepažymėta)

B - Bendrojo kursoužduotis (pažymėta B raide prie užduoties)

r tipo screenshotai neturi turėti priskirtos nei A, nei B raidės.

Jei s tipo užduotis turi savo atskiras dalis, screenshotinama visa užtuotis (t.y. pvz. jei yra 22.1, 22.1.1, 22.1.2, 22.1.3, tuomet visos sąlygos sudedamos į vieną screenshotą ir užvardinama 22.1)

### Matematikos PUPP

2021 metų:  
2021-1-25.png  
2021-1-01.png  
2021-2-09.png  
(I srautas 25 užduotis)  
(I srautas 1 užduotis)  
(II srautas 9 užduotis)

2005-2019 metų:  
Taip pat, kaip matematikos VBE, tik be I, II ir III dalių specifikacijos

### Istorijos VBE

Pirmos dalies užduoties dalima screenshotint ir vardinti taip:

2021g1-01.png  
2021g1-02.png  
2021g1-12.png  
...

Neįsivaizduoju, kaip rūšiuoti antros dalies su šaltiniais užduotis... Gal kas turit idėjų?

Turėti omeny, kad jau yra tinklapis [istorijai.lt](https://www.istorijai.lt), kuriame yra gan geros informacijos pasiruošti egzaminams.

### Kita

Sugalvojus kažkokią taisyklę (formalią gramatiką), kaip vardinti failus, screenshotinti bet kokias viešai prieinamas užduotis. Turėti omeny, kad be aiškaus screenshotų failų vardinimo taisyklės paaiškinimo, man tie screenshotai bus beverčiai.

## Užduočių rūšiavimas

- Redaguoti [nr-topic-lut.json](./src/mainPage/data/nr-topic-lut.json) failą, priskiriant tam tikrą topic reikšmę.
- Keisti/papildyti temų aibę [topics-names-list.json](./src/mainPage/data/topics-names-list.json) faile.
- Vėliau bus ir ne vien matematikos užduočių rūšiavimas, bet pradžioje reikia nuscreenshotint tas užduotis.
- Susisiekti su manimi ir pasitarti/pasidalinti užduočių rūšiavimo idėjomis.

## Programos kodo rašymas/taisymas

Fork šitą repo, pakeisti/pataisyti kodą, padaryti PR. Galima savarankiškai sugalvoti, kur būtų naudinga, arba galima susisiekti su manimi ir pasitarti. Vėliau rašysiu "issues" GitHube, tai galima bus pagal juos programuoti.

## Dizaino kūrimas

Galima bet kokiu pavidalu pasiūlyti tinklapio dizainą (funkcinį arba/ir vaizdo (UI/UX)). Aišku, tobuliausias variantas būtų per Figma. Bet tokiu atveju (kadangi daug darbo) būtų geriau mane informuoti apie planą, kad po to nebūtų, kad nepatinka man dizainas ir visas darbas šuniui ant uodegos.

## Rėmimas pinigais

Padėkai ir tolimesniam tinklapio tobulinimui:

- PayPal donation – gan daug mokesčių PayPal pasiima: [donation linkas](https://www.paypal.com/donate/?hosted_button_id=86R4K9Y6BLSXA)
- Revolut pavedimu: Naglis Šuliokas LT943250092929077836

## Idėjų davimas

Tiesiog. Bet kokias idėjas šitam puslapiui, ar ir tiesiog bendrai idėjas švietimui galima man pasiūlyti. Tai tiesiog susisiekti, galima per el. paštą kad ir.
