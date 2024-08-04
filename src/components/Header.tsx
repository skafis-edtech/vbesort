import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import DarkModeButton from "./DarkModeButton";
import { useNavigate } from "react-router-dom";

export default function Header() {
  const navigate = useNavigate();
  return (
    <header>
      <Navbar style={{ boxShadow: "0 2px 8px rgba(0, 0, 0, 0.3)" }}>
        <Container>
          <Navbar.Brand onClick={() => navigate("/")}>vbesort.lt</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link onClick={() => navigate("/")}>Matematikos VBE</Nav.Link>
            <Nav.Link onClick={() => navigate("/math-pupp")}>
              Matematikos PUPP
            </Nav.Link>
            <Nav.Link onClick={() => navigate("/physics")}>
              Fizikos VBE
            </Nav.Link>
            <Nav.Link onClick={() => navigate("/bio")}>Biologijos VBE</Nav.Link>
            <Nav.Link onClick={() => navigate("/hist")}>Istorijos VBE</Nav.Link>
            <Nav.Link onClick={() => navigate("/about")}>Apie</Nav.Link>
            <Nav.Link onClick={() => navigate("/contribute")}>
              Prisidėk
            </Nav.Link>
          </Nav>
          <DarkModeButton />
        </Container>
      </Navbar>
    </header>
  );
}
