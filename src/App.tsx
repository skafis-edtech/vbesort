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
              <p style={{ marginTop: "10px" }}>
                * 2016 metų pakartotinės sesijos atsakymų nuoroda nsa.smm.lt
                tinklapyje yra neveikianti, tačiau nuėmus "+" ženklą iš
                nuorodos, galima vis tiek viešai prieiti prie atsakymų. Štai čia
                tiksli nuoroda:{" "}
                <a href="https://www.nsa.smm.lt/wp-content/uploads/2021/03/6696_Mat_vertinimas_II-2016-07_11-red.pdf">
                  https://www.nsa.smm.lt/wp-content/uploads/2021/03/6696_Mat_vertinimas_II-2016-07_11-red.pdf
                </a>
              </p>
            </Tab>
            <Tab
              eventKey="bio-vbe"
              title="Biologijos VBE"
              style={{ marginTop: "20px" }}
            >
              <em>
                Coming soon... Make it come sooner by{" "}
                <a
                  href="https://github.com/naglissul/vbe-sort/blob/master/CONTRIBUTE.md#biologijos-vbe"
                  target="_blank"
                  rel="noreferrer"
                >
                  contributing
                </a>
              </em>
            </Tab>
            <Tab
              eventKey="hist-vbe"
              title="Istorijos VBE"
              style={{ marginTop: "20px" }}
            >
              <em>
                Coming soon... Make it come sooner by{" "}
                <a
                  href="https://github.com/naglissul/vbe-sort/blob/master/CONTRIBUTE.md#istorijos-vbe"
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
                  href="https://github.com/naglissul/vbe-sort/blob/master/CONTRIBUTE.md#matematikos-pupp"
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
          Išvestinės - Lygtys - ... - Išvestinės - Funkcijų grafikų eskizai - Funkcijos bendrai - ... - Misc
        </p>
        <p>
          Taip pat, jei abejoju ar jei dar nesu priskyręs kategorijos, viskas
          eina į Misc.
        </p> */}

        <p>
          Užduočių sąlygų, sprendimų ir atsakymų autorinės teisės priklauso
          Nacionaliniam egzaminų centrui ir Nacionalinei švietimo agentūrai (LR
          švietimo, mokslo ir sporto ministerijai). Šiuo tinklapiu
          nepasisavinamos jokios autorinės teisės, naudojama tik viešai
          prieinama informacija nekomerciniais tikslais.
        </p>
        <p>
          Mano blog'as ir daugiau cool stuff čia:{" "}
          <a href="https://www.npw.lt">npw.lt</a>
        </p>
      </footer>
    </div>
  );
}

export default App;
