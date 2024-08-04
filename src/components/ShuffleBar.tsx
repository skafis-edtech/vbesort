import { Button } from "react-bootstrap";
import { ReactComponent as ShuffleIcon } from "./shuffle.svg";
import { useDarkMode } from "./DarkModeContext";

export default function ShuffleBar() {
  const { isShuffleOn, toggleShuffle } = useDarkMode();
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",

        alignItems: "center",
      }}
    >
      <h4 style={{ width: "350px" }}>
        Užduočių maišymas {isShuffleOn ? "ĮJUNGTAS" : "IŠJUNGTAS"}:
      </h4>{" "}
      <div
        style={{
          margin: "10px",
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          textAlign: "center",
        }}
      >
        <Button
          style={{
            height: "40px",
            width: "40px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            padding: 0,
            marginRight: "10px",
          }}
          variant={`${isShuffleOn ? "primary" : "light"}`}
          onClick={toggleShuffle}
        >
          <ShuffleIcon style={{ height: "24px", width: "24px" }} />
        </Button>
      </div>
    </div>
  );
}
