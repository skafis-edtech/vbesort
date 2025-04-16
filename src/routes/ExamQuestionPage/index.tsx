import React, { useState, useEffect } from "react";
import { Container, ProgressBar, Button } from "react-bootstrap";
import { useLocation, useNavigate } from "react-router-dom";
import { noAnsYearList, parseProblemFilename } from "../../misc";
import ProblemRenderer, { Question, ExamState } from "./ProblemRenderer";

const ExamQuestionPage: React.FC = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [questions, setQuestions] = useState<Question[]>([]);
    const [showAnswer, setShowAnswer] = useState(false);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);
    const [initialConditions, setInitialConditions] = useState<Question[]>([]);

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
                    const problemInfo = parseProblemFilename(question.filename);
                    console.log(problemInfo);
                    if (
                        !examState.selectedTopics.includes(question.topic) ||
                        !question.answer ||
                        question.answer === "SA nepaskelbtas atsakymas" ||
                        question.answer.includes("(ne oficialu)") ||
                        question.answer === "Z" ||
                        noAnsYearList[problemInfo.subjectExam].includes(
                            problemInfo.year.toString() + problemInfo.session
                        )
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

    useEffect(() => {
        // When current question changes, check if it has initial conditions
        if (questions[currentQuestionIndex]) {
            const problemInfo = parseProblemFilename(
                questions[currentQuestionIndex].filename
            );
            if (problemInfo.problemType === "s") {
                // Load initial conditions for this question
                const topicPath = `../${examState.selectedExam}/data/nr-topic-lut.json`;
                import(topicPath).then((module) => {
                    const allQuestions = module.default;
                    // Find questions that are part of the same problem set
                    const relatedQuestions = allQuestions.filter(
                        (q: Question) => {
                            const qInfo = parseProblemFilename(q.filename);
                            return (
                                qInfo.year === problemInfo.year &&
                                qInfo.session === problemInfo.session &&
                                Math.floor(qInfo.problemNumber) ===
                                    Math.floor(problemInfo.problemNumber) &&
                                qInfo.problemType === "r"
                            );
                        }
                    );
                    setInitialConditions(relatedQuestions);
                });
            } else {
                setInitialConditions([]);
            }
        }
    }, [currentQuestionIndex, questions, examState.selectedExam]);

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
    const problemInfo = parseProblemFilename(currentQuestion.filename);

    return (
        <Container className="py-4">
            <div className="mb-4">
                <ProgressBar
                    now={progress}
                    label={`${currentQuestionIndex + 1} / ${questions.length}`}
                />
            </div>

            <h5 className="mb-3">
                {problemInfo.year} m.{" "}
                {problemInfo.session === "k" ? "kartojimo" : "pagrindinė"}{" "}
                sesija, {Math.floor(problemInfo.problemNumber)} klausimas
                <span className="text-muted ms-2">
                    ({currentQuestion.filename.split(".")[0]})
                </span>
            </h5>

            <ProblemRenderer
                currentQuestion={currentQuestion}
                showAnswer={showAnswer}
                initialConditions={initialConditions}
            />

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
