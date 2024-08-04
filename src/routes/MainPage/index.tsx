import { Accordion, Alert } from "react-bootstrap";
import topics from "./data/topics-names-list.json";
import nrTopicLut from "./data/nr-topic-lut.json";
import TopicItem from "../../components/TopicItem";
import allYearList from "./data/year-list.json";
import usePersistentState from "../../hooks";
import YearSelector from "./YearSelector";
import { Components } from "../../types";
import ShuffleBar from "../../components/ShuffleBar";

const MainPage: React.FC<Components.PageProps> = (props) => {
  const [yearList, setYearList] = usePersistentState<string[]>(
    "YEAR_LIST",
    allYearList.filter((year) => year !== "")
  );

  return (
    <div>
      <ShuffleBar />
      <h1 className="vbesort-title">vbesort.lt</h1>

      <h1 className="title">Matematikos VBE</h1>

      <Alert variant="info">
        VBE formulynas:{" "}
        <a href="https://www.nsa.smm.lt/wp-content/uploads/2024/02/2023-Mat_PRIEDAS_isplestinis_projektas.pdf">
          A lygis
        </a>
        ,{" "}
        <a href="https://www.nsa.smm.lt/wp-content/uploads/2024/02/2023-Mat_PRIEDAS_bendrasis_projektas.pdf">
          B lygis
        </a>
      </Alert>
      <YearSelector yearList={yearList} setYearList={setYearList} />
      <Accordion>
        {topics.map((topic) => (
          <TopicItem
            key={topic.topic}
            topic={topic}
            yearList={yearList}
            nrTopicLut={nrTopicLut}
            subject="math"
            listUrl={props.listUrl}
            setListUrl={props.setListUrl}
          />
        ))}
      </Accordion>
    </div>
  );
};

export default MainPage;
