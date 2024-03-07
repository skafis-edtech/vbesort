import "./App.css";
import PrivacyComponent from "./components/PrivacyComponent";
import Footer from "./components/Footer";
import Header from "./components/Header";
import MainPage from "./MainPage";
import { Routes, Route, HashRouter } from "react-router-dom";
import AboutPage from "./AboutPage";
import { DarkModeProvider } from "./components/DarkModeContext";
import { Link } from "react-router-dom";
import InfoComponent from "./components/InfoComponent";
import DarkModeButton from "./components/DarkModeButton";
import HistPage from "./HistPage";
import BioPage from "./BioPage";
import MathPuppPage from "./MathPuppPage";
import ContributePage from "./ContributePage";
import TabsContainer from "./components/TabsContainer";
import ItPage from "./ItPage";

function App() {
  return (
    <DarkModeProvider>
      <HashRouter>
        <div style={{ minHeight: "100vh" }}>
          <PrivacyComponent />
          <Header />
          <div className="dark-button-container">
            <DarkModeButton />
          </div>
          <main>
            <aside></aside>
            <section>
              <InfoComponent />

              <Routes>
                <Route
                  index
                  element={<TabsContainer MathTab={<MainPage />} />}
                />
                <Route
                  path="/hist"
                  element={<TabsContainer HistTab={<HistPage />} />}
                />
                <Route
                  path="/it-template"
                  element={<TabsContainer ItTab={<ItPage />} />}
                />
                <Route
                  path="/bio"
                  element={<TabsContainer BioTab={<BioPage />} />}
                />
                <Route
                  path="/math-pupp"
                  element={<TabsContainer PuppTab={<MathPuppPage />} />}
                />
                <Route
                  path="/about"
                  element={<TabsContainer AboutTab={<AboutPage />} />}
                />
                <Route
                  path="/contribute"
                  element={<TabsContainer ContributeTab={<ContributePage />} />}
                />
                <Route
                  path="*"
                  element={
                    <h1 style={{ textAlign: "center" }}>
                      <br />
                      Ups... 404. <br />
                      <Link to="/">Į PRADŽIĄ</Link>
                    </h1>
                  }
                />
              </Routes>
            </section>
            <aside></aside>
          </main>
          <Footer />
        </div>
      </HashRouter>
    </DarkModeProvider>
  );
}

export default App;
