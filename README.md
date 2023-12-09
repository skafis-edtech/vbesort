# VBE-sort

Website with Lithuania state exam (high school graduation) math problems, sorted in categories.

Website deployed here: [https://vbesort.lt](https://vbesort.lt)

Use, share, rate, suggest, contribute, support.

## Screenshots

![ss1](./public/ss1.png)

![ss2](./public/ss2.png)

![ss3](./public/ss3.png)

### Tech

- React TS (later gonna be with redux)
- React Bootstrap (later gonna be Material UI with custom design)
- GitHub Pages
- yarn

# Docs for dev

Run locally and build - basic react...  

Deploy with gh-pages (need to install this package):
```
yarn build
yarn deploy -- https://${username}:${access_token}@github.com/${username}/${username}.github.io
```

That's it. No more fun stuff. All the cool docs are in [v1.0.0](https://github.com/naglissul/vbe-sort/releases/tag/v1.0.0), where I used AWS.

# Contribute

- Screenshot things: From math exams (or history, or whatever) screenshot problems, name screenshots like this:

\<year>\<g | k>\<section>\<w | r | s>\<number>\[\<A | B>].png

Vertical dash means the choice. Square bracket means optional.

year - the year of exam, as an integer (e.g. 2022)  
g - "pagrindine" session  
k - "pakartotine" session  
section - in which exam section is the problem - 1, 2 or 3 ("I dalis", "II dalis" or "III dalis")  
w - the whole problem is in that problem number (e.g. 15, when there's no 15.1)  
r - only the root part of a complex problem is in the provided problem number (e.g. 21, when there exists 21.1)  
s - only a sub-problem is in that number (e.g. 21.3)
A - A level problem, unassigned next to the problem number ("Išplėstinis kursas")  
B - B level problem, assigned next to the problem number ("Bendrasis kursas")

Not A nor B (difficulty level) should be labelled on root parts of problems.

Examples in [./public/math-problems/](./public/math-problems/) folder.

After doing so, write to me and somehow send the screenshots.

- Sort things: Assign topics, rewriting "misc" word (or fixing already sorted items) in [nr-topic-lut.json](.\src\mainPage\nr-topic-lut.json)
- Give ideas: Just write to me.
- Write code: Fork this repo and make your own improvements, then create a PR.

## Topics

- funkciju-grafiku-eskizai
- funkcijos-bendrai
- isvestines
- integralai

- kombinatorika
- tikimybes
- statistika

- trigonometrija-bendrai

- planimetrija
- stereometrija
- vektoriai

- lygtys
- nelygybes
- reiskiniai

- sekos

- procentai

- aibes

- misc

## Screenshot naming convention decoding

```
type MathProblemIdType = {
  year: number;
  isSecondary: boolean;
  section: "I" | "II" | "III";
  number: number;
  isBlevel: boolean | undefined;
  problemType: "whole" | "root" | "sub";
};

First 4 characters is year. If 5th character is g, isSecondary is false, If 5th character is k, isSecondary is true. 6th character is either 1, 2 or 3 - accordingly section will be "I", "II" or "III". 7th character can be "w", "r" or "s" - accordingly problemType will be "whole", "root" or "sub".  If problemType is "whole" or "root", 8th and 9th character is the number "number", if problemType is "sub", 8-11th characters is the "number". The next character if is ".", isBLevel is undefined, if it is A - isBLevel is false, if it is B - isBLevel is true.

Example:
"2017g1w01B.png"

year=2017
isSecondary=false
section="I"
problemType="whole"
number=01
isBLevel=true
```

# For the future

TIPS & TRICKS tab for pitagorean triples, geometry sqrt()s, also in general for soolving speed.  
IT VBE tutorial  
Links to sci-dict.org  

History, Bio & PUPP  

Solutions  

AI problem generator  

Some tutorials about 'template' solutions.  
