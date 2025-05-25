import React, { useState, useEffect } from "react";
import { Container, ProgressBar, Button, ButtonGroup } from "react-bootstrap";
import { useLocation, useNavigate } from "react-router-dom";
import { noAnsYearList, parseProblemFilename } from "../../misc";
import ProblemRenderer, { Question, ExamState } from "./ProblemRenderer";
import ExamResults from "./ExamResults";

const questionsFiles = import.meta.glob<{
  default: { topic: string; filename: string; answer?: string }[];
}>("../*/data/nr-topic-lut.json", { eager: true });

interface AnswerRecord {
  isCorrect: boolean;
  answered: boolean;
}

const ExamQuestionPage: React.FC = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [questions, setQuestions] = useState<Question[]>([]);
  const [showAnswer, setShowAnswer] = useState(false);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [initialConditions, setInitialConditions] = useState<Question[]>([]);
  const [answers, setAnswers] = useState<AnswerRecord[]>([]);
  const [showResults, setShowResults] = useState(false);

  const examState = location.state as ExamState;

  useEffect(() => {
    const loadQuestions = async () => {
      try {
        setLoading(true);
        setError(null);

        // Load questions for selected topics
        // grab the pre-bundled JSON module instead of dynamic import
        const examFolder = examState.selectedExam.replace(/^\//, "");
        console.log(
          "Available questionsFiles keys:",
          Object.keys(questionsFiles)
        );
        console.log(
          "Looking for key:",
          `../${examFolder}/data/nr-topic-lut.json`
        );
        console.log("examFolder:", examFolder);
        console.log("selectedExam:", examState.selectedExam);
        const mod = questionsFiles[`../${examFolder}/data/nr-topic-lut.json`];
        if (!mod) throw new Error(`No question data for "${examFolder}"`);
        const allRaw: Question[] = mod.default;
        const allQuestions: Question[] = [];
        for (const question of allRaw) {
          const problemInfo = parseProblemFilename(question.filename);
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
        const selectedQuestions = shuffled.slice(0, examState.questionCount);
        setQuestions(selectedQuestions);
        // Initialize answers array
        setAnswers(
          new Array(selectedQuestions.length).fill({
            isCorrect: false,
            answered: false,
          })
        );
        setLoading(false);
      } catch (error) {
        console.error("Failed to load questions:", error);
        setError("Nepavyko įkelti klausimų. Prašome bandyti dar kartą.");
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
        const examFolder = examState.selectedExam.replace(/^\//, "");
        const mod = questionsFiles[`../${examFolder}/data/nr-topic-lut.json`];
        if (mod) {
          const allQuestions = mod.default;
          // Find questions that are part of the same problem set
          const relatedQuestions = allQuestions.filter((q: Question) => {
            const qInfo = parseProblemFilename(q.filename);
            return (
              qInfo.year === problemInfo.year &&
              qInfo.session === problemInfo.session &&
              Math.floor(qInfo.problemNumber) ===
                Math.floor(problemInfo.problemNumber) &&
              qInfo.problemType === "r"
            );
          });
          setInitialConditions(relatedQuestions);
        }
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

  const handleAnswerMark = (isCorrect: boolean) => {
    setAnswers((prev) => {
      const newAnswers = [...prev];
      newAnswers[currentQuestionIndex] = { isCorrect, answered: true };
      return newAnswers;
    });

    // If it's the last question, show results
    if (currentQuestionIndex === questions.length - 1) {
      setShowResults(true);
    } else {
      // Otherwise, advance to next question
      setCurrentQuestionIndex((prev) => prev + 1);
      setShowAnswer(false);
    }
  };

  const getStats = () => {
    const answeredQuestions = answers.filter((a) => a.answered);
    const correctAnswers = answeredQuestions.filter((a) => a.isCorrect);
    return {
      total: answeredQuestions.length,
      correct: correctAnswers.length,
    };
  };

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

  if (showResults) {
    const stats = getStats();
    return (
      <ExamResults totalAnswered={stats.total} correctAnswers={stats.correct} />
    );
  }

  const currentQuestion = questions[currentQuestionIndex];
  const problemInfo = parseProblemFilename(currentQuestion.filename);

  return (
    <Container className="py-4">
      <div className="mb-4">
        <ProgressBar
          now={((currentQuestionIndex + 1) / questions.length) * 100}
          label={`${currentQuestionIndex + 1} / ${questions.length}`}
        />
      </div>

      <h5 className="mb-3">
        {problemInfo.year} m.{" "}
        {problemInfo.session === "k" ? "kartojimo" : "pagrindinė"} sesija,{" "}
        {Math.floor(problemInfo.problemNumber)} klausimas
        <span className="text-muted ms-2">
          ({currentQuestion.filename.split(".")[0]})
        </span>
      </h5>

      <ProblemRenderer
        currentQuestion={currentQuestion}
        showAnswer={showAnswer}
        initialConditions={initialConditions}
      />

      <div className="d-flex flex-column align-items-center gap-3">
        {!showAnswer ? (
          <Button
            variant="primary"
            onClick={() => setShowAnswer(true)}
            className="w-auto"
          >
            Rodyti atsakymą
          </Button>
        ) : (
          <ButtonGroup>
            <Button
              variant="success"
              onClick={() => handleAnswerMark(true)}
              disabled={answers[currentQuestionIndex]?.answered}
            >
              Atsakiau teisingai
            </Button>
            <Button
              variant="danger"
              onClick={() => handleAnswerMark(false)}
              disabled={answers[currentQuestionIndex]?.answered}
            >
              Atsakiau neteisingai
            </Button>
          </ButtonGroup>
        )}

        <div className="d-flex justify-content-between w-100">
          <Button
            variant="secondary"
            onClick={handlePreviousQuestion}
            disabled={currentQuestionIndex === 0}
          >
            ← Ankstesnis
          </Button>

          <Button
            variant="secondary"
            onClick={handleNextQuestion}
            disabled={currentQuestionIndex === questions.length - 1}
          >
            Sekantis →
          </Button>
        </div>
      </div>
    </Container>
  );
};

export default ExamQuestionPage;
