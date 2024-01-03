import { Accordion } from "react-bootstrap";
import { MathProblemIdType, parseProblemFilename } from "../../misc";
import answerLut from "./data/nr-topic-lut.json";
import "./style.css";

export default function SingleProblem({ filename }: { filename: string }) {
  const problemInfo: any = parseProblemFilename("math", filename);
  return (
    <div
      style={{
        paddingTop: "50px",
        paddingBottom: "50px",
        overflowX: "auto",
      }}
    >
      <img
        alt={filename}
        src={`math-problems/${problemInfo.year}/${filename}`}
      />
      {problemInfo.problemType !== "root" && (
        <Accordion style={{ marginTop: "20px" }}>
          <Accordion.Item eventKey="answer">
            <Accordion.Header className="root-header">
              Atsakymas
            </Accordion.Header>
            <Accordion.Body>
              {problemInfo.section === "I" ? (
                <h3>
                  {
                    answerLut.find((problem) => problem.filename === filename)
                      ?.answer
                  }
                </h3>
              ) : (
                <img
                  alt={`answer screenshot: ${
                    answerLut.find((problem) => problem.filename === filename)
                      ?.answer
                  }`}
                  src={`math-answers/${
                    answerLut.find((problem) => problem.filename === filename)
                      ?.answer
                  }`}
                />
              )}
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
      )}
    </div>
  );
}
