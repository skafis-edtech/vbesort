import { parseProblemFilename } from "./misc";

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
