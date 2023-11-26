import { Tab, Tabs } from "react-bootstrap";
import "./App.css";
import MainPage from "./mainPage/MainPage";
import PrivacyComponent from "./mainPage/PrivacyComponent";

function App() {
  return (
    <div>
      <PrivacyComponent />
      <header>
        <h1 className="title">vbesort.lt</h1>
      </header>
      <main>
        <aside></aside>
        <section>
          <Tabs defaultActiveKey="math-vbe">
            <Tab
              eventKey="math-vbe"
              title="Matematikos VBE"
              style={{ marginTop: "20px" }}
            >
              <MainPage />
            </Tab>
            <Tab
              eventKey="hist-vbe"
              title="Istorijos VBE"
              style={{ marginTop: "20px" }}
            >
              <em>
                Coming soon... Make it come sooner by{" "}
                <a
                  href="https://github.com/naglissul/vbe-sort#contribute"
                  target="_blank"
                  rel="noreferrer"
                >
                  contributing
                </a>
              </em>
            </Tab>
            <Tab
              eventKey="bio-vbe"
              title="Biologijos VBE"
              style={{ marginTop: "20px" }}
            >
              <em>
                Coming soon... Make it come sooner by{" "}
                <a
                  href="https://github.com/naglissul/vbe-sort#contribute"
                  target="_blank"
                  rel="noreferrer"
                >
                  contributing
                </a>
              </em>
            </Tab>
            <Tab
              eventKey="math-pupp"
              title="Matematikos PUPP"
              style={{ marginTop: "20px" }}
            >
              <em>
                Coming soon... Make it come sooner by{" "}
                <a
                  href="https://github.com/naglissul/vbe-sort#contribute"
                  target="_blank"
                  rel="noreferrer"
                >
                  contributing
                </a>
              </em>
            </Tab>
          </Tabs>
        </section>
        <aside></aside>
      </main>
      <footer>
        {/* <p>Uždavinių kategorijų prioritetinė eilė (draft):</p>
        <p>
          Vektoriai - Stereometrija - Planimetrija - ... - Integralai -
          Išvestinės - Funkcijų grafikų eskizai - Funkcijos bendrai - ... - Misc
        </p>
        <p>
          Taip pat, jei abejoju ar jei dar nesu priskyręs kategorijos, viskas
          eina į Misc.
        </p> */}
        <p>
          Mano blog'as ir daugiau cool stuff čia:{" "}
          <a href="https://www.npw.lt">npw.lt</a>
        </p>
      </footer>
    </div>
  );
}

export default App;
