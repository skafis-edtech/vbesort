import { Accordion } from "react-bootstrap";
import topics from "./data/topics-names-list.json";
import nrTopicLut from "./data/nr-topic-lut.json";
import TopicItem from "../components/TopicItem";
import allYearList from "./data/year-list.json";
import usePersistentState from "../hooks";
import YearSelector from "./YearSelector";
import ListMaker from "./ListMaker";
import { useEffect, useState } from "react";

export default function MainPage() {
  const [yearList, setYearList] = usePersistentState<string[]>(
    "YEAR_LIST",
    allYearList.filter((year) => year !== "2023g")
  );

  // List Maker for Math VBE
  const [listUrl, setListUrl] = useState<string>(
    localStorage.getItem("LIST_URL") || "https://www.vbesort.lt/list?list="
  );

  useEffect(() => {
    localStorage.setItem("LIST_URL", listUrl);
  }, [listUrl]);
  // End of list maker

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
