import { Button } from "react-bootstrap";
import { ReactComponent as SunIcon } from "./sun.svg";
import { ReactComponent as MoonIcon } from "./moon.svg";

interface DarkModeButtonProps {
  isDarkMode: boolean;
  setIsDarkMode: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function DarkModeButton({
  isDarkMode,
  setIsDarkMode,
}: DarkModeButtonProps) {
  return (
    <>
      <Button
        variant="secondary"
        style={{
          borderRadius: "100%",
        }}
        onClick={() => setIsDarkMode(!isDarkMode)}
      >
        {isDarkMode ? (
          <SunIcon style={{ marginBottom: "4px" }} />
        ) : (
          <MoonIcon style={{ marginBottom: "4px" }} />
        )}
      </Button>
      <img
        className="dark-light-mode-text"
        src={`assets/${isDarkMode ? "light" : "dark"}-mode-${
          window.innerWidth <= 768 ? "mobile" : "web"
        }.png`}
        alt="text 'light mode'"
      />
    </>
  );
}
