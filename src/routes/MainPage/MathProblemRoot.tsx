import { Accordion } from "react-bootstrap";
import "../../components/ui/style.css";
import SingleProblem from "../../components/ui/SingleProblem";
import { useState } from "react";

interface MathProblemRootProps {
  nrTopicLutSubset: { filename: string; topic: string; answer?: string }[];
  defaultExpanded?: boolean;
}

const MathProblemRoot: React.FC<MathProblemRootProps> = ({
  nrTopicLutSubset,
  defaultExpanded = false,
}) => {
  return (
    <Accordion
      defaultActiveKey={defaultExpanded ? "0" : undefined}
      style={{ marginTop: "20px" }}
    >
      <Accordion.Item eventKey="0">
        <Accordion.Header className="root-header">
          Uždavinio sąlygos pradžia
        </Accordion.Header>
        <Accordion.Body>
          {nrTopicLutSubset.map((problem) => (
            <SingleProblem
              key={problem.filename}
              filename={problem.filename}
              answerFilenameOrAnswer={problem.answer}
            />
          ))}
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
  );
};

export default MathProblemRoot;
