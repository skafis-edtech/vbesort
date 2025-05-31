import { Alert, Button } from "react-bootstrap";
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
      <Alert
        variant="warning"
        style={{ padding: 0, paddingLeft: "4px", margin: 0 }}
      >
        Taip pat prieinama per:{" "}
        <a href="https://vbesort.web.app">vbesort.web.app</a>,{" "}
        <a href="https://vbesort2.web.app">vbesort2.web.app</a>,{" "}
        <a href="https://vbesort3.web.app">vbesort3.web.app</a>,{" "}
        <a href="https://vbesort4.web.app">vbesort4.web.app</a>,{" "}
        <a href="https://vbesort5.web.app">vbesort5.web.app</a>. Tinklapio
        statusas:{" "}
        <a href="https://www.facebook.com/groups/428680532854585">
          Facebook grupėje
        </a>
      </Alert>
    </div>
  );
}
