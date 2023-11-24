import { Accordion, Form } from "react-bootstrap";
import TopicSection from "./TopicSection";
import topics from "./topics-names-list.json";
import { useState } from "react";

export default function MathProblemsSection() {
  const [yearList, setYearList] = useState<number[]>([2017]);
  return (
    <div>
      <div style={{ marginTop: "50px", marginBottom: "20px" }}>
        <hr />
        <p>
          Siūlau žiūrint užduotis pasilikti bent vienų metų užduotis nematytas,
          kad ruošiantis būtų galima išspręsti bent vienų metų egzaminą pilnai,
          sekant laiką ir pasitikrinant pasiruošimą
        </p>
        <div style={{ marginTop: "20px" }}>
          <Form>
            <Form.Check
              inline
              label="2017"
              checked={yearList.includes(2017)}
              onChange={() => {
                if (yearList.includes(2017)) {
                  setYearList(yearList.filter((year) => year !== 2017));
                } else {
                  setYearList([...yearList, 2017]);
                }
              }}
              defaultChecked
            />
            <Form.Check inline disabled label="2021" defaultChecked />
            <Form.Check inline disabled label="2022" defaultChecked />
            <Form.Check inline disabled label="2023" defaultChecked={false} />
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
