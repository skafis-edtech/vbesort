import { Accordion } from "react-bootstrap";
import "../../components/ui/style.css";
import SingleMathProblem from "../../components/ui/SingleProblem";
import { useState } from "react";

interface MathProblemRootProps {
  nrTopicLutSubset: { filename: string; topic: string; answer?: string }[];
}

const MathProblemRoot: React.FC<MathProblemRootProps> = ({
  nrTopicLutSubset,
}) => {
  const [expanded, setExpanded] = useState(false);
  return (
    <Accordion style={{ marginTop: "20px" }}>
      <Accordion.Item eventKey="crazy">
        <Accordion.Header
          className="root-header"
          onClick={() => setExpanded(!expanded)}
        >
          Uždavinio sąlygos pradžia
        </Accordion.Header>
        {expanded && (
          <Accordion.Body>
            {nrTopicLutSubset.map((problem) => (
              <SingleMathProblem
                key={problem.filename}
                filename={problem.filename}
                answerFilenameOrAnswer={problem.answer}
              />
            ))}
          </Accordion.Body>
        )}
      </Accordion.Item>
    </Accordion>
  );
};

export default MathProblemRoot;
