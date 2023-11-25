import { Accordion } from "react-bootstrap";
import SingleMathProblem from "./SingleMathProblem";
import nrTopicLut from "./nr-topic-lut.json";
import { MathProblemIdType, parseMathProblemId } from "../misc";
import ProblemRoot from "./ProblemRoot";
import TopicSectionHeader from "./TopicSectionHeader";

export default function TopicSection({
  topic,
  yearList,
}: {
  topic: { topic: string; name: string };
  yearList: number[];
}) {
  return (
    <Accordion.Item eventKey={topic.topic}>
      <TopicSectionHeader
        topic={topic}
        problemCount={
          nrTopicLut.filter(
            (problem) =>
              problem.topic === topic.topic &&
              yearList.includes(parseMathProblemId(problem.filename).year)
          ).length
        }
      />
      <Accordion.Body>
        {nrTopicLut
          .filter((problem) => {
            const currProblemInfo: MathProblemIdType = parseMathProblemId(
              problem.filename
            );
            return (
              yearList.includes(currProblemInfo.year) &&
              problem.topic === topic.topic
            );
          })
          .map((problem) => {
            const currProblemInfo: MathProblemIdType = parseMathProblemId(
              problem.filename
            );
            return (
              <div
                key={problem.filename}
                style={{ paddingTop: "50px", paddingBottom: "50px" }}
              >
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
