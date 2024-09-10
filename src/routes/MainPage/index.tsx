import { Accordion, Alert } from "react-bootstrap";
import topics from "./data/topics-names-list.json";
import nrTopicLut from "./data/nr-topic-lut.json";
import TopicItem from "../../components/ui/TopicItem";
import YearSelector from "../../components/ui/YearSelector";
import { Components } from "../../types";
import ShuffleBar from "../../components/layout/ShuffleBar";
import {
  getShortYearName,
  isOfficialMathVbe,
  noAnsYearList,
  parseProblemFilename,
} from "../../misc";
import MathTopicProblemList from "./MathTopicProblemList";

const MainPage: React.FC<Components.PageProps> = (props) => {
  return (
    <div>
      <ShuffleBar />

      <h1 className="vbesort-title">vbesort.lt</h1>
      <p className="vbesort-description">
        Surūšiuotos VBE bei kitų egzaminų užduotys
      </p>
      <Alert variant="danger">
        Labai reikia, kad pasidalintumėte gerais lietuvių rašiniais! Rašykite{" "}
        <a href="mailto:info@skafis.lt">info@skafis.lt</a>
      </Alert>
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
        yearLabelStringify={(year, session) =>
          getShortYearName(year, session) +
          (noAnsYearList["mv"].includes(year.toString() + session)
            ? " (be ats.)"
            : "") +
          (!isOfficialMathVbe(year, session) ? "" : " ne oficialu")
        }
        noAnsYearList={noAnsYearList["mv"]}
        title="Pasirinkite, kurių metų matematikos VBE užduotis rodyti"
      />
      <Accordion>
        {topics.map((topic) => (
          <TopicItem
            key={topic.topic}
            topicName={topic.name}
            problemCount={
              nrTopicLut.filter((x) => {
                const xInfo = parseProblemFilename(x.filename);
                return (
                  x.topic === topic.topic &&
                  props.yearList.includes(xInfo.year.toString() + xInfo.session)
                );
              }).length
            }
          >
            <MathTopicProblemList
              nrTopicLut={nrTopicLut}
              yearList={props.yearList}
              topicString={topic.topic}
            />
          </TopicItem>
        ))}
      </Accordion>
    </div>
  );
};

export default MainPage;
