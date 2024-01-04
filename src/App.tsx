import "./App.css";
import PrivacyComponent from "./components/PrivacyComponent";
import Footer from "./components/Footer";
import Header from "./components/Header";
import MainPage from "./MainPage";
import { useState } from "react";
import DarkModeButton from "./MainPage/components/DarkModeButton";
import { Routes, Route, BrowserRouter, Navigate } from "react-router-dom";
import AboutPage from "./AboutPage";
import ContributePage from "./ContributePage";

function App() {
  const [isDarkMode, setIsDarkMode] = useState<boolean>(true);

  return (
    <BrowserRouter>
      {" "}
      <div
        data-bs-theme={`${isDarkMode && "dark"}`}
        className={`${isDarkMode && "bg-dark text-light"}`}
        style={{ minHeight: "100vh" }}
      >
        <PrivacyComponent />
        <Header />
        <div className="dark-button-container">
          <DarkModeButton
            isDarkMode={isDarkMode}
            setIsDarkMode={setIsDarkMode}
          />
        </div>
        <main>
          <aside></aside>
          <section>
            <Routes>
              <Route index element={<Navigate to="/math-tab" replace />} />
              <Route path="/math-tab" element={<MainPage />} />
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
    </BrowserRouter>
  );
}

export default App;
