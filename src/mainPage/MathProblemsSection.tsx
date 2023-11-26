import { Accordion, Form } from "react-bootstrap";
import TopicSection from "./TopicSection";
import topics from "./topics-names-list.json";
import { useState } from "react";

export default function MathProblemsSection() {
  const [yearList, setYearList] = useState<string[]>([
    "2017g",
    "2021g",
    "2022g",
    "2022k",
  ]);

  const toggleYearInList = (yearToToggle: string) => {
    if (yearList.includes(yearToToggle)) {
      setYearList(yearList.filter((year) => year !== yearToToggle));
    } else {
      setYearList([...yearList, yearToToggle]);
    }
  };

  return (
    <div>
      <div style={{ marginTop: "50px", marginBottom: "20px" }}>
        <hr />
        <p>
          Siūlau žiūrint užduotis pasilikti bent dviejų egzaminų užduotis
          nematytas, kad ruošiantis būtų galima išspręsti bent vieną egzaminą
          pilnai, sekant laiką ir pasitikrinant pasiruošimą (pagrindinės
          sesijos), bei vieną mokykloje išspręsti kaip bandomąjį (greičiausiai
          2023 m. pakartotinės sesijos)
        </p>
        <div style={{ marginTop: "20px" }}>
          <Form>
            <Form.Check
              inline
              label="2017 pag."
              checked={yearList.includes("2017g")}
              onChange={() => toggleYearInList("2017g")}
            />
            <Form.Check
              inline
              label="2021 pag."
              checked={yearList.includes("2021g")}
              onChange={() => toggleYearInList("2021g")}
            />
            <Form.Check
              inline
              label="2022 pag."
              checked={yearList.includes("2022g")}
              onChange={() => toggleYearInList("2022g")}
            />
            <Form.Check
              inline
              label="2022 pak."
              checked={yearList.includes("2022k")}
              onChange={() => toggleYearInList("2022k")}
            />
            <Form.Check
              inline
              label="2023 pag."
              checked={yearList.includes("2023g")}
              onChange={() => toggleYearInList("2023g")}
            />
            <Form.Check
              inline
              label="2023 pak."
              checked={yearList.includes("2023k")}
              onChange={() => toggleYearInList("2023k")}
            />
          </Form>
        </div>
        <hr />
      </div>

      <Accordion>
        {topics.map((topic) => (
          <TopicSection key={topic.topic} topic={topic} yearList={yearList} />
        ))}
      </Accordion>
    </div>
  );
}
