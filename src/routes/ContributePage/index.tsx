import Support from "../../components/Support";
import { Components } from "../../types";

const ContributePage: React.FC<Components.PageProps> = () => {
  return (
    <div>
      <h1 className="title">Prisidėk</h1>

      <Support />
      <h3>Kaip galima prisidėti?</h3>
      <ul>
        <li>Screenshotinti užduotis ir atsakymus</li>
        <li>Rūšiuoti užduotis</li>
        <li>Rašyti/taisyti programos kodą</li>
        <li>Paremti pinigais</li>
      </ul>
      <h4>
        Plačiau aprašyta čia:{" "}
        <a
          target="_blank"
          rel="noreferrer"
          href="https://github.com/naglissul/vbe-sort/blob/master/CONTRIBUTE.md"
        >
          https://github.com/naglissul/vbe-sort/blob/master/CONTRIBUTE.md
        </a>
      </h4>
    </div>
  );
};

export default ContributePage;
