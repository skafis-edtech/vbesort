# VBE-sort

Website with Lithuania state exam (high school graduation) math problems, sorted in categories.

FOR NOW it will be React bootstrap components, later gonna use Material UI with customized components (custom design)

Website deployed here: [https://vbesort.lt](https://vbesort.lt)

Use, share, rate, suggest, contribute, support.

## Screenshots

### Tech

- React TS (later gonna be with redux)
- React Bootstrap (later gonna be Material UI with custom design)
- Docker
- Docker compose
- AWS EC2

# Tech

- Jest for testing.

# Contribute

- Screenshot things
- Sort things
- Give ideas
- Write code

## Topics:

- funkciju-grafiku-eskizai
- funkcijos-bendrai
- isvestines
- integralai

- kombinatorika
- tikimybes
- statistika

- trigonometrijos-reiskiniai
- trigonometrija-bendrai

- planimetrija
- stereometrija
- vektoriai

- lygtys

- sekos

- procentai

- aibes

- misc

## chatgpt prompts

```
Write ma a javascript function that would parse a string into 6 values: year, isSecondary, section, problemType, number, isBLevel. This is the type:
export type MathProblemIdType = {
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
