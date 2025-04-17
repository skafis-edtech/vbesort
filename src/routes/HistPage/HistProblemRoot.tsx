import { Accordion } from "react-bootstrap";
import "../../components/ui/style.css";
import SingleProblem from "../../components/ui/SingleProblem";
import { fracToLetter, parseProblemFilename } from "../../misc";

export default function HistProblemRoot({ filename }: { filename: string }) {
  const sourceInfo = parseProblemFilename(filename);
  const sourceLetter =
    fracToLetter[Number((sourceInfo.problemNumber % 1).toFixed(1))];

  return (
    <Accordion style={{ marginTop: "20px" }}>
      <Accordion.Item eventKey={"crazy" + filename}>
        <Accordion.Header className="root-header">
          Šaltinis {sourceLetter}
        </Accordion.Header>
        <Accordion.Body>
          <SingleProblem filename={filename} />
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
  );
}
