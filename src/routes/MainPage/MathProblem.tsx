import ListMakerProblemContainer from "../../components/ui/ListMakerProblemContainer";
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
    <ListMakerProblemContainer filename={filename}>
      <em>{getProblemName(problemInfo)}</em>
      {nrTopicLutSubsetForRoot.length > 0 && (
        <MathProblemRoot nrTopicLutSubset={nrTopicLutSubsetForRoot} />
      )}
      <SingleProblem
        filename={filename}
        answerFilenameOrAnswer={answerFilenameOrAnswer}
      />
    </ListMakerProblemContainer>
  );
};
export default MathProblem;
