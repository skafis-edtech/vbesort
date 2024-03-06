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
                <Route index element={<MainPage />} />
                <Route path="/hist" element={<HistPage />} />
                <Route path="/bio" element={<BioPage />} />
                <Route path="/math-pupp" element={<MathPuppPage />} />
                <Route path="/about" element={<AboutPage />} />
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
