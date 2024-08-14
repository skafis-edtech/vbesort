import { useEffect, useState } from "react";
import { parseProblemFilename } from "../../misc";
import { Alert, Button } from "react-bootstrap";
import { Components } from "../../types";
import { useDarkMode } from "../../components/layout/DarkModeContext";
import MathProblem from "../MainPage/MathProblem";
import mvNrTopicLut from "../../routes/MainPage/data/nr-topic-lut.json";
import mpNrTopicLut from "../../routes/MathPuppPage/data/nr-topic-lut.json";
import fvNrTopicLut from "../../routes/PhysicsPage/data/nr-topic-lut.json";
import bvNrTopicLut from "../../routes/BioPage/data/nr-topic-lut.json";
import ivNrTopicLut from "../../routes/HistPage/data/nr-topic-lut.json";
import MathPuppProblem from "../MathPuppPage/MathPuppProblem";
import PhysicsProblem from "../PhysicsPage/PhysicsProblem";
import BioProblem from "../BioPage/BioProblem";
import HistProblem from "../HistPage/HistProblem";

const ListPage: React.FC<Components.PageProps> = (props) => {
  const [items, setItems] = useState<string[]>([]);
  const { listUrl, setListUrl } = useDarkMode();

  useEffect(() => {
    let queryString = window.location.href.split("?")[1];
    if (!queryString) {
      queryString = listUrl.split("?")[1];
      window.history.pushState(null, "", "?" + queryString);
    }
    const urlParams = new URLSearchParams(queryString);
    const list = urlParams.get("list");
    const items = list ? list.split(" ") : [];
    setItems(items);
  }, [listUrl]);

  const clearList = () => {
    setListUrl("https://www.vbesort.lt/list?list=");
    setItems([]);
    window.history.pushState(null, "", "/list?list=");
  };

  return (
    <div>
      {items.length === 0 ? (
        <div>
          <Alert variant="warning">
            Užduotys atrenkamos pagal nuorodą. Šiuo metu nuorodoje esantis
            sąrašas tuščias. Žymėkite užduotis apatiniame dešiniajame kampe
            esančiu žymekliu ir jos bus pridėtos į sąrašą. Tuomet galite
            sugrįžti čia.
          </Alert>
          <div style={{ border: "1px black solid", width: "fit-content" }}>
            <img src="/help/list-maker-help.png" alt="list-maker-help" />
          </div>
        </div>
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
          {listUrl !== "https://www.vbesort.lt/list?list=" && (
            <Button variant="danger" onClick={clearList}>
              Išvalyti sukurtą sąrašą
            </Button>
          )}
        </Alert>
      )}

      {items.map((item, index) => {
        const currProblemInfo = parseProblemFilename(item);
        let probemComponent: React.ReactNode = null;
        switch (currProblemInfo.subjectExam) {
          case "mv":
            probemComponent = (
              <MathProblem
                filename={item + ".png"}
                key={index}
                answerFilenameOrAnswer={
                  mvNrTopicLut.find((pr) => pr.filename === item + ".png")
                    ?.answer
                }
                nrTopicLutSubsetForRoot={mvNrTopicLut
                  .filter((pr) => {
                    const prInfo = parseProblemFilename(pr.filename);
                    const isRootOrPrevSub =
                      (prInfo.year === currProblemInfo.year &&
                        prInfo.session === currProblemInfo.session &&
                        prInfo.problemNumber < currProblemInfo.problemNumber &&
                        prInfo.problemNumber >
                          Math.floor(currProblemInfo.problemNumber) &&
                        prInfo.problemType === "s") ||
                      (prInfo.year === currProblemInfo.year &&
                        prInfo.session === currProblemInfo.session &&
                        prInfo.problemNumber ===
                          Math.floor(currProblemInfo.problemNumber) &&
                        prInfo.problemType === "r");

                    return isRootOrPrevSub;
                  })
                  .sort((a, b) => {
                    const aInfo = parseProblemFilename(a.filename);
                    const bInfo = parseProblemFilename(b.filename);
                    return aInfo.problemNumber - bInfo.problemNumber;
                  })}
              />
            );
            break;
          case "mp":
            probemComponent = (
              <MathPuppProblem
                key={item}
                filename={item + ".png"}
                nrTopicLutSubsetForRoot={mpNrTopicLut.filter((pr) => {
                  const prInfo = parseProblemFilename(pr.filename);
                  return (
                    (prInfo.year === currProblemInfo.year &&
                      prInfo.session === currProblemInfo.session &&
                      prInfo.problemNumber < currProblemInfo.problemNumber &&
                      prInfo.problemNumber >
                        Math.floor(currProblemInfo.problemNumber) &&
                      prInfo.problemType === "s") ||
                    (prInfo.year === currProblemInfo.year &&
                      prInfo.session === currProblemInfo.session &&
                      prInfo.problemNumber ===
                        Math.floor(currProblemInfo.problemNumber) &&
                      prInfo.problemType === "r")
                  );
                })}
                answerFilenameOrAnswer={
                  mpNrTopicLut.find((pr) => pr.filename === item + ".png")
                    ?.answer
                }
              />
            );
            break;
          case "fv":
            probemComponent = (
              <PhysicsProblem
                key={item}
                filename={item + ".png"}
                answerFilenameOrAnswer={
                  fvNrTopicLut.find((pr) => pr.filename === item + ".png")
                    ?.answer
                }
              />
            );
            break;
          case "bv":
            probemComponent = (
              <BioProblem
                key={item}
                filename={item + ".png"}
                answerFilenameOrAnswer={
                  bvNrTopicLut.find((pr) => pr.filename === item + ".png")
                    ?.answer
                }
              />
            );
            break;
          case "iv":
            probemComponent = (
              <HistProblem
                key={item}
                filename={item + ".png"}
                answerFilenameOrAnswer={
                  ivNrTopicLut.find((pr) => pr.filename === item + ".png")
                    ?.answer
                }
                nrTopicLutForSources={ivNrTopicLut.filter((pr) => {
                  const prInfo = parseProblemFilename(pr.filename);
                  const isSource =
                    prInfo.year === currProblemInfo.year &&
                    prInfo.session === currProblemInfo.session &&
                    prInfo.problemType === "o" &&
                    Math.floor(prInfo.problemNumber) ===
                      currProblemInfo.problemNumber;

                  return isSource;
                })}
              />
            );
            break;
          default:
            probemComponent = <p>Užduotis pagal kodą "{item}" nerasta.</p>;
        }
        return (
          <div key={index}>
            <hr style={{ border: "3px solid black" }} />
            <h1>{index + 1}.</h1>
            {probemComponent}
          </div>
        );
      })}
    </div>
  );
};

export default ListPage;
