import { Accordion, Alert, Form } from "react-bootstrap";
import topics from "./data/topics-names-list.json";
import nrTopicLut from "./data/nr-topic-lut.json";
import { useState } from "react";
import allYearList from "./data/year-list.json";
import TopicItem from "../components/TopicItem";
import { Link } from "react-router-dom";

export default function BioPage() {
  const [yearList, setYearList] = useState<string[]>(
    allYearList.filter((year) => year !== "")
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
      <Alert variant="success">
        Hmm, nelabai daug surūšiuota, ane? Pasvarstyk prisidėti prie tinklapio
        tobulinimo. Plačiau – <Link to="/contribute">puslapyje "Prisidėk"</Link>
      </Alert>
      <p>
        <strong>12-okams: </strong>Siūlau žiūrint užduotis pasilikti 2023 m.
        egzamino pagrindinės sesijos užduotis nematytas, kad ruošiantis būtų
        galima išspręsti egzaminą pilnai, sekant laiką ir pasitikrinant
        pasiruošimą.
      </p>
      <div>
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
              subject="bio"
            />
          ))}
        </Accordion>
      </div>
    </>
  );
}
