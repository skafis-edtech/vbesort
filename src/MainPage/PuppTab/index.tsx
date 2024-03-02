import { Accordion, Form } from "react-bootstrap";
import topics from "./data/topics-names-list.json";
import nrTopicLut from "./data/nr-topic-lut.json";
import { useState } from "react";
import allYearList from "./data/year-list.json";
import ShuffleBar from "../components/ShuffleBar";
import TopicItem from "../components/TopicItem";

export default function PuppTab() {
  const [yearList, setYearList] = useState<string[]>(
    allYearList.filter((year) => year !== "2023")
  );

  const toggleYearInList = (yearToToggle: string) => {
    if (yearList.includes(yearToToggle)) {
      setYearList(yearList.filter((year) => year !== yearToToggle));
    } else {
      setYearList([...yearList, yearToToggle]);
    }
  };

  const [isShuffleOn, setShuffleOn] = useState<boolean>(true);
  return (
    <>
      <p>
        Norint gerai pasiruošti PUPP egzaminui, patarčiau vienų metų užduotis
        (2022 m.) išskirti iš šio užduočių sąrašo, išspręsti savarankiškai,
        pilnai, sekant laiką.
      </p>
      <div>
        <div style={{ marginTop: "50px", marginBottom: "20px" }}>
          <div style={{ marginTop: "20px", display: "flex" }}>
            <Form style={{ flexGrow: 3 }}>
              {allYearList.map((year) => (
                <Form.Check
                  key={year}
                  inline
                  label={year.slice(0, 4)}
                  checked={yearList.includes(year)}
                  onChange={() => toggleYearInList(year)}
                />
              ))}
            </Form>
            <ShuffleBar style={{ flexGrow: 1 }} />
          </div>
        </div>
        <Accordion>
          {topics.map((topic) => (
            <TopicItem
              key={topic.topic}
              topic={topic}
              yearList={yearList}
              nrTopicLut={nrTopicLut}
              subject="pupp"
            />
          ))}
        </Accordion>
      </div>
    </>
  );
}
