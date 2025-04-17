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
      <div
        style={{
          position: "relative",
          display: "flex",
          justifyContent: "center",
          margin: "fit-content",
        }}
      >
        <h1 className="vbesort-title">vbesort.lt</h1>
        <em style={{ position: "absolute", right: "30%", bottom: 0 }}>
          by <a href="https://www.skafis.lt">Skafis</a>
        </em>
      </div>{" "}
      <p className="vbesort-description">
        Surūšiuotos VBE bei kitų egzaminų užduotys
      </p>
      <p>
        Plačiau puslapyje <a href="/about">"Apie"</a>
      </p>
      <h1 className="title">Matematikos VBE*</h1>
      <p>* ir kitos 11-12 kl. egzaminų nesąmonės</p>
      <Alert>Čia rasite VISAS matematikos VBE užduotis nuo 2002 metų!</Alert>
      <Alert variant="info">
        VBE formulynas:{" "}
        <a href="https://www.nsa.smm.lt/wp-content/uploads/2025/02/VBE-formuliu-rinkinys-A.pdf">
          A lygis
        </a>
        ,{" "}
        <a href="https://www.nsa.smm.lt/wp-content/uploads/2024/10/VBE-formuliu-rinkinys-B-2024-10-30.pdf">
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
        title="Pasirinkite, kurių metų matematikos VBE* užduotis rodyti"
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
