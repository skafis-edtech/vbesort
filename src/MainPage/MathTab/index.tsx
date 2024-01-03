import { Accordion, Form } from "react-bootstrap";
import topics from "./data/topics-names-list.json";
import nrTopicLut from "./data/nr-topic-lut.json";
import { useState } from "react";
import allYearList from "./data/year-list.json";
import ShuffleBar from "../components/ShuffleBar";
import TopicItem from "../components/TopicItem";

export default function MathTab() {
  const [yearList, setYearList] = useState<string[]>(
    allYearList.filter((year) => year !== "2023k" && year !== "2023g")
  );

  const toggleYearInList = (yearToToggle: string) => {
    if (yearList.includes(yearToToggle)) {
      setYearList(yearList.filter((year) => year !== yearToToggle));
    } else {
      setYearList([...yearList, yearToToggle]);
    }
  };

  const [isShuffleOn, setShuffleOn] = useState<boolean>(true);
  return (
    <>
      <p>
        Siūlau žiūrint užduotis pasilikti bent dviejų egzaminų užduotis
        nematytas, kad ruošiantis būtų galima išspręsti bent vieną egzaminą
        pilnai, sekant laiką ir pasitikrinant pasiruošimą (pagrindinės sesijos),
        bei vieną mokykloje išspręsti kaip bandomąjį (greičiausiai 2023 m.
        pakartotinės sesijos)
      </p>
      <div>
        <div style={{ marginTop: "50px", marginBottom: "20px" }}>
          <div style={{ marginTop: "20px", display: "flex" }}>
            <Form style={{ flexGrow: 3 }}>
              {allYearList.map((year) => (
                <Form.Check
                  key={year}
                  inline
                  label={`${year.slice(0, 4)} pa${year.slice(4, 5)}.`}
                  checked={yearList.includes(year)}
                  onChange={() => toggleYearInList(year)}
                />
              ))}
            </Form>
            <ShuffleBar
              isShuffleOn={isShuffleOn}
              setShuffleOn={setShuffleOn}
              style={{ flexGrow: 1 }}
            />
          </div>
        </div>
        <Accordion>
          {topics.map((topic) => (
            <TopicItem
              key={topic.topic}
              topic={topic}
              yearList={yearList}
              isShuffleOn={isShuffleOn}
              nrTopicLut={nrTopicLut}
              subject="math"
            />
          ))}
        </Accordion>
      </div>
      <p style={{ marginTop: "10px" }}>
        * 2016 metų pakartotinės sesijos atsakymų nuoroda nsa.smm.lt tinklapyje
        yra neveikianti, tačiau nuėmus "+" ženklą iš nuorodos, galima vis tiek
        viešai prieiti prie atsakymų. Štai čia tiksli nuoroda:{" "}
        <a href="https://www.nsa.smm.lt/wp-content/uploads/2021/03/6696_Mat_vertinimas_II-2016-07_11-red.pdf">
          https://www.nsa.smm.lt/wp-content/uploads/2021/03/6696_Mat_vertinimas_II-2016-07_11-red.pdf
        </a>
      </p>
      {/* <p>Uždavinių kategorijų prioritetinė eilė (draft):</p>
        <p>
          Vektoriai - Stereometrija - Planimetrija - ... - Integralai -
          Išvestinės - Lygtys - ... - Išvestinės - Funkcijų grafikų eskizai - Funkcijos bendrai - ... - Misc
        </p>
        <p>
          Taip pat, jei abejoju ar jei dar nesu priskyręs kategorijos, viskas
          eina į Misc.
        </p> */}
    </>
  );
}
