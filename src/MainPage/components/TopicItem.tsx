import { Accordion } from "react-bootstrap";
import { SubjectType, parseProblemFilename, shuffle } from "../../misc";
import TopicItemHeader from "./TopicItemHeader";
import MathProblemRoot from "../MathTab/MathProblemRoot";
import SingleProblem from "./SingleProblem";
import HistProblemRoot from "../HistTab/HistProblemRoot";
import PuppProblemRoot from "../PuppTab/PuppProblemRoot";

interface TopicItemProps {
  topic: { topic: string; name: string };
  yearList: string[];
  isShuffleOn: boolean;
  nrTopicLut: { filename: string; topic: string; answer?: string }[];
  subject: SubjectType;
}

export default function TopicItem({
  topic,
  yearList,
  isShuffleOn,
  nrTopicLut,
  subject,
}: TopicItemProps) {
  return (
    <Accordion.Item eventKey={topic.topic}>
      <TopicItemHeader
        topic={topic}
        problemCount={
          nrTopicLut.filter(
            (problem) =>
              problem.topic === topic.topic &&
              yearList.includes(
                parseProblemFilename(subject, problem.filename).year
              )
          ).length
        }
      />
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
                {currProblemInfo.year} {currProblemInfo.section}{" "}
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
    </Accordion.Item>
  );
}
