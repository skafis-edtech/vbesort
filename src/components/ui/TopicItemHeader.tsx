import { Accordion } from "react-bootstrap";

export default function TopicItemHeader({
  topicName,
  problemCount,
  expanded,
  setExpanded,
}: {
  topicName: string;
  problemCount: number;
  expanded: boolean;
  setExpanded: (expanded: boolean) => void;
}) {
  return (
    <Accordion.Header onClick={() => setExpanded(!expanded)}>
      <div
        id={topicName}
        style={{
          display: "flex",
          alignItems: "center",
          width: "100%",
        }}
      >
        <div>
          <h3>{topicName.toUpperCase()}</h3>
        </div>
        <div style={{ paddingBottom: "4px", marginRight: "20px" }}>
          &nbsp;(
          {problemCount})
        </div>
      </div>
    </Accordion.Header>
  );
}
