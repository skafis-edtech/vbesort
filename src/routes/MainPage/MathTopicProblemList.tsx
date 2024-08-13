import { useEffect, useState } from "react";
import { useDarkMode } from "../../components/layout/DarkModeContext";
import { parseProblemFilename, shuffle } from "../../misc";
import { Accordion } from "react-bootstrap";
import MathProblem from "./MathProblem";

interface TopicProblemListProps {
  yearList: string[];
  nrTopicLut: { filename: string; topic: string; answer?: string }[];
  topicString: string;
}

const MathTopicProblemList: React.FC<TopicProblemListProps> = ({
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
            <MathProblem
              key={problem.filename}
              filename={problem.filename}
              answerFilenameOrAnswer={problem.answer}
              nrTopicLutSubsetForRoot={nrTopicLut
                .filter((pr) => {
                  const prInfo = parseProblemFilename(pr.filename);
                  const isRootOrPrevSub =
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
                      prInfo.problemType === "r");

                  return isRootOrPrevSub;
                })
                .sort((a, b) => {
                  const aInfo = parseProblemFilename(a.filename);
                  const bInfo = parseProblemFilename(b.filename);
                  return aInfo.problemNumber - bInfo.problemNumber;
                })}
            />
          </div>
        );
      })}
    </Accordion.Body>
  );
};
export default MathTopicProblemList;
