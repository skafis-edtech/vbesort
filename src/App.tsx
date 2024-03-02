import "./App.css";
import PrivacyComponent from "./components/PrivacyComponent";
import Footer from "./components/Footer";
import Header from "./components/Header";
import MainPage from "./MainPage";
import DarkModeButton from "./MainPage/components/DarkModeButton";
import { Routes, Route, HashRouter } from "react-router-dom";
import AboutPage from "./AboutPage";
import ContributePage from "./ContributePage";
import { DarkModeProvider } from "./components/DarkModeContext";

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
                <Route path="/hist-tab" element={<MainPage />} />
                <Route path="/bio-tab" element={<MainPage />} />
                <Route path="/math-pupp-tab" element={<MainPage />} />
                <Route path="/about" element={<AboutPage />} />
                <Route path="/contribute" element={<ContributePage />} />
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
