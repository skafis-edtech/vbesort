import "./App.css";
import Footer from "./components/Footer";
import DesktopHeader from "./components/DesktopHeader";
import MobileHeader from "./components/MobileHeader";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import { DarkModeProvider } from "./components/DarkModeContext";
import { useEffect, useState } from "react";
import { Alert } from "react-bootstrap";
import usePersistentState from "./hooks";
import { routes } from "./routes/routes";
import { useMediaQuery } from "react-responsive";

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

  const isMobile = useMediaQuery({ query: "(max-width: 768px)" });

  return (
    <DarkModeProvider>
      <BrowserRouter>
        <div style={{ minHeight: "100vh" }}>
          {isMobile ? <MobileHeader /> : <DesktopHeader />}

          <main>
            <aside></aside>
            <section>
              <Routes>
                {routes.map((route, index) => (
                  <Route
                    key={index}
                    path={route.path}
                    element={
                      <route.element
                        listUrl={listUrl}
                        setListUrl={setListUrl}
                      />
                    }
                  />
                ))}
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
