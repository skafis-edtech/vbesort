import { parseMathProblemId } from "../misc";

export default function SingleMathProblem({ filename }: { filename: string }) {
  return (
    <div style={{ marginTop: "20px" }}>
      <img
        alt={filename}
        src={`math-problems/${parseMathProblemId(filename).year}/${filename}`}
      />
    </div>
  );
}
