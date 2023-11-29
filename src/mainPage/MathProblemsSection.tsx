import { Accordion, Form } from "react-bootstrap";
import TopicSection from "./TopicSection";
import topics from "./topics-names-list.json";
import { useState } from "react";
import allYearList from "./year-list.json";

import ShuffleBar from "./ShuffleBar";

export default function MathProblemsSection() {
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

  //Shuffle stuff...
  const [isShuffleOn, setShuffleOn] = useState<boolean>(true);
  const reshuffle = () => {};
  const undoShuffle = () => {};

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
          <ShuffleBar
            isShuffleOn={isShuffleOn}
            setShuffleOn={setShuffleOn}
            reshuffle={reshuffle}
            undoShuffle={undoShuffle}
            style={{ flexGrow: 1 }}
          />
        </div>

        <hr />
      </div>
      <Accordion>
        {topics.map((topic) => (
          <TopicSection
            key={topic.topic}
            topic={topic}
            yearList={yearList}
            isShuffleOn={isShuffleOn}
          />
        ))}
      </Accordion>
    </div>
  );
}
