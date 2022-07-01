import React from "react";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import "bootstrap/dist/css/bootstrap.min.css";
import logo from "../images/newslogo.jpg";

function Header() {
  return (
    <React.Fragment>
      <Navbar
        bg="dark"
        variant="dark"
        className="me-auto my-2 my-lg-0"
        style={{ maxHeight: "100px" }}
        navbarScroll
		sticky="top"
		fixed="top"
      >
        <Container fluid>
          <Navbar.Brand href="#home">
            <img
              src={logo}
              width="50"
              height="50"
              className="d-inline-block align-top"
              alt="logo"
            />
          </Navbar.Brand>
          <Navbar.Brand href="#home">OffLine and OnLine News</Navbar.Brand>

          <Navbar.Toggle />
          <Navbar.Collapse className="justify-content-end">
            <Navbar.Text>
              Signed in as: <a href="#login">Front-End Developer</a>
            </Navbar.Text>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </React.Fragment>
  );
}

export default Header;
