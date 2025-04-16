import React from "react";
import { Form } from "react-bootstrap";

interface QuestionCountSelectorProps {
    questionCount: number;
    onQuestionCountChange: (count: number) => void;
    disabled?: boolean;
    maxQuestions?: number;
}

const QuestionCountSelector: React.FC<QuestionCountSelectorProps> = ({
    questionCount,
    onQuestionCountChange,
    disabled = false,
    maxQuestions = 50,
}) => {
    if (disabled) {
        return null;
    }

    return (
        <div className="mt-4">
            <h3 className="text-center mb-4">Pasirinkite klausimų skaičių</h3>
            <div className="d-flex justify-content-center align-items-center">
                <Form.Group className="mb-3" style={{ width: "200px" }}>
                    <Form.Label className="text-center w-100">
                        Klausimų skaičius: {questionCount}
                    </Form.Label>
                    <Form.Range
                        min={1}
                        max={maxQuestions}
                        value={questionCount}
                        onChange={(e) =>
                            onQuestionCountChange(parseInt(e.target.value))
                        }
                    />
                    <div className="d-flex justify-content-between">
                        <small>1</small>
                        <small>{maxQuestions}</small>
                    </div>
                </Form.Group>
            </div>
        </div>
    );
};

export default QuestionCountSelector;
