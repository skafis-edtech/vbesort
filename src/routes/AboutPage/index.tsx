import { Alert } from "react-bootstrap";
import { Components } from "../../types";

const AboutPage: React.FC<Components.PageProps> = () => {
  return (
    <div style={{ overflowX: "hidden" }}>
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
      <h1 className="title">Apie</h1>
      <Alert variant="warning">
        <h5>
          Sekite šio bei kitų Skafis tinklapių statusą, naujienas bei
          bendraukite tarpusavyje{" "}
          <a href="https://www.facebook.com/share/g/GxkKxrKPeSNoM1nJ/?mibextid=K35XfP">
            Facebook grupėje
          </a>
        </h5>
        <h5>Taip pat sekite informaciją https://www.npw.lt</h5>
      </Alert>
      <Alert variant="info">
        Pagrindinis puslapis <a href="https://www.skafis.lt">skafis.lt</a>
      </Alert>
      <h3>Kontaktai</h3>
      <p>
        {" "}
        El. paštas: <a href="mailto:info@skafis.lt">info@skafis.lt</a>
      </p>
      <p>MB Skafis</p>
      <h3>Tinklapio kodas</h3>
      <p>
        <a
          href="https://github.com/skafis-edtech/vbesort"
          target="_blank"
          rel="noreferrer"
        >
          https://github.com/skafis-edtech/vbesort
        </a>
      </p>
      <p>Mielai prašome prisidėti rašant kodą!</p>
      <p>
        Mano blog'as bei daugiau įdomių dalykų čia:{" "}
        <a href="https://www.npw.lt">npw.lt</a>
      </p>
      <h3>Apie užduočių rūšiavimą ir šaltinius</h3>
      <p>
        Užduotys nesikartoja keliose kategorijose. Esant kelioms temoms viename
        uždavinyje, priskiriama tik viena kategorija. Prioritetiniai kriterijai
        nėra tiksliai apibrėžti, todėl gali būti rūšiavimo netisklumų. Jei
        tokius pastebėjote, rašykite man el. paštu.
      </p>
      <p>
        {" "}
        Užduočių šaltiniai:{" "}
        <ul>
          <li>
            VBE:{" "}
            <a
              href="https://www.nsa.smm.lt/egzaminai-ir-pasiekimu-patikrinimai/brandos-egzaminai/egzaminu-uzduotys/"
              target="_blank"
              rel="noreferrer"
            >
              https://www.nsa.smm.lt/egzaminai-ir-pasiekimu-patikrinimai/brandos-egzaminai/egzaminu-uzduotys/
            </a>
          </li>
          <li>
            2015 pakartotinės PUPP užduočių nuoroda (neveikianti tinklapyje):{" "}
            <a href="https://www.nsa.smm.lt/wp-content/uploads/2021/05/6026_2015_MAT-2_PUP.pdf">
              https://www.nsa.smm.lt/wp-content/uploads/2021/05/6026_2015_MAT-2_PUP.pdf
            </a>
          </li>
          <li>
            PUPP:{" "}
            <a
              href="https://www.nsa.smm.lt/egzaminai-ir-pasiekimu-patikrinimai/pupp/pupp-uzduotys/"
              target="_blank"
              rel="noreferrer"
            >
              https://www.nsa.smm.lt/egzaminai-ir-pasiekimu-patikrinimai/pupp/pupp-uzduotys/
            </a>
          </li>
          <li>
            https://www.nsa.smm.lt/egzaminai-ir-pasiekimu-patikrinimai/2024-2025-m-pasiekimu-patikrinimai/matematika/
          </li>
          <li>
            2019, 2020 ir 2021 metų matematikos VBE pakartotinių sesijų užduotys
            gautos iš kitų, neoficialių šaltinių.
          </li>
        </ul>
      </p>
      <p>
        Atsakymų šaltiniai:
        <ul>
          <li>
            VBE:{" "}
            <a
              href="https://www.nsa.smm.lt/egzaminai-ir-pasiekimu-patikrinimai/brandos-egzaminai/vertinimas/"
              target="_blank"
              rel="noreferrer"
            >
              https://www.nsa.smm.lt/egzaminai-ir-pasiekimu-patikrinimai/brandos-egzaminai/vertinimas/
            </a>
          </li>
          <li>
            PUPP:{" "}
            <a
              href="https://www.nsa.smm.lt/egzaminai-ir-pasiekimu-patikrinimai/pupp/vertinimo-instrukcijos/"
              target="_blank"
              rel="noreferrer"
            >
              https://www.nsa.smm.lt/egzaminai-ir-pasiekimu-patikrinimai/pupp/vertinimo-instrukcijos/
            </a>
          </li>
          <li>
            2016 metų matematikos VBE pakartotinės sesijos atsakymų nuoroda
            (neveikianti tinklapyje):{" "}
            <a href="https://www.nsa.smm.lt/wp-content/uploads/2021/03/6696_Mat_vertinimas_II-2016-07_11-red.pdf">
              https://www.nsa.smm.lt/wp-content/uploads/2021/03/6696_Mat_vertinimas_II-2016-07_11-red.pdf
            </a>
          </li>
          <li>
            2020 metų matematikos VBE pakartotinės sesijos, 2022 PUPP bei 2023
            metų PUPP atsakymai gauti iš kitų, neoficialių šaltinių.
          </li>
          <li>
            2023 metų I srauto PUPP 18 užd. vertinimo instrukcijoje klaida, buvo
            parašyta atsakymas B, nors turėtų būti D.
          </li>
        </ul>
      </p>
      <a href="https://www.nsa.smm.lt/egzaminai-ir-pasiekimu-patikrinimai/2024-2025-m-pasiekimu-patikrinimai/lietuviu-kalba/">
        https://www.nsa.smm.lt/egzaminai-ir-pasiekimu-patikrinimai/2024-2025-m-pasiekimu-patikrinimai/lietuviu-kalba/
      </a>
      <p>
        Užduočių sąlygų, sprendimų ir atsakymų autorinės teisės priklauso
        Nacionaliniam egzaminų centrui ir Nacionalinei švietimo agentūrai (LR
        švietimo, mokslo ir sporto ministerijai). Šiuo tinklapiu nepasisavinamos
        jokios autorinės teisės, informacija naudojama tik švietimo tikslais.
        Kilus neaiškumams, klausimams ar norint pareikšti priekaištus, prašome
        kreiptis el. paštu <a href="mailto:info@skafis.lt">info@skafis.lt</a>
      </p>
      <h3>Privatumo politika</h3>
      <p>
        Šis puslapis naudoja Google Analytics bei saugo tinklapio informaciją
        Jūsų įrenginyje, naudodamiesi šiuo tinklapiu Jūs sutinkate su Google
        Analytics nuostatais bei informacijos išsaugojimu Jūsų įrenginyje.
      </p>
      <p>
        Renkama informacija tik tinklapio gyvybingumo sekimo tikslais bei dėl
        Jūsų patogesnio tinklapio naudojimo.
      </p>
      <ul>
        <li>
          <strong>Google Analytics Privacy Overview</strong>:{" "}
          <a href="https://policies.google.com/technologies/partner-sites">
            https://policies.google.com/technologies/partner-sites
          </a>
        </li>
        <li>
          <strong>Google Analytics Terms of Service</strong>:{" "}
          <a href="https://marketingplatform.google.com/about/analytics/terms/">
            https://marketingplatform.google.com/about/analytics/terms/
          </a>
        </li>
        <li>
          <strong>Google's Privacy Policy</strong>:{" "}
          <a href="https://policies.google.com/privacy">
            https://policies.google.com/privacy
          </a>
        </li>
        <li>
          <strong>Google Analytics Opt-out Browser Add-on</strong>:{" "}
          <a href="https://tools.google.com/dlpage/gaoptout">
            https://tools.google.com/dlpage/gaoptout
          </a>
        </li>
        <li>
          <strong>Google Analytics Help Center</strong>:{" "}
          <a href="https://support.google.com/analytics">
            https://support.google.com/analytics
          </a>
        </li>
        <li>
          <strong>Google Analytics Cookie Usage</strong>:{" "}
          <a href="https://developers.google.com/analytics/devguides/collection/analyticsjs/cookie-usage">
            https://developers.google.com/analytics/devguides/collection/analyticsjs/cookie-usage
          </a>
        </li>
      </ul>
      <p>
        Įrenginyje (localStorage) išsaugoma: dienos ar naktinis rėžimas
        pasirinktas, pasirinkta maišyti ar nemaišyti užduočių, kurių metų
        matematikos VBE užduotys pasirinktos rodyti, kokia sugeneruota užduočių
        sąrašo nuoroda.
      </p>
    </div>
  );
};

export default AboutPage;
