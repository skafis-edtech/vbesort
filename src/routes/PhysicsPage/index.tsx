import { Accordion, Alert } from "react-bootstrap";
import topics from "../PhysicsPage/data/topics-names-list.json";
import nrTopicLut from "../PhysicsPage/data/nr-topic-lut.json";
import TopicItem from "../../components/ui/TopicItem";
import {
  getShortYearName,
  noAnsYearList,
  parseProblemFilename,
} from "../../misc";
import { Components } from "../../types";
import ShuffleBar from "../../components/layout/ShuffleBar";
import YearSelector from "../../components/ui/YearSelector";
import PhysicsTopicProblemList from "../PhysicsPage/PhysicsTopicProblemList";

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
      <YearSelector
        yearList={props.yearList}
        setYearList={props.setYearList}
        allYearList={props.allYearList}
        yearLabelStringify={(year, session) =>
          getShortYearName(year, session) +
          (noAnsYearList["fv"].includes(year.toString() + session)
            ? " (be ats.)"
            : "")
        }
        noAnsYearList={noAnsYearList["fv"]}
        title="Pasirinkite, kurių metų fizikos VBE užduotis rodyti"
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
            <PhysicsTopicProblemList
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

export default PhysicsPage;
