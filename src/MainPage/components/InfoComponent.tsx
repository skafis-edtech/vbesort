import { Link } from "react-router-dom";
import Support from "../../components/Support";
import { Alert } from "react-bootstrap";
import ShuffleBar from "./ShuffleBar";

export default function InfoComponent() {
  return (
    <div>
      <p>
        Štai čia – matematikos VBE ir kitų egzaminų užduotys (su atsakymais),
        surūšiuotos pagal temas. Viskas nemokama. Naudokitės į valias.
      </p>
      <ShuffleBar style={{ flexGrow: 1 }} />
      <Support />
    </div>
  );
}
