import { Accordion } from "react-bootstrap";
import SingleMathProblem from "./SingleMathProblem";
import nrTopicLut from "./nr-topic-lut.json";
import { MathProblemIdType, parseMathProblemId, shuffle } from "../misc";
import ProblemRoot from "./ProblemRoot";
import TopicSectionHeader from "./TopicSectionHeader";

interface TopicSectionProps {
  topic: { topic: string; name: string };
  yearList: string[];
  isShuffleOn: boolean;
}

export default function TopicSection({
  topic,
  yearList,
  isShuffleOn,
}: TopicSectionProps) {
  return (
    <Accordion.Item eventKey={topic.topic}>
      <TopicSectionHeader
        topic={topic}
        problemCount={
          nrTopicLut.filter(
            (problem) =>
              problem.topic === topic.topic &&
              yearList.includes(
                `${parseMathProblemId(problem.filename).year}${
                  parseMathProblemId(problem.filename).isSecondary ? "k" : "g"
                }`
              )
          ).length
        }
      />
      <Accordion.Body>
        {shuffle(
          nrTopicLut.filter((problem) => {
            const currProblemInfo: MathProblemIdType = parseMathProblemId(
              problem.filename
            );
            return (
              yearList.includes(
                `${currProblemInfo.year}${
                  currProblemInfo.isSecondary ? "k" : "g"
                }`
              ) && problem.topic === topic.topic
            );
          }),
          isShuffleOn
        ).map((problem) => {
          const currProblemInfo: MathProblemIdType = parseMathProblemId(
            problem.filename
          );
          return (
            <div key={problem.filename} style={{}}>
              <hr />
              <em>
                {currProblemInfo.year} m.{" "}
                {currProblemInfo.isSecondary ? "pakartotinė" : "pagrindinė"}{" "}
                sesija {currProblemInfo.section} dalis
              </em>
              {currProblemInfo.problemType === "sub" && (
                <ProblemRoot currProblemInfo={currProblemInfo} />
              )}
              <SingleMathProblem filename={problem.filename} />
            </div>
          );
        })}
      </Accordion.Body>
    </Accordion.Item>
  );
}
