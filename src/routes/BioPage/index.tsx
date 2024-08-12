import { Accordion } from "react-bootstrap";
import topics from "./data/topics-names-list.json";
import nrTopicLut from "./data/nr-topic-lut.json";
import TopicItem from "../../components/TopicItem";
import { Components } from "../../types";
import ShuffleBar from "../../components/ShuffleBar";
import YearSelector from "../../components/YearSelector";

const BioPage: React.FC<Components.PageProps> = (props) => {
  return (
    <>
      <ShuffleBar />
      <h1 className="vbesort-title">vbesort.lt</h1>
      <p className="vbesort-description">
        Surūšiuotos VBE bei kitų egzaminų užduotys
      </p>

      <h1 className="title">Biologijos VBE</h1>
      <YearSelector
        yearList={props.yearList}
        setYearList={props.setYearList}
        allYearList={props.allYearList}
        yearLabelStringify={(year) =>
          `${year.slice(0, 4)} pa${year.slice(4, 5)}.`
        }
        noAnsYearList={[]}
        title="Pasirinkite, kurių metų biologijos VBE užduotis rodyti"
      />
      <Accordion>
        {topics.map((topic) => (
          <TopicItem
            key={topic.topic}
            topic={topic}
            yearList={props.yearList}
            nrTopicLut={nrTopicLut}
            subject="bio"
          />
        ))}
      </Accordion>
    </>
  );
};

export default BioPage;
