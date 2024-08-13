import { useEffect, useState } from "react";
import { useDarkMode } from "../../components/layout/DarkModeContext";
import { parseProblemFilename, shuffle } from "../../misc";
import { Accordion } from "react-bootstrap";
import PhysicsProblem from "./PhysicsProblem";

interface TopicProblemListProps {
  yearList: string[];
  nrTopicLutOfTopic: { filename: string; topic: string; answer?: string }[];
}

const PhysicsTopicProblemList: React.FC<TopicProblemListProps> = ({
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
      {problemList.map((problem) => (
        <div key={problem.filename}>
          <hr style={{ border: "3px solid black" }} />
          <PhysicsProblem
            key={problem.filename}
            filename={problem.filename}
            answerFilenameOrAnswer={problem.answer}
          />
        </div>
      ))}
    </Accordion.Body>
  );
};
export default PhysicsTopicProblemList;
