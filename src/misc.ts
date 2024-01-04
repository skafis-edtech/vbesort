export type MathProblemIdType = {
  year: number;
  isSecondary: boolean;
  section: "I" | "II" | "III";
  number: number;
  isBlevel: boolean | undefined;
  problemType: "whole" | "root" | "sub";
};

export type BioProblemIdType = {
  year: number;
  isSecondary: boolean;
  section: "I" | "II" | "III" | "IV";
  number: number;
};

export type HistProblemIdType = {
  year: number;
  isSecondary: boolean;
  section: "I" | "II";
  number: number;
  problemType: "sources" | "questions" | "abcd";
};

export type PuppProblemIdType = {
  year: number;
  number: number;
  problemType: "whole" | "root" | "sub";
  isSecondary: null;
};

export type SubjectType = "math" | "bio" | "hist" | "pupp";

export function parseProblemFilename(
  subject: SubjectType,
  filename: string
):
  | MathProblemIdType
  | BioProblemIdType
  | HistProblemIdType
  | PuppProblemIdType {
  if (subject === "math") {
    const year = parseInt(filename.substring(0, 4));
    const isSecondary = filename.charAt(4) === "k";
    const section: MathProblemIdType["section"] =
      filename.charAt(5) === "1"
        ? "I"
        : filename.charAt(5) === "2"
        ? "II"
        : "III";
    const problemType: MathProblemIdType["problemType"] =
      filename.charAt(6) === "w"
        ? "whole"
        : filename.charAt(6) === "r"
        ? "root"
        : "sub";
    let number;
    let isBLevel;

    if (problemType === "sub") {
      number = parseFloat(filename.substring(7, 11));
      isBLevel =
        filename.charAt(11) === "A"
          ? false
          : filename.charAt(11) === "B"
          ? true
          : undefined;
    } else {
      number = parseInt(filename.substring(7, 9));
      isBLevel =
        filename.charAt(9) === "A"
          ? false
          : filename.charAt(9) === "B"
          ? true
          : undefined;
    }

    return {
      year,
      isSecondary,
      section,
      problemType,
      number,
      isBlevel: isBLevel,
    };
  } else if (subject === "bio") {
    const year = parseInt(filename.substring(0, 4));
    const isSecondary = filename.charAt(4) === "k";
    const section: BioProblemIdType["section"] =
      filename.charAt(5) === "1"
        ? "I"
        : filename.charAt(5) === "2"
        ? "II"
        : filename.charAt(5) === "3"
        ? "III"
        : "IV";
    const number = parseInt(filename.substring(7, 9));

    return {
      year,
      isSecondary,
      section,
      number,
    };
  } else if (subject === "hist") {
    const year = parseInt(filename.substring(0, 4));
    const isSecondary: HistProblemIdType["isSecondary"] =
      filename.charAt(4) === "k";
    const section: HistProblemIdType["section"] =
      filename.charAt(5) === "1" ? "I" : "II";
    let number: HistProblemIdType["number"];
    let problemType: HistProblemIdType["problemType"];
    if (section === "I") {
      number = parseInt(filename.substring(7, 9));
      problemType = "abcd";
    } else if (section === "II") {
      number = parseInt(filename.substring(7, 8));
      problemType =
        filename.charAt(8) === "s"
          ? "sources"
          : filename.charAt(8) === "u"
          ? "questions"
          : "abcd";
    } else {
      throw Error("Filename parse error, section '" + section + "'");
    }
    return {
      year,
      isSecondary,
      section,
      number,
      problemType,
    };
  } else if (subject === "pupp") {
    const year = parseInt(filename.substring(0, 4));
    const problemType: PuppProblemIdType["problemType"] =
      filename.charAt(4) === "w"
        ? "whole"
        : filename.charAt(4) === "r"
        ? "root"
        : "sub";
    let number;

    if (problemType === "sub") {
      number = parseFloat(filename.substring(5, 9));
    } else {
      number = parseInt(filename.substring(5, 7));
    }

    return {
      year,
      problemType,
      number,
      isSecondary: null,
    };
  } else {
    throw Error("No parser for problem subject '" + subject + "'");
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
