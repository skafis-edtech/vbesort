import { Accordion, Alert, Button, Form, Tab, Tabs } from "react-bootstrap";
import topics from "./data/topics-names-list.json";
import nrTopicLut from "./data/nr-topic-lut.json";
import TopicItem from "../components/TopicItem";
import allYearList from "./data/year-list.json";
import { useNavigate } from "react-router-dom";
import usePersistantState from "../hooks";
import {
  getShortYearName,
  isNotHaveAnswersMathVbe,
  isOfficialMathVbe,
} from "../misc";
import { ReactComponent as InfoIcon } from "../components/info.svg";

export default function MainPage() {
  const navigate = useNavigate();

  const handleSelect = (key: any) => {
    navigate(key);
  };
  return (
    <Tabs defaultActiveKey="/" onSelect={handleSelect}>
      <Tab eventKey="/" title="Matematikos VBE" style={{ marginTop: "20px" }}>
        <MathTab />
      </Tab>
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
      <Tab
        eventKey="/hist"
        title="Istorijos VBE"
        style={{ marginTop: "20px" }}
      ></Tab>
    </Tabs>
  );
}

function MathTab() {
  const [yearList, setYearList] = usePersistantState<string[]>(
    "YEAR_LIST",
    allYearList.filter((year) => year !== "2023g")
  );
  return (
    <div>
      <YearSelector yearList={yearList} setYearList={setYearList} />
      <Accordion>
        {topics.map((topic) => (
          <TopicItem
            key={topic.topic}
            topic={topic}
            yearList={yearList}
            nrTopicLut={nrTopicLut}
            subject="math"
          />
        ))}
      </Accordion>
    </div>
  );
}

function YearSelector({
  yearList,
  setYearList,
}: {
  yearList: string[];
  setYearList: (value: string[]) => void;
}) {
  const toggleYearInList = (yearToToggle: string) => {
    if (yearList.includes(yearToToggle)) {
      setYearList(yearList.filter((year) => year !== yearToToggle));
    } else {
      setYearList([...yearList, yearToToggle]);
    }
  };

  const selectAll = () => {
    setYearList(allYearList);
  };

  const clearAll = () => {
    setYearList([]);
  };

  const selectWithAns = () => {
    setYearList(allYearList.filter((year) => !isNotHaveAnswersMathVbe(year)));
  };
  return (
    <Alert variant="info">
      <Accordion style={{ marginBottom: "20px" }}>
        <Accordion.Item eventKey="yo-what-up:))">
          <Accordion.Header>
            <div>
              <InfoIcon
                style={{ height: "24px", width: "24px", margin: "10px" }}
              />
            </div>
            <h5>Pasirinkite, kurių metų matematikos VBE užduotis rodyti</h5>
          </Accordion.Header>
          <Accordion.Body>
            <p>
              <strong>12-okams: </strong>Siūlau žiūrint užduotis pasilikti bent
              vieno egzamino užduotis nematytas, kad ruošiantis būtų galima
              išspręsti bent vieną egzaminą pilnai, sekant laiką ir
              pasitikrinant pasiruošimą.
            </p>
            <div style={{ marginTop: "50px", marginBottom: "20px" }}>
              <Button style={{ margin: "10px" }} onClick={clearAll}>
                Išvalyti visus
              </Button>
              <Button style={{ margin: "10px" }} onClick={selectAll}>
                Pažymėti visus
              </Button>
              <Button style={{ margin: "10px" }} onClick={selectWithAns}>
                Tik su atsakymais (visi)
              </Button>
              <div style={{ marginTop: "20px", display: "flex" }}>
                <Form style={{ flexGrow: 3 }}>
                  {allYearList.map((year) => (
                    <Form.Check
                      style={{ width: "250px" }}
                      key={year}
                      inline
                      label={
                        getShortYearName(year) +
                        (isNotHaveAnswersMathVbe(year) ? " (be ats.)" : "") +
                        (isOfficialMathVbe(year) ? "" : " ne oficialu")
                      }
                      checked={yearList.includes(year)}
                      onChange={() => toggleYearInList(year)}
                    />
                  ))}
                </Form>
              </div>
            </div>
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </Alert>
  );
}
