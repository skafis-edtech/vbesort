import { ReactComponent as InfoIcon } from "../../components/info.svg";
import { Accordion, Alert, Button, Form } from "react-bootstrap";

interface YearSelectorProps {
  yearList: string[];
  setYearList: (value: string[]) => void;
  allYearList: string[];
  yearLabelStringify: (year: string) => string;
  noAnsYearList: string[];
}

const YearSelector: React.FC<YearSelectorProps> = ({
  yearList,
  setYearList,
  allYearList,
  yearLabelStringify,
  noAnsYearList,
}) => {
  const toggleYearInList = (yearToToggle: string) => {
    if (yearList.includes(yearToToggle)) {
      setYearList(yearList.filter((year) => year !== yearToToggle));
    } else {
      setYearList([...yearList, yearToToggle]);
    }
  };

  const selectAll = () => {
    setYearList(allYearList);
  };

  const clearAll = () => {
    setYearList([]);
  };

  const selectWithAns = () => {
    setYearList(allYearList.filter((year) => !noAnsYearList.includes(year)));
  };
  return (
    <Alert variant="success" style={{ marginBottom: "20px" }}>
      <Accordion>
        <Accordion.Item eventKey="yo-what-up:))">
          <Accordion.Header>
            <div>
              <InfoIcon
                style={{ height: "24px", width: "24px", margin: "10px" }}
              />
            </div>
            <h5>Pasirinkite, kurių metų matematikos VBE užduotis rodyti</h5>
          </Accordion.Header>
          <Accordion.Body>
            <div style={{ marginTop: "10px", marginBottom: "20px" }}>
              <Button style={{ margin: "10px" }} onClick={clearAll}>
                Išvalyti visus
              </Button>
              <Button style={{ margin: "10px" }} onClick={selectAll}>
                Pažymėti visus
              </Button>
              <Button style={{ margin: "10px" }} onClick={selectWithAns}>
                Tik su atsakymais (visi)
              </Button>
              <div style={{ marginTop: "20px", display: "flex" }}>
                <Form style={{ flexGrow: 3 }}>
                  {allYearList.map((year) => (
                    <Form.Check
                      style={{ width: "250px" }}
                      key={year}
                      inline
                      label={yearLabelStringify(year)}
                      checked={yearList.includes(year)}
                      onChange={() => toggleYearInList(year)}
                    />
                  ))}
                </Form>
              </div>
            </div>
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </Alert>
  );
};

export default YearSelector;
