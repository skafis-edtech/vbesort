import { Accordion, Form, Tab, Tabs } from "react-bootstrap";
import topics from "./data/topics-names-list.json";
import nrTopicLut from "./data/nr-topic-lut.json";
import { useEffect, useState } from "react";
import allYearList from "./data/year-list.json";
import TopicItem from "../components/TopicItem";
import { useNavigate } from "react-router-dom";

export default function MathPuppPage() {
  const navigate = useNavigate();

  const handleSelect = (key: any) => {
    navigate(key);
  };
  return (
    <Tabs defaultActiveKey="/math-pupp" onSelect={handleSelect}>
      <Tab
        eventKey="/"
        title="Matematikos VBE"
        style={{ marginTop: "20px" }}
      ></Tab>
      <Tab
        eventKey="/math-pupp"
        title="Matematikos PUPP"
        style={{ marginTop: "20px" }}
      >
        <PuppTab />
      </Tab>
      <Tab
        eventKey="/bio"
        title="Biologijos VBE"
        style={{ marginTop: "20px" }}
      ></Tab>
      <Tab
        eventKey="/hist"
        title="Istorijos VBE"
        style={{ marginTop: "20px" }}
      ></Tab>
    </Tabs>
  );
}

function PuppTab() {
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
                  label={year.slice(0, 4)}
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
              subject="pupp"
            />
          ))}
        </Accordion>
      </div>
    </>
  );
}
