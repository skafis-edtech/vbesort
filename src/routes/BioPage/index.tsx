import { Accordion, Form } from "react-bootstrap";
import topics from "./data/topics-names-list.json";
import nrTopicLut from "./data/nr-topic-lut.json";
import { useState } from "react";
import allYearList from "./data/year-list.json";
import TopicItem from "../../components/TopicItem";
import { Components } from "../../types";
import ShuffleBar from "../../components/ShuffleBar";

const BioPage: React.FC<Components.PageProps> = () => {
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
      <ShuffleBar />
      <h1 className="vbesort-title">vbesort.lt</h1>
      <p className="vbesort-description">
        Surūšiuotos VBE bei kitų egzaminų užduotys
      </p>

      <h1 className="title">Biologijos VBE</h1>

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
};

export default BioPage;
