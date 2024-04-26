import "./App.css";
import PrivacyComponent from "./components/PrivacyComponent";
import Footer from "./components/Footer";
import Header from "./components/Header";
import MainPage from "./MainPage";
import { Routes, Route, BrowserRouter } from "react-router-dom";
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
import PhysicsPage from "./PhysicsPage";
import ListPage from "./ListPage";
import ListMaker from "./ListMaker";
import { useEffect, useState } from "react";
import NaglisProblemsPage from "./NaglisProblemsPage";

function App() {
  // List Maker for Math VBE
  const [listUrl, setListUrl] = useState<string>(
    localStorage.getItem("LIST_URL") || "https://www.vbesort.lt/list?list="
  );

  useEffect(() => {
    localStorage.setItem("LIST_URL", listUrl);
  }, [listUrl]);
  // End of list maker

  return (
    <DarkModeProvider>
      <BrowserRouter>
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
              <ListMaker listUrl={listUrl} setListUrl={setListUrl} />
              <Routes>
                <Route
                  index
                  element={
                    <TabsContainer
                      MathTab={
                        <MainPage listUrl={listUrl} setListUrl={setListUrl} />
                      }
                    />
                  }
                />
                <Route
                  path="/list"
                  element={<TabsContainer ListTab={<ListPage />} />}
                />
                <Route
                  path="/naglis-problems"
                  element={
                    <TabsContainer
                      NaglisProblemsTab={
                        <NaglisProblemsPage
                          listUrl={listUrl}
                          setListUrl={setListUrl}
                        />
                      }
                    />
                  }
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
                  element={
                    <TabsContainer
                      PuppTab={
                        <MathPuppPage
                          listUrl={listUrl}
                          setListUrl={setListUrl}
                        />
                      }
                    />
                  }
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
                  path="/physics"
                  element={<TabsContainer PhysicsTab={<PhysicsPage />} />}
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
      </BrowserRouter>
    </DarkModeProvider>
  );
}

export default App;
