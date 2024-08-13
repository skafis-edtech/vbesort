import {
  appendToMakerListUrl,
  getLongYearName,
  getShortYearName,
  parseProblemFilename,
  removeFromListUrl,
} from "./misc";

describe("parseProblemFilename", () => {
  it("should correctly parse math problem filename", () => {
    const result = parseProblemFilename("mv2021g1w08A");
    expect(result).toEqual({
      subjectExam: "mv",
      year: 2021,
      session: "g",
      section: "1",
      problemType: "w",
      problemNumber: 8,
      level: "A",
    });
  });

  it("should correctly parse math problem filename", () => {
    const result = parseProblemFilename("mv2021g1w08N");
    expect(result).toEqual({
      subjectExam: "mv",
      year: 2021,
      session: "g",
      section: "1",
      problemType: "w",
      problemNumber: 8,
      level: "none",
    });
  });

  it("should correctly parse bio problem filename", () => {
    const result = parseProblemFilename("bv2019g1-01");
    expect(result).toEqual({
      subjectExam: "bv",
      year: 2019,
      session: "g",
      section: "1",
      problemType: "w",
      level: "n/a",
      problemNumber: 1,
    });
  });

  it("should correctly parse hist problem filename", () => {
    const result = parseProblemFilename("iv2017g1-02");
    expect(result).toEqual({
      subjectExam: "iv",
      year: 2017,
      session: "g",
      section: "1",
      problemNumber: 2,
      level: "n/a",
      problemType: "w",
    });
  });

  it("should correctly parse hist problem filename", () => {
    const result = parseProblemFilename("iv2017g2-4u");
    expect(result).toEqual({
      subjectExam: "iv",
      year: 2017,
      session: "g",
      section: "2",
      problemNumber: 4,
      level: "n/a",
      problemType: "q",
    });
  });

  it("should correctly parse hist problem filename", () => {
    const result = parseProblemFilename("iv2017g2-4s");
    expect(result).toEqual({
      subjectExam: "iv",
      year: 2017,
      session: "g",
      section: "2",
      problemNumber: 4,
      level: "n/a",
      problemType: "o",
    });
  });

  it("should correctly parse pupp problem filename", () => {
    const result = parseProblemFilename("mp2013pr01");
    expect(result).toEqual({
      subjectExam: "mp",
      year: 2013,
      session: "p",
      problemType: "r",
      section: "none",
      level: "n/a",
      problemNumber: 1,
    });
  });

  it("should correctly parse pupp problem filename", () => {
    const result = parseProblemFilename("mp2013ps01.2");
    expect(result).toEqual({
      subjectExam: "mp",
      year: 2013,
      session: "p",
      problemType: "s",
      section: "none",
      level: "n/a",
      problemNumber: 1.2,
    });
  });

  it("should correctly parse pupp problem filename with sessions", () => {
    const result = parseProblemFilename("mp20211-01");
    expect(result).toEqual({
      subjectExam: "mp",
      year: 2021,
      session: "1",
      problemType: "w",
      section: "none",
      level: "n/a",
      problemNumber: 1,
    });
  });

  it("should correctly parse physics problem filename", () => {
    const result = parseProblemFilename("fv2016g1-01");
    expect(result).toEqual({
      subjectExam: "fv",
      year: 2016,
      session: "g",
      problemType: "w",
      section: "1",
      level: "n/a",
      problemNumber: 1,
    });
  });
});

describe("listMaker", () => {
  it("should correctly remove item from list", () => {
    const result = removeFromListUrl(
      "2015k3s22.1B",
      "https://www.vbesort.lt/list?list=2015k3s22.1B+2022g1w10A"
    );
    expect(result).toEqual("https://www.vbesort.lt/list?list=2022g1w10A");
  });

  it("should correctly remove item from list2", () => {
    const result = removeFromListUrl(
      "2015k3s22.1B",
      "https://www.vbesort.lt/list?list=2022g1w10A"
    );
    expect(result).toEqual("https://www.vbesort.lt/list?list=2022g1w10A");
  });

  it("should correctly remove item from list3", () => {
    const result = removeFromListUrl(
      "2015k3s22.1B",
      "https://www.vbesort.lt/list?list=2015k3s22.1B"
    );
    expect(result).toEqual("https://www.vbesort.lt/list?list=");
  });

  it("should correctly add item to list", () => {
    const result = appendToMakerListUrl(
      "2015k3s22.1B",
      "https://www.vbesort.lt/list?list="
    );
    expect(result).toEqual("https://www.vbesort.lt/list?list=2015k3s22.1B");
  });

  it("should correctly add item to list2", () => {
    const result = appendToMakerListUrl(
      "2015k3s22.1B",
      "https://www.vbesort.lt/list?list=2015k3s22.1B"
    );
    expect(result).toEqual("https://www.vbesort.lt/list?list=2015k3s22.1B");
  });

  it("test maker should correctly work with 20231-21", () => {
    const result = appendToMakerListUrl(
      "20231-21",
      "https://www.vbesort.lt/list?list=2015k3s22.1B"
    );
    expect(result).toEqual(
      "https://www.vbesort.lt/list?list=2015k3s22.1B+20231-21"
    );
  });

  describe("getLongYearName", () => {
    it("should return the correct long year name for session 'g'", () => {
      const result = getLongYearName(2021, "g");
      expect(result).toEqual("2021 m. pagrindinė sesija");
    });

    it("should return the correct long year name for session 'k'", () => {
      const result = getLongYearName(2021, "k");
      expect(result).toEqual("2021 m. pakartotinė sesija");
    });

    it("should return the correct long year name for session 'v'", () => {
      const result = getLongYearName(2021, "v");
      expect(result).toEqual("2021 m. pavyzdinės užduotys");
    });

    it("should return the correct long year name for session 'b'", () => {
      const result = getLongYearName(2021, "b");
      expect(result).toEqual("2021 m. bandomasis egzaminas");
    });

    it("should return the correct long year name for session 'p'", () => {
      const result = getLongYearName(2021, "p");
      expect(result).toEqual("2021 m. užduotys");
    });

    it("should return the correct long year name for session '1'", () => {
      const result = getLongYearName(2021, "1");
      expect(result).toEqual("2021 m. I srautas");
    });

    it("should return the correct long year name for session '2'", () => {
      const result = getLongYearName(2021, "2");
      expect(result).toEqual("2021 m. II srautas");
    });

    it("should return the correct long year name for session '3'", () => {
      const result = getLongYearName(2021, "3");
      expect(result).toEqual("2021 m. III srautas");
    });
  });

  describe("getShortYearName", () => {
    it("should return the correct short year name for session 'g'", () => {
      const result = getShortYearName(2021, "g");
      expect(result).toEqual("2021 pag.");
    });

    it("should return the correct short year name for session 'k'", () => {
      const result = getShortYearName(2021, "k");
      expect(result).toEqual("2021 pak.");
    });

    it("should return the correct short year name for session 'v'", () => {
      const result = getShortYearName(2021, "v");
      expect(result).toEqual("2021 pav.");
    });

    it("should return the correct short year name for session 'b'", () => {
      const result = getShortYearName(2021, "b");
      expect(result).toEqual("2021 band.");
    });

    it("should return the correct short year name for session 'p'", () => {
      const result = getShortYearName(2021, "p");
      expect(result).toEqual("2021");
    });

    it("should return the correct short year name for session '1'", () => {
      const result = getShortYearName(2021, "1");
      expect(result).toEqual("2021 I");
    });

    it("should return the correct short year name for session '2'", () => {
      const result = getShortYearName(2021, "2");
      expect(result).toEqual("2021 II");
    });

    it("should return the correct short year name for session '3'", () => {
      const result = getShortYearName(2021, "3");
      expect(result).toEqual("2021 III");
    });
  });
});
