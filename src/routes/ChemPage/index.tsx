import { Alert } from "react-bootstrap";
import { Components } from "../../types";
import ShuffleBar from "../../components/layout/ShuffleBar";

const ChemPage: React.FC<Components.PageProps> = () => {
  return (
    <>
      <ShuffleBar />
      <div
        style={{
          position: "relative",
          display: "flex",
          justifyContent: "center",
          margin: "fit-content",
        }}
      >
        <h1 className="vbesort-title">vbesort.lt</h1>
        <em style={{ position: "absolute", right: "30%", bottom: 0 }}>
          by <a href="https://www.skafis.lt">Skafis</a>
        </em>
      </div>{" "}
      <p className="vbesort-description">
        Surūšiuotos VBE bei kitų egzaminų užduotys
      </p>
      <h1 className="title">Chemijos VBE</h1>
      <Alert variant="warning">Kol kas čia tuščia...</Alert>
      <Alert variant="info">
        VBE lentelės:{" "}
        <a href="https://www.nsa.smm.lt/wp-content/uploads/2024/05/VBE_uzduociu_apraso_STEAM_2-priedas_CHEMIJA_NSA-svetaine_2024-05-03.pdf">
          ČIA
        </a>
      </Alert>
    </>
  );
};

export default ChemPage;
