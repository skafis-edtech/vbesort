import { Alert } from "react-bootstrap";
import { Components } from "../../types";
import ShuffleBar from "../../components/layout/ShuffleBar";

const LietPage: React.FC<Components.PageProps> = (props) => {
  return (
    <>
      <ShuffleBar />
      <h1 className="vbesort-title">vbesort.lt</h1>
      <p className="vbesort-description">
        Surūšiuotos VBE bei kitų egzaminų užduotys
      </p>

      <h1 className="title">Lietuvių kalbos VBE</h1>

      <Alert variant="warning">Kol kas čia tuščia...</Alert>
      <Alert variant="info">
        Idėja: sukelti visas rašinių temas ir galbūt gauti savanorių, kurie
        norėtų pasidalinti savo rašiniais.
      </Alert>
    </>
  );
};

export default LietPage;
