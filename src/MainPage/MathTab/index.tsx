import InfoComponent from "./InfoComponent";
import MathProblemsSection from "./MathProblemsSection";

export default function MathTab() {
  return (
    <>
      <InfoComponent />
      <MathProblemsSection />
      <p style={{ marginTop: "10px" }}>
        * 2016 metų pakartotinės sesijos atsakymų nuoroda nsa.smm.lt tinklapyje
        yra neveikianti, tačiau nuėmus "+" ženklą iš nuorodos, galima vis tiek
        viešai prieiti prie atsakymų. Štai čia tiksli nuoroda:{" "}
        <a href="https://www.nsa.smm.lt/wp-content/uploads/2021/03/6696_Mat_vertinimas_II-2016-07_11-red.pdf">
          https://www.nsa.smm.lt/wp-content/uploads/2021/03/6696_Mat_vertinimas_II-2016-07_11-red.pdf
        </a>
      </p>
      {/* <p>Uždavinių kategorijų prioritetinė eilė (draft):</p>
        <p>
          Vektoriai - Stereometrija - Planimetrija - ... - Integralai -
          Išvestinės - Lygtys - ... - Išvestinės - Funkcijų grafikų eskizai - Funkcijos bendrai - ... - Misc
        </p>
        <p>
          Taip pat, jei abejoju ar jei dar nesu priskyręs kategorijos, viskas
          eina į Misc.
        </p> */}
    </>
  );
}
