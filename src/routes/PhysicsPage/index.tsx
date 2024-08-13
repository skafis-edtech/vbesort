import { Accordion, Alert } from "react-bootstrap";
import topics from "./data/topics-names-list.json";
import nrTopicLut from "./data/nr-topic-lut.json";
import TopicItem from "../../components/ui/TopicItem";
import { getShortYearName } from "../../misc";
import { Components } from "../../types";
import ShuffleBar from "../../components/layout/ShuffleBar";
import YearSelector from "../../components/ui/YearSelector";

const PhysicsPage: React.FC<Components.PageProps> = (props) => {
  return (
    <>
      <ShuffleBar />
      <h1 className="vbesort-title">vbesort.lt</h1>
      <p className="vbesort-description">
        Surūšiuotos VBE bei kitų egzaminų užduotys
      </p>

      <h1 className="title">Fizikos VBE</h1>

      <Alert variant="warning">
        Special thanks Augustui už surūšiavimą! Kolkas tik pirmųjų dalių
        užduotys (testinės ABCD)
      </Alert>
      <Alert variant="info">
        VBE formulynas:{" "}
        <a href="https://www.nsa.smm.lt/wp-content/uploads/2024/03/3-priedas.-Fizikos-formules-ir-konstantos.docx.pdf">
          ČIA
        </a>
      </Alert>
      {/* <YearSelector
        yearList={props.yearList}
        setYearList={props.setYearList}
        allYearList={props.allYearList}
        yearLabelStringify={(year) => getShortYearName(year)}
        noAnsYearList={[]}
        title="Pasirinkite, kurių metų fizikos VBE užduotis rodyti"
      />
      <Accordion>
        {topics.map((topic) => (
          <TopicItem
            key={topic.topic}
            topic={topic}
            yearList={props.yearList}
            nrTopicLut={nrTopicLut}
            subject="physics"
          />
        ))}
      </Accordion> */}
    </>
  );
};

export default PhysicsPage;
