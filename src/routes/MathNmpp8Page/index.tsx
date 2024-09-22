import { Accordion } from "react-bootstrap";
import { Components } from "../../types";
import ShuffleBar from "../../components/layout/ShuffleBar";
import TopicItem from "../../components/ui/TopicItem";
import YearSelector from "../../components/ui/YearSelector";
import {
  getShortYearName,
  noAnsYearList,
  parseProblemFilename,
} from "../../misc";
import Nmpp8TopicProblemList from "./Nmpp8TopicProblemList";
import topics from "./data/topics-names-list.json";
import nrTopicLut from "./data/nr-topic-lut.json";

const MathNmpp8Page: React.FC<Components.PageProps> = (props) => {
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
      <h1 className="title">Matematikos NMPP 8 kl.</h1>
      <YearSelector
        yearList={props.yearList}
        setYearList={props.setYearList}
        allYearList={props.allYearList}
        yearLabelStringify={(year, session) =>
          getShortYearName(year, session) +
          (noAnsYearList["m8"].includes(year.toString() + session)
            ? " (be ats.)"
            : "")
        }
        noAnsYearList={noAnsYearList["m8"]}
        title="Pasirinkite, kurių metų matematikos NMPP 8 kl. užduotis rodyti"
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
            <Nmpp8TopicProblemList
              nrTopicLutOfTopic={nrTopicLut.filter(
                (x) => x.topic === topic.topic
              )}
              yearList={props.yearList}
            />
          </TopicItem>
        ))}
      </Accordion>
    </>
  );
};

export default MathNmpp8Page;
