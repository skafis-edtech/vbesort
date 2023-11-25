export default function SingleMathProblem({ filename }: { filename: string }) {
  return (
    <div>
      <img alt={filename} src={`2017/${filename}`} />
    </div>
  );
}
