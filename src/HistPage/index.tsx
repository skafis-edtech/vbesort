import { Accordion, Form, Tab, Tabs } from "react-bootstrap";
import topics from "./data/topics-names-list.json";
import nrTopicLut from "./data/nr-topic-lut.json";
import { useState } from "react";
import allYearList from "./data/year-list.json";
import ShuffleBar from "../components/ShuffleBar";
import TopicItem from "../components/TopicItem";
import { useNavigate } from "react-router-dom";

export default function HistPage() {
  const navigate = useNavigate();

  const handleSelect = (key: any) => {
    navigate(key);
  };
  return (
    <Tabs defaultActiveKey="/hist" onSelect={handleSelect}>
      <Tab
        eventKey="/"
        title="Matematikos VBE"
        style={{ marginTop: "20px" }}
      ></Tab>
      <Tab
        eventKey="/math-pupp"
        title="Matematikos PUPP"
        style={{ marginTop: "20px" }}
      ></Tab>
      <Tab
        eventKey="/bio"
        title="Biologijos VBE"
        style={{ marginTop: "20px" }}
      ></Tab>
      <Tab eventKey="/hist" title="Istorijos VBE" style={{ marginTop: "20px" }}>
        <HistTab />
      </Tab>
    </Tabs>
  );
}

function HistTab() {
  const [yearList, setYearList] = useState<string[]>(
    allYearList.filter((year) => year !== "2023k" && year !== "2023g")
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
        <p>
          Siūlau žiūrint užduotis pasilikti bent dviejų egzaminų užduotis
          nematytas, kad ruošiantis būtų galima išspręsti bent vieną egzaminą
          pilnai, sekant laiką ir pasitikrinant pasiruošimą (pagrindinės
          sesijos), bei vieną mokykloje išspręsti kaip bandomąjį (greičiausiai
          2023 m. pakartotinės sesijos)
        </p>
        <div style={{ marginTop: "50px", marginBottom: "20px" }}>
          <div style={{ marginTop: "20px", display: "flex" }}>
            <Form style={{ flexGrow: 3 }}>
              {allYearList.map((year) => (
                <Form.Check
                  key={year}
                  inline
                  label={`${year.slice(0, 4)} pa${year.slice(4, 5)}.`}
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
              subject="hist"
            />
          ))}
        </Accordion>
      </div>
    </>
  );
}
