import { Accordion } from "react-bootstrap";

export default function TopicItemHeader({
  topic,
  problemCount,
  expanded,
  setExpanded,
}: {
  topic: { topic: string; name: string };
  problemCount: number;
  expanded: boolean;
  setExpanded: (expanded: boolean) => void;
}) {
  return (
    <Accordion.Header onClick={() => setExpanded(!expanded)}>
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
          {problemCount})
        </div>
      </div>
    </Accordion.Header>
  );
}
