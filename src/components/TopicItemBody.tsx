import { Accordion } from "react-bootstrap";
import {
  SubjectType,
  getLongYearName,
  parseProblemFilename,
  shuffle,
} from "../misc";
import MathProblemRoot from "../MainPage/MathProblemRoot";
import PuppProblemRoot from "../MathPuppPage/PuppProblemRoot";
import HistProblemRoot from "../HistPage/HistProblemRoot";
import { useDarkMode } from "./DarkModeContext";
import SingleProblem from "./SingleProblem";

interface TopicItemBodyProps {
  topic: { topic: string; name: string };
  yearList: string[];
  nrTopicLut: { filename: string; topic: string; answer?: string }[];
  subject: SubjectType;
}

export default function TopicItemBody({
  topic,
  yearList,
  nrTopicLut,
  subject,
}: TopicItemBodyProps) {
  const { isShuffleOn } = useDarkMode();

  return (
    <Accordion.Body>
      {shuffle(
        nrTopicLut.filter((problem) => {
          const currProblemInfo: any = parseProblemFilename(
            subject,
            problem.filename
          );
          return (
            yearList.includes(currProblemInfo.year) &&
            problem.topic === topic.topic
          );
        }),
        isShuffleOn
      ).map((problem) => {
        const currProblemInfo: any = parseProblemFilename(
          subject,
          problem.filename
        );
        return (
          <div key={problem.filename} style={{}}>
            <hr style={{ border: "3px solid black" }} />
            <em>
              {getLongYearName(currProblemInfo.year)} {currProblemInfo.section}{" "}
              {subject !== "pupp" ? "dalis" : ""}
            </em>

            {currProblemInfo.problemType === "sub" && subject === "math" && (
              <MathProblemRoot currProblemInfo={currProblemInfo} />
            )}
            {currProblemInfo.problemType === "questions" &&
              subject === "hist" && (
                <HistProblemRoot questionsFilename={problem.filename} />
              )}

            {currProblemInfo.problemType === "sub" && subject === "pupp" && (
              <PuppProblemRoot currProblemInfo={currProblemInfo} />
            )}

            <SingleProblem
              filename={problem.filename}
              subject={subject}
              answerLut={nrTopicLut}
            />
          </div>
        );
      })}
    </Accordion.Body>
  );
}
