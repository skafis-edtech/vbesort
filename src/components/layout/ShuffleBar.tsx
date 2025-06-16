import { Button } from "react-bootstrap";
import ShuffleIcon from "../icons/shuffle.svg?react";
import { useDarkMode } from "./DarkModeContext";
import "./flexMobile.css";

export default function ShuffleBar() {
  const { isShuffleOn, toggleShuffle } = useDarkMode();
  return (
    <div
      className="flex-mobile"
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "row",

          alignItems: "center",
        }}
      >
        <h5 style={{ width: "300px" }}>
          Užduočių maišymas {isShuffleOn ? "ĮJUNGTAS" : "IŠJUNGTAS"}:
        </h5>{" "}
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
              height: "30px",
              width: "30px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              padding: 0,
              marginRight: "10px",
            }}
            variant={`${isShuffleOn ? "primary" : "light"}`}
            onClick={toggleShuffle}
          >
            <ShuffleIcon style={{ height: "20px", width: "20px" }} />
          </Button>
        </div>
      </div>
    </div>
  );
}
