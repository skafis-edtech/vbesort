import { Accordion } from "react-bootstrap";
import { MathProblemIdType, parseProblemFilename } from "../misc";
import nrTopicLut from "./data/nr-topic-lut.json";
import "../components/style.css";
import SingleMathProblem from "../components/SingleProblem";

export default function MathProblemRoot({
  currProblemInfo,
  theListItIs = false,
}: {
  currProblemInfo: MathProblemIdType;
  theListItIs?: boolean;
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
              const anotherId: any = parseProblemFilename("math", pr.filename);
              return (
                anotherId.number === Math.floor(currProblemInfo.number) &&
                anotherId.problemType === "root" &&
                anotherId.year === currProblemInfo.year
              );
            })
            .map((root) => (
              <SingleMathProblem
                key={root.filename}
                filename={root.filename}
                subject="math"
                answerLut={nrTopicLut}
                theListItIs={theListItIs}
              />
            ))}
          {nrTopicLut
            .filter((pr) => {
              const anotherId: any = parseProblemFilename("math", pr.filename);
              return (
                anotherId.number < currProblemInfo.number &&
                anotherId.number >= Math.floor(currProblemInfo.number) &&
                anotherId.problemType === "sub" &&
                anotherId.year === currProblemInfo.year
              );
            })
            .map((root) => (
              <SingleMathProblem
                key={root.filename}
                filename={root.filename}
                subject="math"
                answerLut={nrTopicLut}
                theListItIs={theListItIs}
              />
            ))}
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
  );
}
