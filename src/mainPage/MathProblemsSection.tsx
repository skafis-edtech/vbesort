import { Accordion } from "react-bootstrap";
import TopicSection from "./TopicSection";
import topics from "./topics-names-list.json";

export default function MathProblemsSection() {
  return (
    <div>
      <Accordion>
        {topics.map((topic) => (
          <TopicSection topic={topic} />
        ))}
      </Accordion>
    </div>
  );
}
