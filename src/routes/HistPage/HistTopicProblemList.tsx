import { useEffect, useState } from "react";
import { useDarkMode } from "../../components/layout/DarkModeContext";
import { parseProblemFilename, shuffle } from "../../misc";
import { Accordion } from "react-bootstrap";
import HistProblem from "./HistProblem";

interface TopicProblemListProps {
  yearList: string[];
  nrTopicLut: { filename: string; topic: string; answer?: string }[];
  topicString: string;
}

const HistTopicProblemList: React.FC<TopicProblemListProps> = ({
  yearList,
  nrTopicLut,
  topicString,
}) => {
  const { isShuffleOn } = useDarkMode();

  const [problemList, setProblemList] = useState<
    { filename: string; topic: string; answer?: string }[]
  >([]);

  useEffect(() => {
    setProblemList(
      shuffle(
        nrTopicLut.filter((problem) => {
          const currProblemInfo = parseProblemFilename(problem.filename);
          return (
            yearList.includes(
              currProblemInfo.year.toString() + currProblemInfo.session
            ) &&
            problem.topic === topicString &&
            currProblemInfo.problemType !== "o"
          );
        }),
        isShuffleOn
      )
    );
  }, [yearList, isShuffleOn, nrTopicLut]);

  return (
    <Accordion.Body>
      {problemList.map((problem) => {
        const problemInfo = parseProblemFilename(problem.filename);
        return (
          <div key={problem.filename}>
            <hr style={{ border: "3px solid black" }} />
            <HistProblem
              key={problem.filename}
              filename={problem.filename}
              answerFilenameOrAnswer={problem.answer}
              nrTopicLutForSources={nrTopicLut.filter((pr) => {
                const prInfo = parseProblemFilename(pr.filename);
                const isSource =
                  prInfo.year === problemInfo.year &&
                  prInfo.session === problemInfo.session &&
                  prInfo.problemType === "o" &&
                  Math.floor(prInfo.problemNumber) ===
                    problemInfo.problemNumber;

                return isSource;
              })}
            />
          </div>
        );
      })}
    </Accordion.Body>
  );
};
export default HistTopicProblemList;
