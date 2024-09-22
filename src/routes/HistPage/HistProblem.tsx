import SingleProblem from "../../components/ui/SingleProblem";
import { getProblemName, parseProblemFilename } from "../../misc";
import HistProblemRoot from "./HistProblemRoot";

interface ProblemProps {
  filename: string;
  answerFilenameOrAnswer?: string;
  nrTopicLutForSources: {
    filename: string;
    topic: string;
    answer?: string;
  }[];
}

const HistProblem: React.FC<ProblemProps> = ({
  filename,
  answerFilenameOrAnswer,
  nrTopicLutForSources,
}) => {
  const problemInfo = parseProblemFilename(filename);
  return (
    <div>
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
    </div>
  );
};
export default HistProblem;
