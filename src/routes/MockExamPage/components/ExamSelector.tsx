import React from "react";
import { Card, Row, Col } from "react-bootstrap";
import { type Route } from "../../routes";

interface ExamSelectorProps {
  examRoutes: Route[];
  selectedExam: string | null;
  onExamSelect: (path: string) => void;
}

const ExamSelector: React.FC<ExamSelectorProps> = ({
  examRoutes,
  selectedExam,
  onExamSelect,
}) => {
  return (
    <>
      <h3 className="text-center mb-4">Pasirinkite egzaminą</h3>
      <Row xs={1} md={2} lg={3} className="g-4">
        {examRoutes.map((route) => (
          <Col key={route.path}>
            <Card
              className={`h-100 ${
                selectedExam === route.filepath ? "border-primary" : ""
              }`}
              onClick={() => onExamSelect(route.filepath)}
              style={{ cursor: "pointer" }}
            >
              <Card.Body>
                <Card.Title className="text-center">{route.title}</Card.Title>
                {selectedExam === route.filepath && (
                  <div className="text-center mt-2">
                    <span className="text-primary">✓ Pasirinkta</span>
                  </div>
                )}
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </>
  );
};

export default ExamSelector;
