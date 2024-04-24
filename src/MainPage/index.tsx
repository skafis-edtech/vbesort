import { Accordion } from "react-bootstrap";
import topics from "./data/topics-names-list.json";
import nrTopicLut from "./data/nr-topic-lut.json";
import TopicItem from "../components/TopicItem";
import allYearList from "./data/year-list.json";
import usePersistantState from "../hooks";
import YearSelector from "./YearSelector";
import ListMaker from "./ListMaker";

export default function MainPage() {
  const [yearList, setYearList] = usePersistantState<string[]>(
    "YEAR_LIST",
    allYearList.filter((year) => year !== "2023g")
  );
  const [listUrl, setListUrl] = usePersistantState<string>(
    "LIST_URL",
    "https://www.vbesort.lt/#/list?list=2015k3s22.1B,2022g1w10A"
  );

  return (
    <div>
      <YearSelector yearList={yearList} setYearList={setYearList} />
      <ListMaker listUrl={listUrl} setListUrl={setListUrl} />
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
