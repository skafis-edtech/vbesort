import { parseMathProblemId } from "../misc";

export default function SingleMathProblem({ filename }: { filename: string }) {
  return (
    <div
      style={{
        paddingTop: "50px",
        paddingBottom: "50px",
        overflowX: "auto",
      }}
    >
      <img
        alt={filename}
        src={`math-problems/${parseMathProblemId(filename).year}/${filename}`}
      />
    </div>
  );
}
