import { Tab, Tabs } from "react-bootstrap";
import BioTab from "./BioTab";
import HistTab from "./HistTab";
import MathTab from "./MathTab";
import PuppTab from "./PuppTab";
import InfoComponent from "./components/InfoComponent";
import { useLocation, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

function MainPage() {
  const [activeKey, setActiveKey] = useState<string>("math-tab");
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    setActiveKey(location.pathname.substring(1));
  }, [navigate]);

  const handleSelect = (key: any) => {
    navigate(`/${key}`);
  };

  return (
    <div>
      <InfoComponent />
      <Tabs activeKey={activeKey} onSelect={handleSelect}>
        <Tab
          eventKey="math-tab"
          title="Matematikos VBE"
          style={{ marginTop: "20px" }}
        >
          <MathTab />
        </Tab>
        <Tab
          eventKey="bio-tab"
          title="Biologijos VBE"
          style={{ marginTop: "20px" }}
        >
          <BioTab />
        </Tab>
        <Tab
          eventKey="hist-tab"
          title="Istorijos VBE"
          style={{ marginTop: "20px" }}
        >
          <HistTab />
        </Tab>

        <Tab
          eventKey="math-pupp-tab"
          title="Matematikos PUPP"
          style={{ marginTop: "20px" }}
        >
          <PuppTab />
        </Tab>
      </Tabs>
    </div>
  );
}

export default MainPage;
