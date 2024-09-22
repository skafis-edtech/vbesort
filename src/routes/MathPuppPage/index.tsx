import { Accordion, Alert } from "react-bootstrap";
import topics from "./data/topics-names-list.json";
import nrTopicLut from "./data/nr-topic-lut.json";
import TopicItem from "../../components/ui/TopicItem";
import { Link } from "react-router-dom";
import {
  getShortYearName,
  noAnsYearList,
  parseProblemFilename,
} from "../../misc";
import { Components } from "../../types";
import ShuffleBar from "../../components/layout/ShuffleBar";
import YearSelector from "../../components/ui/YearSelector";
import MathPuppTopicProblemList from "./MathPuppTopicProblemList";

const MathPuppPage: React.FC<Components.PageProps> = (props) => {
  return (
    <>
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
          by Skafis
        </em>
      </div>{" "}
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
      <YearSelector
        yearList={props.yearList}
        setYearList={props.setYearList}
        allYearList={props.allYearList}
        yearLabelStringify={(year, session) =>
          getShortYearName(year, session) +
          (noAnsYearList["mp"].includes(year.toString() + session)
            ? " (be ats.)"
            : "")
        }
        noAnsYearList={noAnsYearList["mp"]}
        title="Pasirinkite, kurių metų matematikos PUPP užduotis rodyti"
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
            <MathPuppTopicProblemList
              nrTopicLut={nrTopicLut}
              yearList={props.yearList}
              topicString={topic.topic}
            />
          </TopicItem>
        ))}
      </Accordion>
    </>
  );
};

export default MathPuppPage;
