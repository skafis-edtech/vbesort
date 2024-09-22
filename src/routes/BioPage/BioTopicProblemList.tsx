import { useEffect, useState } from "react";
import { useDarkMode } from "../../components/layout/DarkModeContext";
import { parseProblemFilename, shuffle } from "../../misc";
import { Accordion } from "react-bootstrap";
import BioProblem from "./BioProblem";
import ListMakerProblemContainer from "../../components/ui/ListMakerProblemContainer";

interface TopicProblemListProps {
  yearList: string[];
  nrTopicLut: { filename: string; topic: string; answer?: string }[];
  topicString: string;
}

const BioTopicProblemList: React.FC<TopicProblemListProps> = ({
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
        return (
          <div key={problem.filename}>
            <hr style={{ border: "3px solid black" }} />
            <ListMakerProblemContainer filename={problem.filename}>
              <BioProblem
                key={problem.filename}
                filename={problem.filename}
                answerFilenameOrAnswer={problem.answer}
              />
            </ListMakerProblemContainer>
          </div>
        );
      })}
    </Accordion.Body>
  );
};
export default BioTopicProblemList;
