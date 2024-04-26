import { useEffect, useState } from "react";
import SingleProblem from "../components/SingleProblem";
import nrTopicLut from "../MainPage/data/nr-topic-lut.json";
import puppTopicLut from "../MathPuppPage/data/nr-topic-lut.json";
import naglisNrTopicLut from "../NaglisProblemsPage/data/nr-topic-lut.json";
import { getLongYearName, parseProblemFilename } from "../misc";
import MathProblemRoot from "../MainPage/MathProblemRoot";
import { Alert } from "react-bootstrap";
import { Link } from "react-router-dom";
import PuppProblemRoot from "../MathPuppPage/PuppProblemRoot";

const ListPage: React.FC = () => {
  const [items, setItems] = useState<string[]>([]);

  useEffect(() => {
    const queryString = window.location.href.split("?")[1];
    const urlParams = new URLSearchParams(queryString);
    const list = urlParams.get("list");
    const items = list ? list.split(" ") : [];
    setItems(items);
  }, []);

  return (
    <div>
      {items.length === 0 ? (
        <Alert variant="warning">
          Užduotys atrenkamos pagal nuorodą. Šiuo metu nuorodoje esantis sąrašas
          tuščias. Jei norite sukurti sąrašą, eikite į{" "}
          <Link to="/">puslapį "Matematikos VBE"</Link> arba{" "}
          <Link to="/math-pupp">puslapį "Matematikos PUPP"</Link>.
        </Alert>
      ) : (
        <Alert variant="warning">Užduotys atrinktos pagal nuorodą</Alert>
      )}
      {items.map((item, index) => {
        if (
          item.charAt(5) === "1" ||
          item.charAt(5) === "2" ||
          item.charAt(5) === "3"
        ) {
          const currProblemInfo: any = parseProblemFilename("math", item);
          return (
            <div key={index}>
              <hr style={{ border: "3px solid black" }} />
              <h1>{index + 1}.</h1>
              <em>
                (VBE {getLongYearName(item)} {currProblemInfo.number} užd.)
              </em>
              {currProblemInfo.problemType === "sub" && (
                <MathProblemRoot
                  theListItIs
                  currProblemInfo={currProblemInfo}
                />
              )}
              <SingleProblem
                filename={item + ".png"}
                subject="math"
                answerLut={nrTopicLut}
                theListItIs
              />
            </div>
          );
        } else if (
          item.charAt(0) === "S" &&
          item.charAt(1) === "K" &&
          item.charAt(2) === "F"
        ) {
          return (
            <div key={index}>
              <hr style={{ border: "3px solid black" }} />
              <h1>{index + 1}.</h1>
              <em>({item})</em>
              <SingleProblem
                filename={item + ".png"}
                subject="naglis"
                answerLut={naglisNrTopicLut}
                theListItIs
              />
            </div>
          );
        } else {
          const currProblemInfo: any = parseProblemFilename("pupp", item);
          return (
            <div key={index}>
              <hr style={{ border: "3px solid black" }} />
              <h1>{index + 1}.</h1>
              <em>
                (PUPP {getLongYearName(item)} {currProblemInfo.number} užd.)
              </em>
              {currProblemInfo.problemType === "sub" && (
                <PuppProblemRoot
                  theListItIs
                  currProblemInfo={currProblemInfo}
                />
              )}
              <SingleProblem
                filename={item + ".png"}
                subject="pupp"
                answerLut={puppTopicLut}
                theListItIs
              />
            </div>
          );
        }
      })}
    </div>
  );
};

export default ListPage;
