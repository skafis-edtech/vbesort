import { Alert, Button } from "react-bootstrap";
import usePersistentState from "../hooks";

const ListMaker: React.FC = () => {
  const [listUrl, setListUrl] = usePersistentState<string>(
    "LIST_URL",
    "https://www.vbesort.lt/#/show-list?list=1,2,3,4,5,6,7,8,9,10"
  );

  return (
    <div>
      <Alert variant="warning">
        <h5>Nauja! (Mokytojams)</h5>
        <p>
          Kurkite užduočių sąrašą, naudodamiesi mygtukais prie užduočių. Štai
          čia susigeneruoja užduočių sąrašo nuoroda:
        </p>
        <textarea readOnly rows={3} value={listUrl} style={{ width: "100%" }} />
        <Button variant="primary" style={{ margin: "10px" }}>
          Kopijuoti nuorodą
        </Button>
        <Button variant="primary" style={{ margin: "10px" }}>
          Atidaryti nuorodą
        </Button>
        <Button variant="danger" style={{ margin: "10px" }}>
          Išvalyti sąrašą
        </Button>
      </Alert>
    </div>
  );
};

export default ListMaker;
