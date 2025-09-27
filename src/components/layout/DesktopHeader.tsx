import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import DarkModeButton from "./DarkModeButton";
import { useNavigate } from "react-router-dom";
import { routes } from "../../routes/routes";
import { Button } from "react-bootstrap";

export default function DesktopHeader() {
  const navigate = useNavigate();
  return (
    <header>
      <Navbar style={{ boxShadow: "0 2px 8px rgba(0, 0, 0, 0.3)" }}>
        <Container>
          <Navbar.Brand onClick={() => navigate("/")}>
            <img
              src="/favicon-32x32.png"
              alt="vbesort logo"
              style={{ height: "30px", marginRight: "10px" }}
            />
            vbesort.lt{" "}
            <sub>
              <em>
                by <a href="https://simtukas.lt">Šimtukas</a>
              </em>
            </sub>
          </Navbar.Brand>
          <Nav className="me-auto">
            {routes.map((route) => (
              <div key={route.path}>
                {route.title !== "404" && (
                  <Nav.Link
                    key={route.path}
                    onClick={() => navigate(route.path)}
                  >
                    {route.title === "ATRINKTOS" || route.title === "Testai" ? (
                      <Button>{route.title}</Button>
                    ) : (
                      route.title
                    )}
                  </Nav.Link>
                )}
              </div>
            ))}
          </Nav>
          <DarkModeButton />
        </Container>
      </Navbar>
    </header>
  );
}
