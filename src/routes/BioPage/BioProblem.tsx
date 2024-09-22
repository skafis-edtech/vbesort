import SingleProblem from "../../components/ui/SingleProblem";
import { getProblemName, parseProblemFilename } from "../../misc";

interface ProblemProps {
  filename: string;
  answerFilenameOrAnswer?: string;
}

const BioProblem: React.FC<ProblemProps> = ({
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
export default BioProblem;
