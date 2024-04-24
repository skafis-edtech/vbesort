import { Tab, Tabs } from "react-bootstrap";
import { useLocation, useNavigate } from "react-router-dom";

export default function TabsContainer({
  MathTab,
  ListTab,
  PhysicsTab,
  PuppTab,
  BioTab,
  HistTab,
  ItTab,
  AboutTab,
  ContributeTab,
}: {
  MathTab?: React.ReactNode;
  ListTab?: React.ReactNode;
  PhysicsTab?: React.ReactNode;
  PuppTab?: React.ReactNode;
  BioTab?: React.ReactNode;
  HistTab?: React.ReactNode;
  ItTab?: React.ReactNode;
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
        eventKey="/physics"
        title="Fizikos VBE"
        style={{ marginTop: "20px" }}
      >
        {PhysicsTab}
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
      <Tab eventKey="/it-template" title="IT VBE" style={{ marginTop: "20px" }}>
        {ItTab}
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
      <Tab eventKey="/list" title="Atrinktos" style={{ marginTop: "20px" }}>
        {ListTab}
      </Tab>
    </Tabs>
  );
}
