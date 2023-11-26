import { parseMathProblemId } from "../misc";

export default function SingleMathProblem({ filename }: { filename: string }) {
  return (
    <div style={{ marginTop: "20px" }}>
      <img
        alt={filename}
        src={`${parseMathProblemId(filename).year}/${filename}`}
      />
    </div>
  );
}
