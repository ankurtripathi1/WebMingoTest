import React from "react";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import "bootstrap/dist/css/bootstrap.min.css";
import logo from "../images/newslogo.jpg";
import fblogo from "../images/fb.png";
import twitterlogo from "../images/twitter.jpg";
import linklogo from "../images/linkin.png";


function Footer() {
  return (
    <div>
      <React.Fragment>
        <Navbar
          bg="dark"
          variant="dark"
          className="me-auto my-2 my-lg-0"
          style={{ maxHeight: "100px" }}
          navbarScroll
          fixed="bottom"
        >
          <Container fluid>
            <Navbar.Brand href="#home">
              <img
                src={logo}
                width="30"
                height="30"
                className="d-inline-block align-top"
                alt="logo"
              />
            </Navbar.Brand>
            <Navbar.Brand href="#home">All Rights Resrved</Navbar.Brand>

            <Navbar.Toggle />
            <Navbar.Collapse className="justify-content-end">
              <Navbar.Text>
                Contact Us   :    
				</Navbar.Text>
				<Navbar.Text>
                <a href="#login">
                  <img
                    src={fblogo}
                    width="30"
                    height="30"
                    className="d-inline-block align-top"
                    alt="logo"
                  />
                  <img
                    src={twitterlogo}
                    width="30"
                    height="30"
                    className="d-inline-block align-top"
                    alt="logo"
                  />
                  <img
                    src={linklogo}
                    width="30"
                    height="30"
                    className="d-inline-block align-top"
                    alt="logo"
                  />
                </a>
              </Navbar.Text>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </React.Fragment>
    </div>
  );
}

export default Footer;
