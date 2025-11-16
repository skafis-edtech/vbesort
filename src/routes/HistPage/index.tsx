import { Components } from "../../types";
import ShuffleBar from "../../components/layout/ShuffleBar";
import YearSelector from "../../components/ui/YearSelector";
import {
  getShortYearName,
  noAnsYearList,
  parseProblemFilename,
} from "../../misc";
import { Accordion } from "react-bootstrap";
import topics from "./data/topics-names-list.json";
import nrTopicLut from "./data/nr-topic-lut.json";
import TopicItem from "../../components/ui/TopicItem";
import HistTopicProblemList from "./HistTopicProblemList";

const HistPage: React.FC<Components.PageProps> = (props) => {
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
          by <a href="https://www.simtukas.lt">Šimtukas</a>
        </em>
      </div>{" "}
      <p className="vbesort-description">
        Surūšiuotos VBE bei kitų egzaminų užduotys
      </p>
      <h1 className="title">Istorijos VBE</h1>
      <YearSelector
        yearList={props.yearList}
        setYearList={props.setYearList}
        allYearList={props.allYearList}
        yearLabelStringify={(year, session) =>
          getShortYearName(year, session) +
          (noAnsYearList["iv"].includes(year.toString() + session)
            ? " (be ats.)"
            : "")
        }
        noAnsYearList={noAnsYearList["iv"]}
        title="Pasirinkite, kurių metų istorijos VBE užduotis rodyti"
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
            <HistTopicProblemList
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

export default HistPage;
