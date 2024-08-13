import { Accordion } from "react-bootstrap";
import TopicItemHeader from "./TopicItemHeader";
import { useState } from "react";

interface TopicItemProps {
  topicName: string;
  problemCount: number;
  children: React.ReactNode;
}

const TopicItem: React.FC<TopicItemProps> = ({
  topicName,
  problemCount,
  children,
}) => {
  const [expanded, setExpanded] = useState(false);
  return (
    <Accordion.Item eventKey={topicName}>
      <TopicItemHeader
        expanded={expanded}
        setExpanded={setExpanded}
        topicName={topicName}
        problemCount={problemCount}
      />
      {expanded && children}
    </Accordion.Item>
  );
};

export default TopicItem;
