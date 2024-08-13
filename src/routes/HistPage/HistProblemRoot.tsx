import { Accordion } from "react-bootstrap";
import nrTopicLut from "./data/nr-topic-lut.json";
import "../../components/style.css";
import SingleProblem from "../../components/ui/SingleProblem";

export default function HistProblemRoot({
  questionsFilename,
}: {
  questionsFilename: string;
}) {
  return (
    <Accordion style={{ marginTop: "20px" }}>
      <Accordion.Item eventKey="crazy">
        <Accordion.Header className="root-header">Šaltiniai</Accordion.Header>
        <Accordion.Body>
          {/* <SingleProblem
            filename={
              questionsFilename.substring(0, 8) +
              "s" +
              questionsFilename.substring(9)
            }
            subject="hist"
            answerLut={nrTopicLut}
          /> */}
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
  );
}
