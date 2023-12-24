import { Accordion } from "react-bootstrap";
import { MathProblemIdType, parseMathProblemId } from "../misc";
import nrTopicLut from "./data/nr-topic-lut.json";
import SingleMathProblem from "./SingleMathProblem";
import "./specialForRootProblem.css";

export default function ProblemRoot({
  currProblemInfo,
}: {
  currProblemInfo: MathProblemIdType;
}) {
  return (
    <Accordion style={{ marginTop: "20px" }}>
      <Accordion.Item eventKey="crazy">
        <Accordion.Header className="root-header">
          Uždavinio sąlygos pradžia
        </Accordion.Header>
        <Accordion.Body>
          {nrTopicLut
            .filter((pr) => {
              const anotherId: MathProblemIdType = parseMathProblemId(
                pr.filename
              );
              return (
                anotherId.number === Math.floor(currProblemInfo.number) &&
                anotherId.problemType === "root" &&
                anotherId.year === currProblemInfo.year &&
                anotherId.isSecondary === currProblemInfo.isSecondary
              );
            })
            .map((root) => (
              <SingleMathProblem key={root.filename} filename={root.filename} />
            ))}
          {nrTopicLut
            .filter((pr) => {
              const anotherId: MathProblemIdType = parseMathProblemId(
                pr.filename
              );
              return (
                anotherId.number < currProblemInfo.number &&
                anotherId.number >= Math.floor(currProblemInfo.number) &&
                anotherId.problemType === "sub" &&
                anotherId.year === currProblemInfo.year &&
                anotherId.isSecondary === currProblemInfo.isSecondary
              );
            })
            .map((root) => (
              <SingleMathProblem key={root.filename} filename={root.filename} />
            ))}
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
  );
}
