import SingleProblem from "../../components/ui/SingleProblem";
import { getProblemName, parseProblemFilename } from "../../misc";
import MathPuppProblemRoot from "./MathPuppProblemRoot";

interface MathPuppProblemProps {
  filename: string;
  answerFilenameOrAnswer?: string;
  nrTopicLutSubsetForRoot: {
    filename: string;
    topic: string;
    answer?: string;
  }[];
}

const MathPuppProblem: React.FC<MathPuppProblemProps> = ({
  filename,
  answerFilenameOrAnswer,
  nrTopicLutSubsetForRoot,
}) => {
  const problemInfo = parseProblemFilename(filename);
  return (
    <div>
      <em>{getProblemName(problemInfo)}</em>
      {nrTopicLutSubsetForRoot.length > 0 && (
        <MathPuppProblemRoot nrTopicLutSubset={nrTopicLutSubsetForRoot} />
      )}
      <SingleProblem
        filename={filename}
        answerFilenameOrAnswer={answerFilenameOrAnswer}
      />
    </div>
  );
};
export default MathPuppProblem;
