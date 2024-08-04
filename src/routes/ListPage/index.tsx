import { useEffect, useState } from "react";
import SingleProblem from "../../components/SingleProblem";
import nrTopicLut from "../MainPage/data/nr-topic-lut.json";
import puppTopicLut from "../MathPuppPage/data/nr-topic-lut.json";
import { getLongYearName, parseProblemFilename } from "../../misc";
import MathProblemRoot from "../MainPage/MathProblemRoot";
import { Alert, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import PuppProblemRoot from "../MathPuppPage/PuppProblemRoot";
import { Components } from "../../types";

const ListPage: React.FC<Components.PageProps> = (props) => {
  const [items, setItems] = useState<string[]>([]);

  useEffect(() => {
    let queryString = window.location.href.split("?")[1];
    if (!queryString) {
      queryString = props.listUrl.split("?")[1];
      window.history.pushState(null, "", "?" + queryString);
    }
    const urlParams = new URLSearchParams(queryString);
    const list = urlParams.get("list");
    const items = list ? list.split(" ") : [];
    setItems(items);
  }, [props.listUrl]);

  const clearList = () => {
    props.setListUrl("https://www.vbesort.lt/list?list=");
    setItems([]);
    window.history.pushState(null, "", "/list?list=");
  };

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
        <Alert
          variant="warning"
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <div>
            Užduotys atrinktos pagal nuorodą. Ją galite kopijuoti ir dalintis.
          </div>
          <Button variant="danger" onClick={clearList}>
            Išvalyti sukurtą sąrašą
          </Button>
        </Alert>
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
