import { useEffect } from "react";
import ListMakerProblemContainer from "../../components/ui/ListMakerProblemContainer";
import SingleProblem from "../../components/ui/SingleProblem";
import { getProblemName, parseProblemFilename } from "../../misc";
import HistProblemRoot from "./HistProblemRoot";

interface MathProblemProps {
  filename: string;
  answerFilenameOrAnswer?: string;
  nrTopicLutForSources: {
    filename: string;
    topic: string;
    answer?: string;
  }[];
}

const HistProblem: React.FC<MathProblemProps> = ({
  filename,
  answerFilenameOrAnswer,
  nrTopicLutForSources,
}) => {
  const problemInfo = parseProblemFilename(filename);
  useEffect(() => {
    console.log(problemInfo);
    console.log(nrTopicLutForSources);
  }, [problemInfo]);
  return (
    <ListMakerProblemContainer filename={filename}>
      <em>{getProblemName(problemInfo)}</em>
      {problemInfo.problemType === "q" && nrTopicLutForSources.length > 0 && (
        <div>
          {nrTopicLutForSources.map((source) => (
            <HistProblemRoot key={source.filename} filename={source.filename} />
          ))}
        </div>
      )}
      <SingleProblem
        filename={filename}
        answerFilenameOrAnswer={answerFilenameOrAnswer}
      />
    </ListMakerProblemContainer>
  );
};
export default HistProblem;
