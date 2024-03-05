import "./App.css";
import PrivacyComponent from "./components/PrivacyComponent";
import Footer from "./components/Footer";
import Header from "./components/Header";
import MainPage from "./MainPage";
import DarkModeButton from "./MainPage/components/DarkModeButton";
import { Routes, Route, HashRouter } from "react-router-dom";
import AboutPage from "./AboutPage";
import { DarkModeProvider } from "./components/DarkModeContext";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";

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
              <Routes>
                <Route index element={<MainPage />} />
                <Route path="/hist" element={<MainPage />} />
                <Route path="/bio" element={<MainPage />} />
                <Route path="/math-pupp" element={<MainPage />} />
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
