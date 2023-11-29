export type MathProblemIdType = {
  year: number;
  isSecondary: boolean;
  section: "I" | "II" | "III";
  number: number;
  isBlevel: boolean | undefined;
  problemType: "whole" | "root" | "sub";
};

export function parseMathProblemId(str: string) {
  const year = parseInt(str.substring(0, 4));
  const isSecondary = str.charAt(4) === "k";
  const section: MathProblemIdType["section"] =
    str.charAt(5) === "1" ? "I" : str.charAt(5) === "2" ? "II" : "III";
  const problemType: MathProblemIdType["problemType"] =
    str.charAt(6) === "w" ? "whole" : str.charAt(6) === "r" ? "root" : "sub";
  let number;
  let isBLevel;

  if (problemType === "sub") {
    number = parseFloat(str.substring(7, 11));
    isBLevel =
      str.charAt(11) === "A"
        ? false
        : str.charAt(11) === "B"
        ? true
        : undefined;
  } else {
    number = parseInt(str.substring(7, 9));
    isBLevel =
      str.charAt(9) === "A" ? false : str.charAt(9) === "B" ? true : undefined;
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
