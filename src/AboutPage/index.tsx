import { Link } from "react-router-dom";

export default function AboutPage() {
  return (
    <div>
      <p>
        Jei patinka (arba nepatinka) šitas tinklapis – dalinkitės,{" "}
        <a href="mailto:naglis.suliokas@gmail.com">rašykit grįžtamąjį ryšį</a>,{" "}
        <Link to="/contribute"> prisidėkit</Link>, sekit{" "}
        <a
          href="https://www.instagram.com/naglisaudrius/"
          target="_blank"
          rel="noreferrer"
        >
          instagrame
        </a>{" "}
        ir{" "}
        <a
          href="https://www.tiktok.com/@naglisaudrius"
          target="_blank"
          rel="noreferrer"
        >
          tiktoke
        </a>{" "}
        arba paremkit. O gal turit idėjų, kas būtų naudinga mokyklai?{" "}
        <a
          href="mailto:naglis.suliokas@gmail.com"
          target="_blank"
          rel="noreferrer"
        >
          Parašykit el. laišką
        </a>
      </p>

      <p>
        Tinklapio kodas{" "}
        <a
          href="https://github.com/naglissul/vbe-sort"
          target="_blank"
          rel="noreferrer"
        >
          čia
        </a>
      </p>
      <p>
        Užduočių šaltinis:{" "}
        <a
          href="https://www.nsa.smm.lt/egzaminai-ir-pasiekimu-patikrinimai/brandos-egzaminai/egzaminu-uzduotys/"
          target="_blank"
          rel="noreferrer"
        >
          nsa.smm.lt
        </a>
      </p>
      <p>
        Atsakymų šaltinis*:{" "}
        <a
          href="https://www.nsa.smm.lt/egzaminai-ir-pasiekimu-patikrinimai/brandos-egzaminai/vertinimas/"
          target="_blank"
          rel="noreferrer"
        >
          nsa.smm.lt
        </a>
      </p>
      <p>
        Užduotys nesikartoja keliose kategorijose. Esant kelioms temoms viename
        uždavinyje, priskiriama tik viena kategorija. Prioritetiniai kriterijai
        bus patikslinti vėliau.
      </p>
    </div>
  );
}
