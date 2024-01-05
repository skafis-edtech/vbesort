import { Accordion } from "react-bootstrap";
import { SubjectType, parseProblemFilename } from "../../misc";
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
    <div
      style={{
        paddingTop: "50px",
        paddingBottom: "50px",
        overflowX: "auto",
      }}
    >
      <img
        loading="lazy"
        alt={filename}
        src={`${subject}-problems/${problemInfo.year}/${filename}`}
      />
      {!["root", "sources"].includes(problemInfo.problemType) && (
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
                  loading="lazy"
                  alt={`answer screenshot: ${
                    answerLut.find((problem) => problem.filename === filename)
                      ?.answer
                  }`}
                  src={`${subject}-answers/${
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
