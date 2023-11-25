import { Accordion, Form } from "react-bootstrap";
import TopicSection from "./TopicSection";
import topics from "./topics-names-list.json";
import { useState } from "react";

export default function MathProblemsSection() {
  const [yearList, setYearList] = useState<number[]>([2017]);

  const toggleYearInList = (yearToToggle: number) => {
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
              checked={yearList.includes(2017)}
              onChange={() => toggleYearInList(2017)}
            />
            <Form.Check inline disabled label="2021 pag." defaultChecked />
            <Form.Check inline disabled label="2022 pag." defaultChecked />
            <Form.Check inline disabled label="2022 pak." defaultChecked />
            <Form.Check
              inline
              disabled
              label="2023 pag."
              defaultChecked={false}
            />
            <Form.Check
              inline
              disabled
              label="2023 pak."
              defaultChecked={false}
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
