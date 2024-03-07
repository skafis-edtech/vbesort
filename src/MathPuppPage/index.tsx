import { Accordion, Alert, Form } from "react-bootstrap";
import topics from "./data/topics-names-list.json";
import nrTopicLut from "./data/nr-topic-lut.json";
import { useState } from "react";
import allYearList from "./data/year-list.json";
import TopicItem from "../components/TopicItem";
import { Link } from "react-router-dom";
import { getShortYearName, isNotHaveAnswersMathPupp } from "../misc";

export default function MathPuppPage() {
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
      <Alert variant="success">
        Hmm, nelabai daug surūšiuota, ane? Pasvarstyk prisidėti prie tinklapio
        tobulinimo. Plačiau – <Link to="/contribute">puslapyje "Prisidėk"</Link>
      </Alert>
      <div>
        <div style={{ marginTop: "50px", marginBottom: "20px" }}>
          <div style={{ marginTop: "20px", display: "flex" }}>
            <Form style={{ flexGrow: 3 }}>
              {allYearList.map((year) => (
                <Form.Check
                  key={year}
                  inline
                  label={
                    getShortYearName(year) +
                    (isNotHaveAnswersMathPupp(year) ? " (be ats.)" : "")
                  }
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
