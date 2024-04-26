import { Accordion, Form } from "react-bootstrap";
import topics from "./data/topics-names-list.json";
import nrTopicLut from "./data/nr-topic-lut.json";
import { useState } from "react";
import allYearList from "./data/year-list.json";
import TopicItem from "../components/TopicItem";

export default function NaglisProblemsPage({
  listUrl,
  setListUrl,
}: {
  listUrl?: string;
  setListUrl?: (url: string) => void;
}) {
  const [yearList, setYearList] = useState<string[]>(allYearList);

  const toggleYearInList = (yearToToggle: string) => {
    if (yearList.includes(yearToToggle)) {
      setYearList(yearList.filter((year) => year !== yearToToggle));
    } else {
      setYearList([...yearList, yearToToggle]);
    }
  };

  return (
    <>
      <div>
        <div style={{ marginTop: "50px", marginBottom: "20px" }}>
          <div style={{ marginTop: "20px", display: "flex" }}>
            <Form style={{ flexGrow: 3 }}>
              {allYearList.map((year) => (
                <Form.Check
                  key={year}
                  inline
                  label={year}
                  checked={yearList.includes(year)}
                  onChange={() => toggleYearInList(year)}
                />
              ))}
            </Form>
          </div>
        </div>
        <Accordion>
          {topics.map((topic) => (
            <TopicItem
              key={topic.topic}
              topic={topic}
              yearList={yearList}
              nrTopicLut={nrTopicLut}
              listUrl={listUrl}
              setListUrl={setListUrl}
              subject="naglis"
            />
          ))}
        </Accordion>
      </div>
    </>
  );
}
