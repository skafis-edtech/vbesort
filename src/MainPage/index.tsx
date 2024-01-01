import { Tab, Tabs } from "react-bootstrap";
import BioTab from "./BioTab";
import HistTab from "./HistTab";
import MathTab from "./MathTab";
import PuppTab from "./PuppTab";

function MainPage() {
  return (
    <div>
      <Tabs defaultActiveKey="math-vbe">
        <Tab
          eventKey="math-vbe"
          title="Matematikos VBE"
          style={{ marginTop: "20px" }}
        >
          <MathTab />
        </Tab>
        <Tab
          eventKey="bio-vbe"
          title="Biologijos VBE"
          style={{ marginTop: "20px" }}
        >
          <BioTab />
        </Tab>
        <Tab
          eventKey="hist-vbe"
          title="Istorijos VBE"
          style={{ marginTop: "20px" }}
        >
          <HistTab />
        </Tab>

        <Tab
          eventKey="math-pupp"
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
