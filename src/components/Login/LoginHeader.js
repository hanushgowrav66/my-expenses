import React from "react";
import { Navbar, Nav, Container, NavDropdown } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.css";
import "./LoginHeader.css";

function LoginHeader() {
  return (
    <div className="div-main">
      <Navbar className="navbar" bg="light" expand="lg">
        <Container>
          <Navbar.Brand>
            <h2 className="fontstyle">VTrackS</h2>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link>Home </Nav.Link>
            </Nav>
            <Nav>
              <Nav.Link
                onClick={() =>
                  alert(
                    "Plaese contact your adminstrator to create new account"
                  )
                }
              >
                SignUp
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}

export default LoginHeader;
