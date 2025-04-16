import React from "react";
import { Container, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

interface ExamResultsProps {
    totalAnswered: number;
    correctAnswers: number;
}

const ExamResults: React.FC<ExamResultsProps> = ({
    totalAnswered,
    correctAnswers,
}) => {
    const navigate = useNavigate();
    const percentage =
        totalAnswered > 0
            ? Math.round((correctAnswers / totalAnswered) * 100)
            : 0;

    return (
        <Container className="py-4 text-center">
            <h2 className="mb-4">Egzamino rezultatai</h2>
            <div className="mb-4">
                <h4>
                    Teisingai atsakyta: {correctAnswers}/{totalAnswered}
                </h4>
                <h4>Rezultatas: {percentage}%</h4>
            </div>
            <Button
                variant="primary"
                size="lg"
                onClick={() => navigate("/mockexam")}
            >
                Baigti egzaminą
            </Button>
        </Container>
    );
};

export default ExamResults;
