import { useEffect, useState } from "react";
import { parseProblemFilename } from "../../misc";
import { Alert, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { Components } from "../../types";
import { useDarkMode } from "../../components/layout/DarkModeContext";

const ListPage: React.FC<Components.PageProps> = (props) => {
  const [items, setItems] = useState<string[]>([]);
  const { listUrl, setListUrl } = useDarkMode();

  useEffect(() => {
    let queryString = window.location.href.split("?")[1];
    if (!queryString) {
      queryString = listUrl.split("?")[1];
      window.history.pushState(null, "", "?" + queryString);
    }
    const urlParams = new URLSearchParams(queryString);
    const list = urlParams.get("list");
    const items = list ? list.split(" ") : [];
    setItems(items);
  }, [listUrl]);

  const clearList = () => {
    setListUrl("https://www.vbesort.lt/list?list=");
    setItems([]);
    window.history.pushState(null, "", "/list?list=");
  };

  return (
    <div>
      {items.length === 0 ? (
        <Alert variant="warning">
          Užduotys atrenkamos pagal nuorodą. Šiuo metu nuorodoje esantis sąrašas
          tuščias. Jei norite sukurti sąrašą, eikite į{" "}
          <Link to="/">puslapį "Matematikos VBE"</Link> arba{" "}
          <Link to="/math-pupp">puslapį "Matematikos PUPP"</Link>.
        </Alert>
      ) : (
        <Alert
          variant="warning"
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <div>
            Užduotys atrinktos pagal nuorodą. Ją galite kopijuoti ir dalintis.
          </div>
          {listUrl !== "https://www.vbesort.lt/list?list=" && (
            <Button variant="danger" onClick={clearList}>
              Išvalyti sukurtą sąrašą
            </Button>
          )}
        </Alert>
      )}

      {items.map((item, index) => {
        const currProblemInfo = parseProblemFilename(item);
        return (
          <div key={index}>
            <hr style={{ border: "3px solid black" }} />
            <h1>{index + 1}.</h1>
            ...
          </div>
        );
      })}
    </div>
  );
};

export default ListPage;
