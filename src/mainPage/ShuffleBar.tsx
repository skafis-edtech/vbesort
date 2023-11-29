import { Button } from "react-bootstrap";
import { ReactComponent as RepeatIcon } from "./repeat.svg";
import { ReactComponent as ShuffleIcon } from "./shuffle.svg";
import { ReactComponent as UndoIcon } from "./undo.svg";

interface ShuffleProps {
  isShuffleOn: boolean;
  setShuffleOn: React.Dispatch<React.SetStateAction<boolean>>;
  reshuffle: Function;
  undoShuffle: Function;
  style: React.CSSProperties;
}

export default function ShuffleBar({
  isShuffleOn,
  setShuffleOn,
  reshuffle,
  undoShuffle,
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
        <div
          style={{
            margin: "10px",
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            //   width: "50px",
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
          {/* <em style={{ fontSize: "12px" }}>Shuffle on/off</em> */}
        </div>
        {/* <div
      style={{
        margin: "10px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        width: "50px",
        textAlign: "center",
      }}
    >
      <Button
        disabled={isShuffleOn}
        variant="primary"
        style={{
          height: "40px",
          width: "40px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          padding: 0,
        }}
      >
        <RepeatIcon style={{ height: "24px", width: "24px" }} />
      </Button>
      <em style={{ fontSize: "12px" }}>Reshuffle</em>
    </div>
    <div
      style={{
        margin: "10px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        width: "50px",
        textAlign: "center",
      }}
    >
      <Button
        disabled={isShuffleOn}
        variant="success"
        style={{
          height: "40px",
          width: "40px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          padding: 0,
        }}
      >
        <UndoIcon style={{ height: "24px", width: "24px" }} />
      </Button>
      <em style={{ fontSize: "12px" }}>Undo shuffle</em>
    </div> */}
      </div>
    </div>
  );
}
