import { Button } from "react-bootstrap";
import { ReactComponent as ShuffleIcon } from "./shuffle.svg";

interface ShuffleProps {
  isShuffleOn: boolean;
  setShuffleOn: any;
  style: React.CSSProperties;
}

export default function ShuffleBar({
  isShuffleOn,
  setShuffleOn,
  style,
}: ShuffleProps) {
  return (
    <div style={style}>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "flex-start",
        }}
      >
        <h4>Shuffle is {isShuffleOn ? "ON" : "OFF"}:</h4>{" "}
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
            onClick={() => setShuffleOn(!isShuffleOn)}
          >
            <ShuffleIcon style={{ height: "24px", width: "24px" }} />
          </Button>
        </div>
      </div>
    </div>
  );
}
