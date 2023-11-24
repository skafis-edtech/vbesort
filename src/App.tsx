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
        <MainPage />
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
