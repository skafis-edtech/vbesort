import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import DarkModeButton from "./DarkModeButton";
import { useNavigate } from "react-router-dom";
import { routes } from "../../routes/routes";

export default function DesktopHeader() {
  const navigate = useNavigate();
  return (
    <header>
      <Navbar style={{ boxShadow: "0 2px 8px rgba(0, 0, 0, 0.3)" }}>
        <Container>
          <Navbar.Brand onClick={() => navigate("/")}>vbesort.lt</Navbar.Brand>
          <Nav className="me-auto">
            {routes.map((route) => (
              <Nav.Link key={route.path} onClick={() => navigate(route.path)}>
                {route.title}
              </Nav.Link>
            ))}
          </Nav>
          <DarkModeButton />
        </Container>
      </Navbar>
    </header>
  );
}
