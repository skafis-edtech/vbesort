import { Accordion } from "react-bootstrap";
import { SubjectType, parseProblemFilename } from "../misc";
import TopicItemHeader from "./TopicItemHeader";
import TopicItemBody from "./TopicItemBody";
import { useState } from "react";

interface TopicItemProps {
  topic: { topic: string; name: string };
  yearList: string[];
  nrTopicLut: { filename: string; topic: string; answer?: string }[];
  subject: SubjectType;
  listUrl?: string;
  setListUrl?: (url: string) => void;
}

export default function TopicItem(props: TopicItemProps) {
  const [expanded, setExpanded] = useState(false);

  return (
    <Accordion.Item eventKey={props.topic.topic}>
      <TopicItemHeader
        expanded={expanded}
        setExpanded={setExpanded}
        topic={props.topic}
        problemCount={
          props.nrTopicLut.filter(
            (problem) =>
              problem.topic === props.topic.topic &&
              props.yearList.includes(
                parseProblemFilename(props.subject, problem.filename).year
              )
          ).length
        }
      />
      {expanded && <TopicItemBody {...props} />}
    </Accordion.Item>
  );
}
