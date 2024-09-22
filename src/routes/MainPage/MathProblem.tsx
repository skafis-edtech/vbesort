import SingleProblem from "../../components/ui/SingleProblem";
import { getProblemName, parseProblemFilename } from "../../misc";
import MathProblemRoot from "./MathProblemRoot";

interface MathProblemProps {
  filename: string;
  answerFilenameOrAnswer?: string;
  nrTopicLutSubsetForRoot: {
    filename: string;
    topic: string;
    answer?: string;
  }[];
}

const MathProblem: React.FC<MathProblemProps> = ({
  filename,
  answerFilenameOrAnswer,
  nrTopicLutSubsetForRoot,
}) => {
  const problemInfo = parseProblemFilename(filename);
  return (
    <div>
      <em>{getProblemName(problemInfo)}</em>
      {problemInfo.problemType === "s" && (
        <MathProblemRoot nrTopicLutSubset={nrTopicLutSubsetForRoot} />
      )}
      <SingleProblem
        filename={filename}
        answerFilenameOrAnswer={answerFilenameOrAnswer}
      />
    </div>
  );
};
export default MathProblem;
