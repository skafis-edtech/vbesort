import { Link } from "react-router-dom";
import Support from "../../components/Support";
import { Alert } from "react-bootstrap";

export default function InfoComponent() {
  return (
    <div>
      <p>
        Štai čia – matematikos VBE ir kitų egzaminų užduotys (su atsakymais),
        surūšiuotos pagal temas. Viskas nemokama. Naudokitės į valias. Plačiau
        skaitykite <Link to="/about">puslapyje "Apie".</Link>
      </p>
      {/* <Alert>
        Ieškau užduočių/atsakymų screenshotintojo(-os), rūšiuotojo(-os) (ne už
        ačiū). Dėl daugiau informacijos -{" "}
        <a href="mailto:naglis.suliokas@gmail.com">susisiekti</a>
      </Alert> */}
      <Support />
    </div>
  );
}
