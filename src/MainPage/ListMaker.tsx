import { Alert, Button } from "react-bootstrap";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const ListMaker: React.FC<{
  listUrl: string;
  setListUrl: (value: string) => void;
}> = ({ listUrl, setListUrl }) => {
  const clearList = () => {
    setListUrl("https://www.vbesort.lt/#/list?list=");
  };

  return (
    <div>
      <Alert variant="warning">
        <h5>Nauja! (Mokytojams)</h5>
        <p>
          Kurkite užduočių sąrašą, naudodamiesi mygtukais prie užduočių. Štai
          čia susigeneruoja užduočių sąrašo nuoroda:
        </p>
        <textarea readOnly rows={3} value={listUrl} style={{ width: "100%" }} />
        <CopyButton text={listUrl} />
        <Link to={listUrl.slice(24)}>
          <Button variant="primary" style={{ margin: "10px" }}>
            Atidaryti nuorodą
          </Button>
        </Link>

        <Button variant="danger" onClick={clearList} style={{ margin: "10px" }}>
          Išvalyti sąrašą
        </Button>
      </Alert>
    </div>
  );
};

function CopyButton({ text }: { text: string }) {
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    if (copied) {
      const timer = setTimeout(() => {
        setCopied(false);
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [copied]);

  const copyToClipboard = () => {
    navigator.clipboard.writeText(text);
    setCopied(true);
  };

  return (
    <>
      <Button
        variant="primary"
        onClick={copyToClipboard}
        style={{ margin: "10px" }}
      >
        {copied ? <em>Nukopijuota!</em> : "Kopijuoti nuorodą"}
      </Button>
    </>
  );
}

export default ListMaker;
