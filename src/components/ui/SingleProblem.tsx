import { Accordion } from "react-bootstrap";
import { noAnsYearList, parseProblemFilename } from "../../misc";
import "./style.css";
import { useState } from "react";

interface SingleProblemProps {
  filename: string;
  answerFilenameOrAnswer?: string;
}

const SingleProblem: React.FC<SingleProblemProps> = ({
  filename,
  answerFilenameOrAnswer,
}) => {
  const problemInfo = parseProblemFilename(filename);
  const problemSrc = `${problemInfo.subjectExam}-problems/${problemInfo.year}/${filename}`;
  const answerSrc = `${problemInfo.subjectExam}-answers/${answerFilenameOrAnswer}`;

  const [answerExpanded, setAnswerExpanded] = useState(false);
  return (
    <>
      <div
        style={{
          marginTop: "10px",
          marginBottom: "10px",
          overflowX: "auto",
          overflowY: "auto",
        }}
        className="single-problem"
      >
        <img
          loading="lazy"
          alt={filename}
          src={problemSrc}
          style={{
            width: "auto",
            height: "auto",
            maxWidth: "900px",
          }}
        />
      </div>

      <div>
        {answerFilenameOrAnswer &&
          !noAnsYearList[problemInfo.subjectExam].includes(
            problemInfo.year.toString() + problemInfo.session
          ) && (
            <Accordion>
              <Accordion.Item eventKey="answer">
                <Accordion.Header
                  className="root-header"
                  onClick={() => setAnswerExpanded(!answerExpanded)}
                >
                  Atsakymas
                </Accordion.Header>
                {answerExpanded && (
                  <Accordion.Body>
                    {!answerFilenameOrAnswer.includes(".png") ? (
                      <h3>{answerFilenameOrAnswer}</h3>
                    ) : (
                      <div
                        className="single-problem"
                        style={{
                          overflowX: "auto",
                        }}
                      >
                        <img
                          loading="lazy"
                          alt={answerFilenameOrAnswer}
                          src={answerSrc}
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
                )}
              </Accordion.Item>
            </Accordion>
          )}
      </div>
    </>
  );
};

export default SingleProblem;
