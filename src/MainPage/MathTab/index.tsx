import { Accordion, Button, Form } from "react-bootstrap";
import topics from "./data/topics-names-list.json";
import nrTopicLut from "./data/nr-topic-lut.json";
import ShuffleBar from "../components/ShuffleBar";
import TopicItem from "../components/TopicItem";
import usePersistantState from "../../hooks";
import allYearList from "./data/year-list.json";

export default function MathTab() {
  const [yearList, setYearList] = usePersistantState<string[]>(
    "YEAR_LIST",
    allYearList.filter((year) => year !== "2023k" && year !== "2023g")
  );

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
  return (
    <>
      <p>
        Daug (senesnių metų) užduočių neturi oficialių atsakymų, paskelbtų NŠA.
        Todėl jei kažkas išspręsit užduotis su "NSA nepaskelbtas atsakymas"
        užrašu prie atsakymo, mielai sprendimus priimčiau ir įkelčiau į
        tinklapį. Taigi tiesiog parašykit.
      </p>
      <h2>Pasirinkite, kurių metų matematikos VBE užduotis rodyti</h2>
      <p>
        Siūlau žiūrint užduotis pasilikti bent dviejų egzaminų užduotis
        nematytas, kad ruošiantis būtų galima išspręsti bent vieną egzaminą
        pilnai, sekant laiką ir pasitikrinant pasiruošimą (pagrindinės sesijos),
        bei vieną mokykloje išspręsti kaip bandomąjį (greičiausiai 2023 m.
        pakartotinės sesijos)
      </p>
      <div style={{ marginTop: "50px", marginBottom: "20px" }}>
        <Button style={{ margin: "10px" }} onClick={clearAll}>
          Išvalyti visus
        </Button>
        <Button onClick={selectAll}>Pažymėti visus</Button>
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
      <div>
        <Accordion>
          {topics.map((topic) => (
            <TopicItem
              key={topic.topic}
              topic={topic}
              yearList={JSON.parse(localStorage.getItem("YEAR_LIST") || "[]")}
              nrTopicLut={nrTopicLut}
              subject="math"
            />
          ))}
        </Accordion>
      </div>
    </>
  );
}
