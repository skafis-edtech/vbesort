import { Accordion, Alert } from "react-bootstrap";
import topics from "./data/topics-names-list.json";
import nrTopicLut from "./data/nr-topic-lut.json";
import TopicItem from "../../components/TopicItem";
import YearSelector from "../../components/YearSelector";
import { Components } from "../../types";
import ShuffleBar from "../../components/ShuffleBar";
import {
  getShortYearName,
  isOfficialMathVbe,
  noAnsMathVbeYearList,
} from "../../misc";

const MainPage: React.FC<Components.PageProps> = (props) => {
  return (
    <div>
      <ShuffleBar />
      <h1 className="vbesort-title">vbesort.lt</h1>
      <p className="vbesort-description">
        Surūšiuotos VBE bei kitų egzaminų užduotys
      </p>

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
      <YearSelector
        yearList={props.yearList}
        setYearList={props.setYearList}
        allYearList={props.allYearList}
        yearLabelStringify={(year) =>
          getShortYearName(year) +
          (noAnsMathVbeYearList.includes(year) ? " (be ats.)" : "") +
          (isOfficialMathVbe(year) ? "" : " ne oficialu")
        }
        noAnsYearList={noAnsMathVbeYearList}
        title="Pasirinkite, kurių metų matematikos VBE užduotis rodyti"
      />
      <Accordion>
        {topics.map((topic) => (
          <TopicItem
            key={topic.topic}
            topic={topic}
            yearList={props.yearList}
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
