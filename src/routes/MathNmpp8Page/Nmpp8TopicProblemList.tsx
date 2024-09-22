import { useEffect, useState } from "react";
import { useDarkMode } from "../../components/layout/DarkModeContext";
import { parseProblemFilename, shuffle } from "../../misc";
import { Accordion } from "react-bootstrap";
import Nmpp8Problem from "./Nmpp8Problem";
import ListMakerProblemContainer from "../../components/ui/ListMakerProblemContainer";

interface TopicProblemListProps {
  yearList: string[];
  nrTopicLutOfTopic: { filename: string; topic: string; answer?: string }[];
}

const Nmpp8TopicProblemList: React.FC<TopicProblemListProps> = ({
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
          <ListMakerProblemContainer filename={problem.filename}>
            <Nmpp8Problem
              key={problem.filename}
              filename={problem.filename}
              answerFilenameOrAnswer={problem.answer}
            />
          </ListMakerProblemContainer>
        </div>
      ))}
    </Accordion.Body>
  );
};
export default Nmpp8TopicProblemList;
