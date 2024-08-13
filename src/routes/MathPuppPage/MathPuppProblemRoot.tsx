import { Accordion } from "react-bootstrap";
import "../../components/ui/style.css";
import SingleProblem from "../../components/ui/SingleProblem";
import { useState } from "react";

interface MathPuppProblemRootProps {
  nrTopicLutSubset: { filename: string; topic: string; answer?: string }[];
}

const MathPuppProblemRoot: React.FC<MathPuppProblemRootProps> = ({
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
              <SingleProblem
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

export default MathPuppProblemRoot;
