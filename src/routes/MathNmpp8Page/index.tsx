import { Alert } from "react-bootstrap";
import { Components } from "../../types";
import ShuffleBar from "../../components/layout/ShuffleBar";

const MathNmpp8Page: React.FC<Components.PageProps> = (props) => {
  return (
    <>
      <ShuffleBar />
      <h1 className="vbesort-title">vbesort.lt</h1>
      <p className="vbesort-description">
        Surūšiuotos VBE bei kitų egzaminų užduotys
      </p>

      <h1 className="title">Matematikos NMPP 8 kl.</h1>

      <Alert variant="warning">Kol kas čia tuščia...</Alert>
    </>
  );
};

export default MathNmpp8Page;
