import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import DarkModeButton from "./DarkModeButton";
import { useNavigate } from "react-router-dom";
import { routes } from "../../routes/routes";
import { Button, Offcanvas } from "react-bootstrap";
import { useState } from "react";
import ListIcon from "../icons/list.svg?react";

export default function DesktopHeader() {
    const navigate = useNavigate();
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

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
                                by <a href="https://www.skafis.lt">Skafis</a>
                            </em>
                        </sub>
                    </Navbar.Brand>
                    <Nav className="me-auto"></Nav>
                    <DarkModeButton />
                    <Button onClick={handleShow} style={{ marginLeft: "16px" }}>
                        <ListIcon style={{ height: "24px", width: "24px" }} />
                    </Button>
                </Container>
            </Navbar>
            <Offcanvas
                show={show}
                onHide={handleClose}
                placement="end"
                style={{ width: "fit-content", height: "fit-content" }}
            >
                <Offcanvas.Header closeButton>
                    <Offcanvas.Title>vbesort.lt</Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
                    <Nav className="flex-column">
                        {routes.map((route) => (
                            <>
                                {route.title !== "404" && (
                                    <Nav.Link
                                        key={route.path}
                                        onClick={() => {
                                            navigate(route.path);
                                            handleClose();
                                        }}
                                    >
                                        {route.title === "ATRINKTOS" ? (
                                            <Button>{route.title}</Button>
                                        ) : (
                                            route.title
                                        )}
                                    </Nav.Link>
                                )}
                            </>
                        ))}
                    </Nav>
                </Offcanvas.Body>
            </Offcanvas>
        </header>
    );
}
