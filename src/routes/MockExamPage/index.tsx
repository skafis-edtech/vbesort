import React, { useState, useEffect } from "react";
import { Container, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { Components } from "../../types";
import { routes } from "../routes";
import ExamSelector from "./components/ExamSelector";
import TopicSelector from "./components/TopicSelector";
import QuestionCountSelector from "./components/QuestionCountSelector";

interface Topic {
    topic: string;
    name: string;
}

const MockExamPage: React.FC<Components.PageProps> = () => {
    const navigate = useNavigate();
    const [selectedExam, setSelectedExam] = useState<string | null>(null);
    const [topics, setTopics] = useState<Topic[]>([]);
    const [selectedTopics, setSelectedTopics] = useState<string[]>([]);
    const [questionCount, setQuestionCount] = useState<number>(10);
    const [error, setError] = useState<string | null>(null);

    // Filter out the routes we don't want to show
    const examRoutes = routes.filter(
        (route) =>
            !["404", "Apie", "ATRINKTOS", "Prisidėk", "Testai"].includes(
                route.title
            )
    );

    useEffect(() => {
        if (selectedExam) {
            const loadTopics = async () => {
                try {
                    setError(null);
                    const path = `../${selectedExam}/data/topics-names-list.json`;
                    const topicsModule = await import(path);
                    setTopics(topicsModule.default);
                    setSelectedTopics([]); // Reset selected topics when exam changes
                } catch (error) {
                    console.error("Failed to load topics:", error);
                    setError(
                        "Nepavyko įkelti temų. Prašome bandyti dar kartą."
                    );
                    setTopics([]);
                }
            };
            loadTopics();
        } else {
            setTopics([]);
            setSelectedTopics([]);
        }
    }, [selectedExam]);

    const handleTopicSelect = (topic: string) => {
        setSelectedTopics((prev) => {
            if (prev.includes(topic)) {
                return prev.filter((t) => t !== topic);
            }
            return [...prev, topic];
        });
    };

    const handleStartExam = () => {
        navigate("/examquestion", {
            state: {
                selectedExam,
                selectedTopics,
                questionCount,
            },
        });
    };

    const canStartExam = selectedExam && selectedTopics.length > 0;

    return (
        <Container className="py-4">
            <ExamSelector
                examRoutes={examRoutes}
                selectedExam={selectedExam}
                onExamSelect={setSelectedExam}
            />
            <TopicSelector
                topics={topics}
                selectedTopics={selectedTopics}
                onTopicSelect={handleTopicSelect}
                error={error}
                disabled={!selectedExam}
            />
            <QuestionCountSelector
                questionCount={questionCount}
                onQuestionCountChange={setQuestionCount}
                disabled={!selectedExam || selectedTopics.length === 0}
                maxQuestions={50}
            />

            <div className="text-center mt-5">
                <Button
                    variant="primary"
                    size="lg"
                    disabled={!canStartExam}
                    onClick={handleStartExam}
                >
                    Pradėti egzaminą
                </Button>
            </div>
        </Container>
    );
};

export default MockExamPage;
