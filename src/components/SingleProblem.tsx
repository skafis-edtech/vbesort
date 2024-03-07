import { Accordion } from "react-bootstrap";
import {
  SubjectType,
  isNotHaveAnswersMathPupp,
  isNotHaveAnswersMathVbe,
  parseProblemFilename,
} from "../misc";
import "./style.css";

export default function SingleProblem({
  filename,
  subject,
  answerLut,
}: {
  filename: string;
  subject: SubjectType;
  answerLut: { filename: string; topic: string; answer?: string }[];
}) {
  const problemInfo: any = parseProblemFilename(subject, filename);
  return (
    <>
      <div
        style={{
          paddingTop: "50px",
          paddingBottom: "50px",
          overflowX: "auto",
        }}
        className="single-problem"
      >
        <img
          loading="lazy"
          alt={filename}
          src={`${subject}-problems/${problemInfo.year.substring(
            0,
            4
          )}/${filename}`}
          style={{
            width: "auto",
            height: "auto",
            maxWidth: "900px",
          }}
        />
      </div>
      <div>
        {!["root", "sources"].includes(problemInfo.problemType) &&
          !(subject === "math" && isNotHaveAnswersMathVbe(problemInfo.year)) &&
          !(
            subject === "pupp" && isNotHaveAnswersMathPupp(problemInfo.year)
          ) && (
            <Accordion style={{ marginTop: "20px" }}>
              <Accordion.Item eventKey="answer">
                <Accordion.Header className="root-header">
                  Atsakymas
                </Accordion.Header>
                <Accordion.Body>
                  {problemInfo.section === "I" ? (
                    <h3>
                      {
                        answerLut.find(
                          (problem) => problem.filename === filename
                        )?.answer
                      }
                    </h3>
                  ) : (
                    <div
                      className="single-problem"
                      style={{
                        overflowX: "auto",
                      }}
                    >
                      <img
                        loading="lazy"
                        alt={`${
                          answerLut.find(
                            (problem) => problem.filename === filename
                          )?.answer
                        }`}
                        src={`${subject}-answers/${
                          answerLut.find(
                            (problem) => problem.filename === filename
                          )?.answer
                        }`}
                        style={{
                          width: "auto",
                          height: "auto",
                          maxWidth: "900px",
                          overflowX: "auto",
                        }}
                      />
                    </div>
                  )}
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
          )}
      </div>
    </>
  );
}
