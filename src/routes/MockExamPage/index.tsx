import React, { useState, useEffect } from "react";
import { Container, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { Components } from "../../types";
import { routes } from "../routes";
import ExamSelector from "./components/ExamSelector";
import TopicSelector from "./components/TopicSelector";
import QuestionCountSelector from "./components/QuestionCountSelector";
const topicsFiles = import.meta.glob<{ default: Topic[] }>(
  "../*/data/topics-names-list.json",
  { eager: true }
);
const questionsFiles = import.meta.glob<{
  default: { topic: string; filename: string; answer?: string }[];
}>("../*/data/nr-topic-lut.json", { eager: true });
import { noAnsYearList, parseProblemFilename } from "../../misc";

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
  const [questionCounts, setQuestionCounts] = useState<{
    [key: string]: number;
  }>({});

  // Filter out the routes we don't want to show
  const examRoutes = routes.filter(
    (route) =>
      ![
        "/chem",
        "/liet",
        "/list",
        "/about",
        "/mockexam",
        "*",
        "/contribute",
        "/hist",
        "/math-nmpp8",
      ].includes(route.path)
  );

  useEffect(() => {
    if (selectedExam) {
      const loadTopics = async () => {
        try {
          setError(null);
          // grab the pre-bundled modules from our glob maps
          const examFolder = selectedExam.replace(/^\//, "");
          const topicsModule =
            topicsFiles[`../${examFolder}/data/topics-names-list.json`];
          const questionsModule =
            questionsFiles[`../${examFolder}/data/nr-topic-lut.json`];

          if (!topicsModule || !questionsModule) {
            throw new Error(`Cannot find data for exam "${examFolder}"`);
          }

          setTopics(topicsModule.default);

          // Calculate question counts per topic
          const counts: { [key: string]: number } = {};
          questionsModule.default.forEach(
            (question: {
              topic: string;
              filename: string;
              answer?: string;
            }) => {
              const problemInfo = parseProblemFilename(question.filename);
              if (
                question.answer &&
                question.answer !== "SA nepaskelbtas atsakymas" &&
                !question.answer.includes("(ne oficialu)") &&
                question.answer !== "Z" &&
                !noAnsYearList[problemInfo.subjectExam]?.includes(
                  problemInfo.year.toString() + problemInfo.session
                )
              ) {
                counts[question.topic] = (counts[question.topic] || 0) + 1;
              }
            }
          );
          setQuestionCounts(counts);

          setSelectedTopics([]); // Reset selected topics when exam changes
        } catch (error) {
          console.error("Failed to load topics:", error);
          setError("Nepavyko įkelti temų. Prašome bandyti dar kartą.");
          setTopics([]);
          setQuestionCounts({});
        }
      };
      loadTopics();
    } else {
      setTopics([]);
      setSelectedTopics([]);
      setQuestionCounts({});
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
      <h2 className="text-center mb-4">Bandomasis egzaminas</h2>
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
        questionCounts={questionCounts}
      />
      <QuestionCountSelector
        questionCount={questionCount}
        onQuestionCountChange={setQuestionCount}
        disabled={!canStartExam}
      />
      <div className="text-center mt-4">
        <Button
          variant="primary"
          onClick={handleStartExam}
          disabled={!canStartExam}
        >
          Pradėti egzaminą
        </Button>
      </div>
    </Container>
  );
};

export default MockExamPage;
