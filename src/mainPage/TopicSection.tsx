import { Accordion } from "react-bootstrap";
import SingleMathProblem from "./SingleMathProblem";
import nrTopicLut from "./nr-topic-lut.json";
import { MathProblemIdType, parseMathProblemId } from "../misc";

export default function TopicSection({
  topic,
}: {
  topic: { topic: string; name: string };
}) {
  return (
    <Accordion.Item eventKey={topic.topic}>
      <Accordion.Header>{topic.name} </Accordion.Header>
      <Accordion.Body>
        {nrTopicLut
          .filter((problem) => problem.topic === topic.topic)
          .map((problem) => {
            const theBigId = parseMathProblemId(problem.filename);
            return (
              <>
                {theBigId.problemType === "sub" &&
                  nrTopicLut
                    .filter((pr) => {
                      const anotherId: MathProblemIdType = parseMathProblemId(
                        pr.filename
                      );
                      return (
                        anotherId.number === Math.floor(theBigId.number) &&
                        anotherId.problemType === "root"
                      );
                    })
                    .map((root) => (
                      <Accordion>
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
                <SingleMathProblem
                  key={problem.filename}
                  filename={problem.filename}
                />
              </>
            );
          })}
      </Accordion.Body>
    </Accordion.Item>
  );
}
