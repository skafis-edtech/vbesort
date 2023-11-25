import { Accordion, Form } from "react-bootstrap";
import SingleMathProblem from "./SingleMathProblem";
import nrTopicLut from "./nr-topic-lut.json";
import { MathProblemIdType, parseMathProblemId } from "../misc";
import React from "react";

export default function TopicSection({
  topic,
  yearList,
}: {
  topic: { topic: string; name: string };
  yearList: number[];
}) {
  return (
    <Accordion.Item eventKey={topic.topic}>
      <Accordion.Header>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            width: "100%",
          }}
        >
          <div>
            <h3>{topic.name.toUpperCase()}</h3>
          </div>
          <div style={{ paddingBottom: "4px", marginRight: "20px" }}>
            &nbsp;(
            {
              nrTopicLut.filter(
                (problem) =>
                  problem.topic === topic.topic &&
                  yearList.includes(parseMathProblemId(problem.filename).year)
              ).length
            }
            )
          </div>
        </div>
      </Accordion.Header>

      <Accordion.Body>
        {nrTopicLut
          .filter((problem) => problem.topic === topic.topic)
          .map((problem) => {
            const theBigId = parseMathProblemId(problem.filename);
            return (
              <div key={problem.filename}>
                {theBigId.problemType === "sub" &&
                  yearList.includes(theBigId.year) &&
                  nrTopicLut
                    .filter((pr) => {
                      const anotherId: MathProblemIdType = parseMathProblemId(
                        pr.filename
                      );
                      return (
                        anotherId.number === Math.floor(theBigId.number) &&
                        anotherId.problemType === "root" &&
                        anotherId.year === theBigId.year
                      );
                    })
                    .map((root) => (
                      <Accordion key={root.filename}>
                        <Accordion.Item eventKey="crazy">
                          <Accordion.Header>
                            Apie ką čia kalba?
                          </Accordion.Header>
                          <Accordion.Body>
                            <SingleMathProblem
                              key={root.filename}
                              filename={root.filename}
                            />
                          </Accordion.Body>
                        </Accordion.Item>
                      </Accordion>
                    ))}
                {yearList.includes(theBigId.year) && (
                  <SingleMathProblem filename={problem.filename} />
                )}
              </div>
            );
          })}
      </Accordion.Body>
    </Accordion.Item>
  );
}
