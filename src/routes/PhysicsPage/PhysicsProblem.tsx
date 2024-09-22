import SingleProblem from "../../components/ui/SingleProblem";
import { getProblemName, parseProblemFilename } from "../../misc";

interface PhysicsProblemProps {
  filename: string;
  answerFilenameOrAnswer?: string;
}

const PhysicsProblem: React.FC<PhysicsProblemProps> = ({
  filename,
  answerFilenameOrAnswer,
}) => {
  const problemInfo = parseProblemFilename(filename);
  return (
    <div>
      <em>{getProblemName(problemInfo)}</em>
      <SingleProblem
        filename={filename}
        answerFilenameOrAnswer={answerFilenameOrAnswer}
      />
    </div>
  );
};
export default PhysicsProblem;
