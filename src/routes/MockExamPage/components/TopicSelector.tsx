import React from "react";
import { Card, Row, Col, Button, Alert } from "react-bootstrap";

interface Topic {
  topic: string;
  name: string;
}

interface TopicSelectorProps {
  topics: Topic[];
  selectedTopics: string[];
  onTopicSelect: (topic: string) => void;
  error: string | null;
  disabled?: boolean;
  questionCounts: { [key: string]: number };
}

const TopicSelector: React.FC<TopicSelectorProps> = ({
  topics,
  selectedTopics,
  onTopicSelect,
  error,
  disabled = false,
  questionCounts,
}) => {
  const handleSelectAll = () => {
    topics.forEach((topic) => {
      if (!selectedTopics.includes(topic.topic)) {
        onTopicSelect(topic.topic);
      }
    });
  };

  const handleDeselectAll = () => {
    topics.forEach((topic) => {
      if (selectedTopics.includes(topic.topic)) {
        onTopicSelect(topic.topic);
      }
    });
  };

  if (disabled) {
    return null;
  }

  return (
    <div className="mt-4">
      <h3 className="text-center mb-4">Pasirinkite temas</h3>
      {error && (
        <Alert variant="danger" className="mb-4">
          {error}
        </Alert>
      )}
      <div className="text-center mb-3">
        <Button
          variant="outline-primary"
          className="me-2"
          onClick={handleSelectAll}
          disabled={topics.length === selectedTopics.length}
        >
          Pasirinkti visas
        </Button>
        <Button
          variant="outline-secondary"
          onClick={handleDeselectAll}
          disabled={selectedTopics.length === 0}
        >
          Atžymėti visas
        </Button>
      </div>
      <Row xs={1} md={2} lg={3} className="g-4">
        {topics.map((topic) => (
          <Col key={topic.topic}>
            <Card
              className={`h-100 ${
                selectedTopics.includes(topic.topic) ? "border-primary" : ""
              }`}
              onClick={() => onTopicSelect(topic.topic)}
              style={{ cursor: "pointer" }}
            >
              <Card.Body>
                <Card.Title className="text-center">
                  {topic.name} ({questionCounts[topic.topic] || 0})
                </Card.Title>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default TopicSelector;
