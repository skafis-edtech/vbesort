import { Accordion } from "react-bootstrap";
import topics from "./data/topics-names-list.json";
import nrTopicLut from "./data/nr-topic-lut.json";
import TopicItem from "../components/TopicItem";
import allYearList from "./data/year-list.json";
import usePersistentState from "../hooks";
import YearSelector from "./YearSelector";

export default function MainPage({
  listUrl,
  setListUrl,
}: {
  listUrl?: string;
  setListUrl?: (url: string) => void;
}) {
  const [yearList, setYearList] = usePersistentState<string[]>(
    "YEAR_LIST",
    allYearList.filter((year) => year !== "")
  );

  return (
    <div>
      <YearSelector yearList={yearList} setYearList={setYearList} />
      <Accordion>
        {topics.map((topic) => (
          <TopicItem
            key={topic.topic}
            topic={topic}
            yearList={yearList}
            nrTopicLut={nrTopicLut}
            subject="math"
            listUrl={listUrl}
            setListUrl={setListUrl}
          />
        ))}
      </Accordion>
    </div>
  );
}
