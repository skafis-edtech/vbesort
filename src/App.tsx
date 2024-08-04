import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import MainPage from "./routes/MainPage";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import AboutPage from "./routes/AboutPage";
import { DarkModeProvider } from "./components/DarkModeContext";
import { Link } from "react-router-dom";
import HistPage from "./routes/HistPage";
import BioPage from "./routes/BioPage";
import MathPuppPage from "./routes/MathPuppPage";
import ContributePage from "./routes/ContributePage";
import PhysicsPage from "./routes/PhysicsPage";
import ListPage from "./routes/ListPage";
import { useEffect, useState } from "react";
import ListMaker from "./ListMaker";
import ShuffleBar from "./components/ShuffleBar";
import Support from "./components/Support";
import { Alert } from "react-bootstrap";
import usePersistentState from "./hooks";

function App() {
  // List Maker for Math VBE
  const [listUrl, setListUrl] = useState<string>(
    localStorage.getItem("LIST_URL") || "https://www.vbesort.lt/list?list="
  );

  useEffect(() => {
    localStorage.setItem("LIST_URL", listUrl);
  }, [listUrl]);
  // End of list maker

  const [isCookiesAccepted, setIsCookiesAccepted] = usePersistentState(
    "COOKIES_ACCEPTED",
    false
  );

  return (
    <DarkModeProvider>
      <BrowserRouter>
        <div style={{ minHeight: "100vh" }}>
          <Header />
          <h1 className="title">vbesort.lt</h1>
          <main>
            <aside></aside>
            <section>
              <ListMaker listUrl={listUrl} setListUrl={setListUrl} />
              <div>
                <p>
                  Štai čia – matematikos VBE ir kitų egzaminų užduotys,
                  surūšiuotos pagal temas, dauguma su atsakymais. Viskas
                  nemokama. Naudokitės į valias.
                </p>
                <ShuffleBar style={{ flexGrow: 1 }} />
                <Support />
              </div>
              <Routes>
                <Route
                  index
                  element={
                    <MainPage listUrl={listUrl} setListUrl={setListUrl} />
                  }
                />
                <Route path="/list" element={<ListPage />} />
                <Route path="/hist" element={<HistPage />} />
                <Route path="/bio" element={<BioPage />} />
                <Route
                  path="/math-pupp"
                  element={
                    <MathPuppPage listUrl={listUrl} setListUrl={setListUrl} />
                  }
                />
                <Route path="/about" element={<AboutPage />} />
                <Route path="/contribute" element={<ContributePage />} />
                <Route path="/physics" element={<PhysicsPage />} />

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
          {!isCookiesAccepted && (
            <Alert
              variant="info"
              dismissible
              onClose={() => setIsCookiesAccepted(true)}
              style={{ position: "fixed", bottom: "-16px", left: 0, right: 0 }}
            >
              Šis tinklapis naudoja Google Analytics slapukus bei Jūsų
              kompiuterio atmintį. Tęsdami lankymąsi puslapyje Jūs sutinkate su
              slapukų bei kompiuterio atminties naudojimu. Plačiau puslapyje{" "}
              <a href="/about">"Apie"</a> skiltyje "Privatumo politika".
            </Alert>
          )}
          <Footer />
        </div>
      </BrowserRouter>
    </DarkModeProvider>
  );
}

export default App;
