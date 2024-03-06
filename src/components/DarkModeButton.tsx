import { Button } from "react-bootstrap";
import { ReactComponent as SunIcon } from "./sun.svg";
import { ReactComponent as MoonIcon } from "./moon.svg";
import { useDarkMode } from "./DarkModeContext";

export default function DarkModeButton() {
  const { isDarkMode, toggleDarkMode } = useDarkMode();
  return (
    <>
      <Button
        variant="secondary"
        style={{
          borderRadius: "100%",
        }}
        onClick={toggleDarkMode}
      >
        {isDarkMode ? (
          <SunIcon style={{ marginBottom: "4px" }} />
        ) : (
          <MoonIcon style={{ marginBottom: "4px" }} />
        )}
      </Button>
      <img
        loading="lazy"
        className="dark-light-mode-text"
        src={`assets/${isDarkMode ? "light" : "dark"}-mode-${
          window.innerWidth <= 768 ? "mobile" : "web"
        }.png`}
        alt="text 'light mode'"
      />
    </>
  );
}
