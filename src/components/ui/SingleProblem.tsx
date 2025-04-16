import { Accordion } from "react-bootstrap";
import { noAnsYearList, parseProblemFilename } from "../../misc";
import "./style.css";
import { useState } from "react";

interface SingleProblemProps {
    filename: string;
    answerFilenameOrAnswer?: string;
    defaultExpanded?: boolean;
}

const SingleProblem: React.FC<SingleProblemProps> = ({
    filename,
    answerFilenameOrAnswer,
    defaultExpanded = false,
}) => {
    const problemInfo = parseProblemFilename(filename);
    const problemSrc = `${problemInfo.subjectExam}-problems/${problemInfo.year}/${filename}`;
    const answerSrc = `${problemInfo.subjectExam}-answers/${answerFilenameOrAnswer}`;
    const isImage =
        answerFilenameOrAnswer?.includes(".png") ||
        answerFilenameOrAnswer?.includes(".jpg");

    const [imageError, setImageError] = useState<string | null>(null);
    const [answerExpanded, setAnswerExpanded] = useState(defaultExpanded);

    const noAns = noAnsYearList[problemInfo.subjectExam].includes(
        problemInfo.year.toString() + problemInfo.session
    );

    // Log when component mounts or answer changes
    console.log("Attempting to load answer:", {
        answerSrc,
        answerFilenameOrAnswer,
        isImage,
        problemInfo,
        noAns,
    });

    return (
        <>
            <div
                style={{
                    marginTop: "10px",
                    marginBottom: "10px",
                    overflowX: "auto",
                    overflowY: "auto",
                }}
                className="single-problem"
            >
                <img
                    loading="lazy"
                    alt={filename}
                    src={problemSrc}
                    style={{
                        width: "auto",
                        height: "auto",
                        maxWidth: "900px",
                    }}
                />
            </div>

            <div>
                {answerFilenameOrAnswer && !noAns && (
                    <Accordion>
                        <Accordion.Item eventKey="answer">
                            <Accordion.Header
                                className="root-header"
                                onClick={() =>
                                    setAnswerExpanded(!answerExpanded)
                                }
                            >
                                Atsakymas {imageError ? "(Failed to load)" : ""}
                            </Accordion.Header>
                            {answerExpanded && (
                                <Accordion.Body>
                                    {!isImage ? (
                                        <h3>{answerFilenameOrAnswer}</h3>
                                    ) : (
                                        <div
                                            className="single-problem"
                                            style={{
                                                overflowX: "auto",
                                                display: answerExpanded
                                                    ? "block"
                                                    : "none",
                                            }}
                                        >
                                            <img
                                                loading="lazy"
                                                alt={answerFilenameOrAnswer}
                                                src={answerSrc}
                                                style={{
                                                    width: "auto",
                                                    height: "auto",
                                                    maxWidth: "900px",
                                                    overflowX: "auto",
                                                }}
                                                onError={(e) => {
                                                    const error = `Failed to load answer image: ${answerSrc}`;
                                                    console.error(error);
                                                    setImageError(error);
                                                    // Don't hide the image element completely
                                                    e.currentTarget.style.opacity =
                                                        "0.5";
                                                }}
                                                onLoad={() => {
                                                    console.log(
                                                        "Successfully loaded answer image:",
                                                        answerSrc
                                                    );
                                                    setImageError(null);
                                                }}
                                            />
                                            {imageError && (
                                                <div
                                                    style={{
                                                        color: "red",
                                                        marginTop: "10px",
                                                    }}
                                                >
                                                    {imageError}
                                                </div>
                                            )}
                                        </div>
                                    )}
                                </Accordion.Body>
                            )}
                        </Accordion.Item>
                    </Accordion>
                )}
            </div>
        </>
    );
};

export default SingleProblem;
