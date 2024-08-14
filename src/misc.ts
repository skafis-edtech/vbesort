export interface ProblemDetails {
  subjectExam: SubjectExam;
  year: number;
  session: Session;
  section: Section;
  problemType: ProblemType;
  level: Level;
  problemNumber: ProblemNumber; // for history sources A is .1, B is .2, C is .3 etc
}

/* 
mv - Matematikos VBE
bv - Biologijos VBE
iv - Istorijos VBE
mp - Matematikos PUPP
fv - Fizikos VBE
*/
export type SubjectExam = "mv" | "bv" | "iv" | "mp" | "fv" | "m8" | "cv" | "lv";

/*
g - pagrindinė sesija
k - pakartotinė sesija
v - pavyzdinės užduotys
b - bandomasis egzaminas
p - užduotys
1 - I srautas
2 - II srautas
3 - III srautas
*/
export type Session = "g" | "k" | "v" | "b" | "p" | "1" | "2" | "3";

/* 
w - whole - pilnas uždavinys
r - root - dalinio uždavinio šakninė pradžia (pvz.: 15. Išspręskite lygtis)
s - sub - dalinis uždavinys (pvz.: 15.1. x + 3 = 5)
o - source - šaltinis (istorijos egzaminas)
q - questions - klausimų grupė šaltiniams (istorijos egzaminas)
*/
export type ProblemType = "w" | "r" | "s" | "o" | "q";

/*
1 - I dalis
2 - II dalis
3 - III dalis
4 - IV dalis
none - ""
*/
export type Section = "1" | "2" | "3" | "4" | "none";

export type Level = "A" | "B" | "none" | "n/a";

export type ProblemNumber = number;

//LATER make a FSM. And describe syntax.
export function parseProblemFilename(filename: string): ProblemDetails {
  if (filename.substring(0, 2) === "mv") {
    const year = filename.substring(2, 6);
    const session: ProblemDetails["session"] = filename.charAt(6) as Session;
    const section: ProblemDetails["section"] =
      (filename.charAt(7) as Section) || "none";
    const problemType: ProblemDetails["problemType"] = filename.charAt(
      8
    ) as ProblemType;
    let number;
    let level;

    if (problemType === "s") {
      number = parseFloat(filename.substring(9, 13));
      level = (
        filename.charAt(13) === "N" ? "none" : filename.charAt(13)
      ) as Level;
    } else if (problemType === "w") {
      number = parseInt(filename.substring(9, 11));
      level = (
        filename.charAt(11) === "N" ? "none" : filename.charAt(11)
      ) as Level;
    } else if (problemType === "r") {
      number = parseInt(filename.substring(9, 11));
      level = "n/a" as Level;
    } else {
      throw Error("Filename parse error, problemType '" + problemType + "'");
    }

    return {
      subjectExam: "mv",
      year: parseInt(year),
      session,
      section,
      problemType,
      level,
      problemNumber: number,
    };
  } else if (filename.substring(0, 2) === "bv") {
    const year = filename.substring(2, 6);
    const session: ProblemDetails["session"] = filename.charAt(6) as Session;
    const section: ProblemDetails["section"] = filename.charAt(7) as Section;
    const number = parseInt(filename.substring(9, 11));

    return {
      subjectExam: "bv",
      year: parseInt(year),
      session,
      section,
      problemType: "w",
      level: "n/a",
      problemNumber: number,
    };
  } else if (filename.substring(0, 2) === "iv") {
    const year = filename.substring(2, 6);
    const session: ProblemDetails["session"] = filename.charAt(6) as Session;
    const section: ProblemDetails["section"] = filename.charAt(7) as Section;
    let number;
    let problemType: ProblemDetails["problemType"];
    const letterToFrac: { [key: string]: number } = {
      A: 0.1,
      B: 0.2,
      C: 0.3,
      D: 0.4,
      E: 0.5,
      F: 0.6,
      G: 0.7,
      H: 0.8,
      I: 0.9,
    };

    if (section === "1") {
      number = Number(filename.substring(9, 11));
      problemType = "w";
    } else if (section === "2") {
      number = parseInt(filename.substring(9, 10));
      if (filename.charAt(10) === "s") {
        problemType = "o";
        number += letterToFrac[filename.charAt(11)];
      } else if (filename.charAt(10) === "u") {
        problemType = "q";
      } else {
        throw Error(
          "Filename parse error, problemType '" + filename.charAt(10) + "'"
        );
      }
    } else {
      throw Error("Filename parse error, section '" + section + "'");
    }
    return {
      subjectExam: "iv",
      year: parseInt(year),
      session,
      section,
      problemType,
      level: "n/a",
      problemNumber: number,
    };
  } else if (filename.substring(0, 2) === "mp") {
    const year = filename.substring(2, 6);
    const session = filename.charAt(6) as Session;
    const problemType: ProblemDetails["problemType"] =
      filename.charAt(7) === "-" ? "w" : (filename.charAt(7) as ProblemType);
    let number;
    if (problemType === "s") {
      number = parseFloat(filename.substring(8, 12));
    } else {
      number = parseInt(filename.substring(8, 10));
    }

    return {
      subjectExam: "mp",
      year: parseInt(year),
      session,
      problemType,
      section: "none",
      level: "n/a",
      problemNumber: number,
    };
  } else if (filename.substring(0, 2) === "fv") {
    const year = filename.substring(2, 6);
    const session = filename.charAt(6) as Session;
    const section: ProblemDetails["section"] = filename.charAt(7) as Section;
    const number = parseInt(filename.substring(9, 11));
    const problemType: ProblemDetails["problemType"] =
      filename.charAt(8) === "-" ? "w" : (filename.charAt(8) as ProblemType);

    return {
      subjectExam: "fv",
      year: parseInt(year),
      session,
      section,
      problemType,
      level: "n/a",
      problemNumber: number,
    };
  } else {
    throw Error(
      "No parser for problem subject '" + filename.substring(0, 2) + "'"
    );
  }
}

export function shuffle(array: any[], isShuffleOn: boolean) {
  if (isShuffleOn) {
    let currentIndex = array.length,
      randomIndex;

    while (currentIndex > 0) {
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;

      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex],
        array[currentIndex],
      ];
    }
    return array;
  } else {
    return array;
  }
}
export function getLongYearName(year: number, session: Session) {
  const sessionNames: { [key in Session]: string } = {
    g: " pagrindinė sesija",
    k: " pakartotinė sesija",
    v: " pavyzdinės užduotys",
    b: " bandomasis egzaminas",
    p: " užduotys",
    "1": " I srautas",
    "2": " II srautas",
    "3": " III srautas",
  };

  let yearName = `${year} m.${sessionNames[session]}`;
  return yearName;
}

export const noAnsYearList: { [key: string]: string[] } = {
  mv: [
    "2002p",
    "2003p",
    "2004p",
    "2005p",
    "2006p",
    "2007p",
    "2008g",
    "2008k",
    "2009k",
    "2015k",
    "2019k",
    "2021k",
    "2013g",
    "2011k",
    "2010k",
  ],
  mp: ["2013p"],
  fv: [],
  bv: [],
  iv: [
    "2015g",
    "2015k",
    "2016g",
    "2016k",
    "2017g",
    "2017k",
    "2018g",
    "2019g",
    "2020g",
    "2021g",
    "2022g",
    "2022k",
    "2023g",
    "2023k",
    "2024g",
    "2024k",
  ],
  m8: [],
  cv: [],
  lv: [],
};

export function isOfficialMathVbe(year: number, session: Session) {
  return ["2019k", "2020k", "2021k"].includes(year.toString() + session);
}

export function getShortYearName(year: number, session: Session) {
  const sessionNames: { [key in Session]: string } = {
    g: " pag.",
    k: " pak.",
    v: " pav.",
    b: " band.",
    p: "",
    "1": " I",
    "2": " II",
    "3": " III",
  };

  let yearName = `${year}${sessionNames[session]}`;
  return yearName;
}

export function getProblemName(problemDetails: ProblemDetails) {
  const subjectNames: { [key in SubjectExam]: string } = {
    mv: "Matematikos VBE",
    bv: "Biologijos VBE",
    iv: "Istorijos VBE",
    mp: "Matematikos PUPP",
    fv: "Fizikos VBE",
    m8: "Matematikos NMPP 8 kl.",
    cv: "Chemijos VBE",
    lv: "Lietuvių kalbos VBE",
  };
  return `${subjectNames[problemDetails.subjectExam]} ${getLongYearName(
    problemDetails.year,
    problemDetails.session
  )} ${
    problemDetails.section === "none" ? "" : `${problemDetails.section} dalis`
  } ${problemDetails.problemNumber} užd.${
    problemDetails.level !== "n/a" && problemDetails.level !== "none"
      ? " " + problemDetails.level + " lygio"
      : ""
  }`;
}

export const appendToMakerListUrl = (item: string, listUrl: string): string => {
  if (listUrl === "") {
    console.error("No listUrl provided");
    return "";
  }

  const baseUrl = listUrl.split("?")[0];
  const searchParams = new URLSearchParams(listUrl.split("?")[1]);
  const listParam = searchParams.get("list") || "";
  const listItems = listParam
    .split("+")
    .filter((listItem) => listItem !== item);
  searchParams.set("list", listItems.join("+"));
  const cleanUrl = `${baseUrl}?${searchParams.toString()}`;

  if (cleanUrl[cleanUrl.length - 1] === "=") {
    return cleanUrl + item;
  } else {
    return cleanUrl + "+" + item;
  }
};

export const removeFromListUrl = (item: string, listUrl: string): string => {
  if (listUrl === "") {
    console.error("No listUrl provided");
    return "";
  }
  const baseUrl = listUrl.split("?")[0];
  const searchParams = new URLSearchParams(listUrl.split("?")[1]);
  const listParam = searchParams.get("list") || "";
  const listItems = listParam
    .split(" ")
    .filter((listItem) => listItem !== item);
  searchParams.set("list", listItems.join(" "));
  return `${baseUrl}?${searchParams.toString()}`;
};

export const fracToLetter: { [key: number]: string } = {
  0.1: "A",
  0.2: "B",
  0.3: "C",
  0.4: "D",
  0.5: "E",
  0.6: "F",
  0.7: "G",
  0.8: "H",
  0.9: "I",
};
