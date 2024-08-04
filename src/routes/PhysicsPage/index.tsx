import { Accordion, Alert, Form } from "react-bootstrap";
import topics from "./data/topics-names-list.json";
import nrTopicLut from "./data/nr-topic-lut.json";
import { useState } from "react";
import allYearList from "./data/year-list.json";
import TopicItem from "../../components/TopicItem";
import { getShortYearName } from "../../misc";
import { Components } from "../../types";
import ShuffleBar from "../../components/ShuffleBar";

const PhysicsPage: React.FC<Components.PageProps> = () => {
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

      <h1 className="title">Fizikos VBE</h1>

      <Alert variant="warning">
        Augustas surūšiavo. Kolkas tik pirmųjų dalių užduotys (testinės ABCD)
      </Alert>
      <Alert variant="info">
        VBE formulynas:{" "}
        <a href="https://www.nsa.smm.lt/wp-content/uploads/2024/03/3-priedas.-Fizikos-formules-ir-konstantos.docx.pdf">
          ČIA
        </a>
      </Alert>
      <div>
        <div style={{ marginTop: "50px", marginBottom: "20px" }}>
          <div style={{ marginTop: "20px", display: "flex" }}>
            <Form style={{ flexGrow: 3 }}>
              {allYearList.map((year) => (
                <Form.Check
                  key={year}
                  inline
                  label={getShortYearName(year)}
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
              subject="physics"
            />
          ))}
        </Accordion>
      </div>
    </>
  );
};

export default PhysicsPage;
