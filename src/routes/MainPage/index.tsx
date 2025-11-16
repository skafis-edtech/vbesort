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
      <Alert
        variant="info"
        style={{ padding: 0, paddingLeft: "4px", margin: 0, marginTop: "2px" }}
      >
        Rimtas ruošimas matematikos egzaminams, siekiantiems aukštų rezultatų (9
        - 12 kl.). Garantuojame gerus rezultatus, mokytojų matematikos egzaminų
        vidurkis 95/100! Registracijos forma:{" "}
        <a href="https://forms.gle/DpM2B4PMo1EEv8QJ9">
          https://forms.gle/DpM2B4PMo1EEv8QJ9
        </a>
      </Alert>
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
          by <a href="https://www.simtukas.lt">Šimtukas</a>
        </em>
      </div>{" "}
      <p className="vbesort-description">
        Surūšiuotos VBE bei kitų egzaminų užduotys
      </p>
      <h1 className="title">Matematikos VBE</h1>
      <p>
        Galite generuoti <a href="/mockexam">mock testus</a>! Special thanks{" "}
        <a href="https://github.com/delivey">delivey</a>. Plačiau puslapyje{" "}
        <a href="/about">"Apie"</a>
      </p>
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
