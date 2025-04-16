import React, { useState, useEffect } from "react";
import { Container, ProgressBar, Button, Card } from "react-bootstrap";
import { useLocation, useNavigate } from "react-router-dom";
import SingleProblem from "../../components/ui/SingleProblem";

interface ExamState {
    selectedExam: string;
    selectedTopics: string[];
    questionCount: number;
}

interface Question {
    filename: string;
    answer?: string;
    topic: string;
}

const ExamQuestionPage: React.FC = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [questions, setQuestions] = useState<Question[]>([]);
    const [showAnswer, setShowAnswer] = useState(false);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    const examState = location.state as ExamState;

    useEffect(() => {
        const loadQuestions = async () => {
            try {
                setLoading(true);
                setError(null);

                // Load questions for selected topics
                const allQuestions: Question[] = [];
                const topicPath = `../${examState.selectedExam}/data/nr-topic-lut.json`;
                const questions = await import(topicPath);
                for (const question of questions.default) {
                    if (
                        !examState.selectedTopics.includes(question.topic) ||
                        !question.answer
                    ) {
                        continue;
                    }
                    allQuestions.push(question);
                }

                // Randomly select questions
                const shuffled = allQuestions.sort(() => 0.5 - Math.random());
                setQuestions(shuffled.slice(0, examState.questionCount));
                setLoading(false);
            } catch (error) {
                console.error("Failed to load questions:", error);
                setError(
                    "Nepavyko įkelti klausimų. Prašome bandyti dar kartą."
                );
                setLoading(false);
            }
        };

        if (examState) {
            loadQuestions();
        } else {
            navigate("/mockexam");
        }
    }, [examState, navigate]);

    const handleNextQuestion = () => {
        if (currentQuestionIndex < questions.length - 1) {
            setCurrentQuestionIndex((prev) => prev + 1);
            setShowAnswer(false);
        }
    };

    const handlePreviousQuestion = () => {
        if (currentQuestionIndex > 0) {
            setCurrentQuestionIndex((prev) => prev - 1);
            setShowAnswer(false);
        }
    };

    const progress = ((currentQuestionIndex + 1) / questions.length) * 100;

    if (loading) {
        return (
            <Container className="py-4">
                <div className="text-center">Kraunami klausimai...</div>
            </Container>
        );
    }

    if (error) {
        return (
            <Container className="py-4">
                <div className="text-center text-danger">{error}</div>
                <Button
                    variant="primary"
                    onClick={() => navigate("/mockexam")}
                    className="mt-3"
                >
                    Grįžti į egzamino pasirinkimą
                </Button>
            </Container>
        );
    }

    const currentQuestion = questions[currentQuestionIndex];

    return (
        <Container className="py-4">
            <div className="mb-4">
                <ProgressBar
                    now={progress}
                    label={`${currentQuestionIndex + 1} / ${questions.length}`}
                />
            </div>

            <Card className="mb-4">
                <Card.Body>
                    <SingleProblem
                        filename={currentQuestion.filename}
                        answerFilenameOrAnswer={
                            showAnswer ? currentQuestion.answer : undefined
                        }
                    />
                </Card.Body>
            </Card>

            <div className="d-flex justify-content-between align-items-center">
                <Button
                    variant="secondary"
                    onClick={handlePreviousQuestion}
                    disabled={currentQuestionIndex === 0}
                >
                    ← Ankstesnis
                </Button>

                <Button
                    variant="primary"
                    onClick={() => setShowAnswer(true)}
                    disabled={showAnswer}
                >
                    Rodyti atsakymą
                </Button>

                <Button
                    variant="secondary"
                    onClick={handleNextQuestion}
                    disabled={currentQuestionIndex === questions.length - 1}
                >
                    Sekantis →
                </Button>
            </div>

            {currentQuestionIndex === questions.length - 1 && showAnswer && (
                <div className="text-center mt-4">
                    <Button
                        variant="primary"
                        onClick={() => navigate("/mockexam")}
                    >
                        Baigti egzaminą
                    </Button>
                </div>
            )}
        </Container>
    );
};

export default ExamQuestionPage;
