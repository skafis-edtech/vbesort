import { Accordion, Alert } from "react-bootstrap";
import topics from "./data/topics-names-list.json";
import nrTopicLut from "./data/nr-topic-lut.json";
import TopicItem from "../../components/ui/TopicItem";
import { Link } from "react-router-dom";
import { getShortYearName } from "../../misc";
import { Components } from "../../types";
import ShuffleBar from "../../components/layout/ShuffleBar";
import YearSelector from "../../components/ui/YearSelector";

const MathPuppPage: React.FC<Components.PageProps> = (props) => {
  return (
    <>
      <ShuffleBar />
      <h1 className="vbesort-title">vbesort.lt</h1>
      <p className="vbesort-description">
        Surūšiuotos VBE bei kitų egzaminų užduotys
      </p>

      <h1 className="title">Matematikos PUPP</h1>

      <Alert variant="success">
        Turėti omenyje, kad PUPP egzaminai sprendžiami prie kompiuterių, todėl
        rekomenduoju pasimėginti rašyti formules{" "}
        <Link to="https://beta.etestavimas.lt">beta.etestavimas.lt</Link>{" "}
        platformoje
      </Alert>
      {/* <YearSelector
        yearList={props.yearList}
        setYearList={props.setYearList}
        allYearList={props.allYearList}
        yearLabelStringify={(year) =>
          getShortYearName(year) +
          (noAnsMathVbeYearList.includes(year) ? " (be ats.)" : "")
        }
        noAnsYearList={noAnsMathVbeYearList}
        title="Pasirinkite, kurių metų matematikos PUPP užduotis rodyti"
      />
      <Accordion>
        {topics.map((topic) => (
          <TopicItem
            key={topic.topic}
            topic={topic}
            yearList={props.yearList}
            nrTopicLut={nrTopicLut}
            listUrl={props.listUrl}
            setListUrl={props.setListUrl}
            subject="pupp"
          />
        ))}
      </Accordion> */}
    </>
  );
};

export default MathPuppPage;
