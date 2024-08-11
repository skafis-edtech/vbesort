import {
  appendToMakerListUrl,
  parseProblemFilename,
  removeFromListUrl,
} from "./misc";

describe("parseProblemFilename", () => {
  it("should correctly parse math problem filename", () => {
    const result = parseProblemFilename("math", "2021g1w08A");
    expect(result).toEqual({
      year: "2021g",
      section: "I",
      problemType: "whole",
      number: 8,
      isBlevel: false,
    });
  });

  it("should correctly parse bio problem filename", () => {
    const result = parseProblemFilename("bio", "2021g1-01");
    expect(result).toEqual({
      year: "2021g",
      section: "I",
      number: 1,
    });
  });

  it("should correctly parse hist problem filename", () => {
    const result = parseProblemFilename("hist", "2017g1-02");
    expect(result).toEqual({
      year: "2017g",
      section: "I",
      number: 2,
      problemType: "abcd",
    });
  });

  it("should correctly parse pupp problem filename", () => {
    const result = parseProblemFilename("pupp", "2013pr01");
    expect(result).toEqual({
      year: "2013p",
      problemType: "root",
      number: 1,
    });
  });

  it("should correctly parse pupp problem filename", () => {
    const result = parseProblemFilename("pupp", "2013ps01.2");
    expect(result).toEqual({
      year: "2013p",
      problemType: "sub",
      number: 1.2,
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
});
