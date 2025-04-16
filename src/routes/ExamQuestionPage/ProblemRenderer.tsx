import React from "react";
import { Card } from "react-bootstrap";
import SingleProblem from "../../components/ui/SingleProblem";
import MathProblemRoot from "../MainPage/MathProblemRoot";
import { parseProblemFilename } from "../../misc";

interface ProblemRendererProps {
    currentQuestion: Question;
    showAnswer: boolean;
    initialConditions: Question[];
}

export interface Question {
    filename: string;
    answer?: string;
    topic: string;
}

export interface ExamState {
    selectedExam: string;
    selectedTopics: string[];
    questionCount: number;
}

const ProblemRenderer: React.FC<ProblemRendererProps> = ({
    currentQuestion,
    showAnswer,
    initialConditions,
}) => {
    const problemInfo = parseProblemFilename(currentQuestion.filename);

    return (
        <Card className="mb-4">
            <Card.Body>
                {problemInfo.problemType === "s" &&
                    initialConditions.length > 0 && (
                        <MathProblemRoot nrTopicLutSubset={initialConditions} />
                    )}
                <SingleProblem
                    filename={currentQuestion.filename}
                    answerFilenameOrAnswer={
                        showAnswer ? currentQuestion.answer : undefined
                    }
                    defaultExpanded={showAnswer}
                />
            </Card.Body>
        </Card>
    );
};

export default ProblemRenderer;
