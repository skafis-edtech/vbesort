import { Button } from "react-bootstrap";
import { ReactComponent as SunIcon } from "../icons/sun.svg";
import { ReactComponent as MoonIcon } from "../icons/moon.svg";
import { useDarkMode } from "./DarkModeContext";

export default function DarkModeButton() {
  const { isDarkMode, toggleDarkMode } = useDarkMode();
  return (
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
  );
}
