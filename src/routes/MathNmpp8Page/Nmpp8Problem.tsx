import ListMakerProblemContainer from "../../components/ui/ListMakerProblemContainer";
import SingleProblem from "../../components/ui/SingleProblem";
import { getProblemName, parseProblemFilename } from "../../misc";

interface PhysicsProblemProps {
  filename: string;
  answerFilenameOrAnswer?: string;
}

const Nmpp8Problem: React.FC<PhysicsProblemProps> = ({
  filename,
  answerFilenameOrAnswer,
}) => {
  const problemInfo = parseProblemFilename(filename);
  return (
    <ListMakerProblemContainer filename={filename}>
      <em>{getProblemName(problemInfo)}</em>
      <SingleProblem
        filename={filename}
        answerFilenameOrAnswer={answerFilenameOrAnswer}
      />
    </ListMakerProblemContainer>
  );
};
export default Nmpp8Problem;
