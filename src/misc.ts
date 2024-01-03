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

export function parseProblemFilename(
  type: "math" | "bio" | "hist" | "pupp",
  filename: string
): MathProblemIdType | BioProblemIdType {
  if (type === "math") {
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
  }
  if (type === "bio") {
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
  } else {
    throw Error("No parser for problem type '" + type + "'");
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
