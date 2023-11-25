export default function SingleMathProblem({ filename }: { filename: string }) {
  return (
    <div style={{ marginTop: "20px" }}>
      <img alt={filename} src={`2017/${filename}`} />
    </div>
  );
}
