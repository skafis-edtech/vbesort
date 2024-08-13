import { Accordion, Alert } from "react-bootstrap";
import topics from "./data/topics-names-list.json";
import nrTopicLut from "./data/nr-topic-lut.json";
import TopicItem from "../../components/ui/TopicItem";
import { Components } from "../../types";
import ShuffleBar from "../../components/layout/ShuffleBar";
import YearSelector from "../../components/ui/YearSelector";

const HistPage: React.FC<Components.PageProps> = (props) => {
  return (
    <div>
      <ShuffleBar />
      <h1 className="vbesort-title">vbesort.lt</h1>
      <p className="vbesort-description">
        Surūšiuotos VBE bei kitų egzaminų užduotys
      </p>

      <h1 className="title">Istorijos VBE</h1>
      <Alert variant="info">Tvarkoma... </Alert>
      {/* <YearSelector
        yearList={props.yearList}
        setYearList={props.setYearList}
        allYearList={props.allYearList}
        yearLabelStringify={(year) =>
          `${year.slice(0, 4)} pa${year.slice(4, 5)}.`
        }
        noAnsYearList={[]}
        title="Pasirinkite, kurių metų istorijos VBE užduotis rodyti"
      />
      <Accordion>
        {topics.map((topic) => (
          <TopicItem
            key={topic.topic}
            topic={topic}
            yearList={props.yearList}
            nrTopicLut={nrTopicLut}
            subject="hist"
          />
        ))}
      </Accordion> */}
    </div>
  );
};

export default HistPage;
