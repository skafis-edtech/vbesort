import { useEffect, useState } from "react";
import { useDarkMode } from "../../components/layout/DarkModeContext";
import { parseProblemFilename, shuffle } from "../../misc";
import { Accordion } from "react-bootstrap";
import MathPuppProblem from "./MathPuppProblem";

interface TopicProblemListProps {
  yearList: string[];
  nrTopicLut: { filename: string; topic: string; answer?: string }[];
  topicString: string;
}

const MathPuppTopicProblemList: React.FC<TopicProblemListProps> = ({
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
            ) && problem.topic === topicString
          );
        }),
        isShuffleOn
      )
    );
  }, [yearList, isShuffleOn, nrTopicLut, topicString]);

  return (
    <Accordion.Body>
      {problemList.map((problem) => {
        const problemInfo = parseProblemFilename(problem.filename);
        return (
          <div key={problem.filename}>
            <hr style={{ border: "3px solid black" }} />
            <MathPuppProblem
              key={problem.filename}
              filename={problem.filename}
              nrTopicLutSubsetForRoot={nrTopicLut.filter((pr) => {
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
              answerFilenameOrAnswer={problem.answer}
            />
          </div>
        );
      })}
    </Accordion.Body>
  );
};
export default MathPuppTopicProblemList;
