import { useEffect, useState } from "react";
import { useDarkMode } from "../../components/layout/DarkModeContext";
import { parseProblemFilename, shuffle } from "../../misc";
import { Accordion } from "react-bootstrap";
import MathProblem from "./MathProblem";

interface TopicProblemListProps {
  yearList: string[];
  nrTopicLutOfTopic: { filename: string; topic: string; answer?: string }[];
}

const MathTopicProblemList: React.FC<TopicProblemListProps> = ({
  yearList,
  nrTopicLutOfTopic,
}) => {
  const { isShuffleOn } = useDarkMode();

  const [problemList, setProblemList] = useState<
    { filename: string; topic: string; answer?: string }[]
  >([]);

  useEffect(() => {
    setProblemList(
      shuffle(
        nrTopicLutOfTopic.filter((problem) => {
          const currProblemInfo = parseProblemFilename(problem.filename);
          return yearList.includes(
            currProblemInfo.year.toString() + currProblemInfo.session
          );
        }),
        isShuffleOn
      )
    );
  }, [yearList, isShuffleOn, nrTopicLutOfTopic]);

  return (
    <Accordion.Body>
      {problemList.map((problem) => {
        const problemInfo = parseProblemFilename(problem.filename);
        return (
          <div key={problem.filename}>
            <hr style={{ border: "3px solid black" }} />
            <MathProblem
              key={problem.filename}
              filename={problem.filename}
              nrTopicLutSubsetForRoot={problemList.filter((pr) => {
                const prInfo = parseProblemFilename(pr.filename);
                return (
                  (prInfo.year === problemInfo.year &&
                    prInfo.session === problemInfo.session &&
                    prInfo.problemNumber < problemInfo.problemNumber &&
                    prInfo.problemNumber >
                      Math.floor(problemInfo.problemNumber) &&
                    prInfo.problemType === "s") ||
                  (prInfo.year === problemInfo.year &&
                    prInfo.session === problemInfo.session &&
                    prInfo.problemNumber ===
                      Math.floor(problemInfo.problemNumber) &&
                    prInfo.problemType === "r")
                );
              })}
            />
          </div>
        );
      })}
    </Accordion.Body>
  );
};
export default MathTopicProblemList;
