import { Link } from "react-router-dom";
import Support from "../../components/Support";

export default function InfoComponent() {
  return (
    <div>
      <p>
        Štai čia matematikos VBE ir kitų egzaminų užduotys (su atsakymais),
        surūšiuotos pagal temas. Viskas nemokama. Naudokitės į valias. Plačiau
        skaitykite <Link to="/about">puslapyje "Apie".</Link>
      </p>
      <Support />
    </div>
  );
}
