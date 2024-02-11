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
        Užduočių šaltinis*:{" "}
        <a
          href="https://www.nsa.smm.lt/egzaminai-ir-pasiekimu-patikrinimai/brandos-egzaminai/egzaminu-uzduotys/"
          target="_blank"
          rel="noreferrer"
        >
          nsa.smm.lt
        </a>
      </p>
      <p>
        Atsakymų šaltinis**:{" "}
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
      <p style={{ marginTop: "10px" }}>
        **2016 metų matematikos VBE pakartotinės sesijos atsakymų nuoroda
        nsa.smm.lt tinklapyje yra neveikianti, tačiau nuėmus "+" ženklą iš
        nuorodos, galima vis tiek viešai prieiti prie atsakymų. Štai čia tiksli
        nuoroda:{" "}
        <a href="https://www.nsa.smm.lt/wp-content/uploads/2021/03/6696_Mat_vertinimas_II-2016-07_11-red.pdf">
          https://www.nsa.smm.lt/wp-content/uploads/2021/03/6696_Mat_vertinimas_II-2016-07_11-red.pdf
        </a>
      </p>
      <p>
        *2015 pakartotinės PUPP užduotys taip pat turi neveikiančią nuorodą.
        Štai čia tiksli nuoroda:{" "}
        <a href="https://www.nsa.smm.lt/wp-content/uploads/2021/05/6026_2015_MAT-2_PUP.pdf">
          https://www.nsa.smm.lt/wp-content/uploads/2021/05/6026_2015_MAT-2_PUP.pdf
        </a>
      </p>
      <p>
        *2019, 2020, 2021 pakartotinių sesijų užduotys nėra viešai paskelbtos,
        bet dalinuosi prastesnės kokybės iš kitų šaltinių gautomis užduotimis.
      </p>
      <p>
        **2002p, 2003p, 2004p, 2005p, 2006p, 2007p, 2008g, 2019k, 2020k, 2021k
        atsakymai nepaskelbti. Šių egzaminų arba nebus atsakymų šiame
        tinklapyje, arba bus iš kitų šaltinių, arba bus mano spręsta.
      </p>
      <p>
        Užduočių sąlygų, sprendimų ir atsakymų autorinės teisės priklauso
        Nacionaliniam egzaminų centrui ir Nacionalinei švietimo agentūrai (LR
        švietimo, mokslo ir sporto ministerijai). Šiuo tinklapiu nepasisavinamos
        jokios autorinės teisės, informacija naudojama tik švietimo
        nekomerciniais tikslais.
      </p>
      <hr />

      {/* <p>Uždavinių kategorijų prioritetinė eilė (draft):</p>
        <p>
          Vektoriai - Stereometrija - Planimetrija - ... - Integralai -
          Išvestinės - Lygtys - ... - Išvestinės - Funkcijų grafikų eskizai - Funkcijos bendrai - ... - Misc
        </p>
        <p>
          Taip pat, jei abejoju ar jei dar nesu priskyręs kategorijos, viskas
          eina į Misc.
        </p> */}
    </div>
  );
}
