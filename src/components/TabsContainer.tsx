import { Tab, Tabs } from "react-bootstrap";
import { useLocation, useNavigate } from "react-router-dom";

export default function TabsContainer({
  MathTab,
  PuppTab,
  BioTab,
  HistTab,
  AboutTab,
  ContributeTab,
}: {
  MathTab?: React.ReactNode;
  PuppTab?: React.ReactNode;
  BioTab?: React.ReactNode;
  HistTab?: React.ReactNode;
  AboutTab?: React.ReactNode;
  ContributeTab?: React.ReactNode;
}) {
  const navigate = useNavigate();
  const location = useLocation();

  const handleSelect = (key: any) => {
    navigate(key);
  };

  return (
    <Tabs activeKey={location.pathname} onSelect={handleSelect}>
      <Tab eventKey="/" title="Matematikos VBE" style={{ marginTop: "20px" }}>
        {MathTab}
      </Tab>
      <Tab
        eventKey="/math-pupp"
        title="Matematikos PUPP"
        style={{ marginTop: "20px" }}
      >
        {PuppTab}
      </Tab>
      <Tab eventKey="/bio" title="Biologijos VBE" style={{ marginTop: "20px" }}>
        {BioTab}
      </Tab>
      <Tab eventKey="/hist" title="Istorijos VBE" style={{ marginTop: "20px" }}>
        {HistTab}
      </Tab>
      <Tab eventKey="/about" title="Apie" style={{ marginTop: "20px" }}>
        {AboutTab}
      </Tab>
      <Tab
        eventKey="/contribute"
        title="Prisidėk"
        style={{ marginTop: "20px" }}
      >
        {ContributeTab}
      </Tab>
    </Tabs>
  );
}
