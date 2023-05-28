import { Image } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import pjtw from "../../assets/pjtw-logo.jpg";
import BookNowBtn from "../BookNowBtn";
import LanguageToggleBtn from "../LanguageToggleBtn";
import { useState } from "react";

function Navigation({navFontColorCode}) {
  const [navFontColor] = useState(navFontColorCode);

  console.log(navFontColor)
  return (
    <Navbar
      // bg="light"
      bg="transparent "
      expand="lg"
    >
      <Container>
        <Navbar.Brand href="/home">
          <Image
            src={pjtw}
            alt="logo of Perawan Juwita Terapi Warisan"
            thumbnail="true"
            style={{
              height: "50px",
              weight: "50px",
              alignSelf: "center",
            }}
          />
        </Navbar.Brand>
        <Navbar.Toggle
          aria-controls="basic-navbar-nav"
          style={{ borderColor: "green" }}
        />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
          </Nav>
          <Nav>
            <Nav.Link
              href="/services/all"
              style={{
                //color: "#F1DEC9", 
                color: navFontColor
              }}
            >
              SERVICES
            </Nav.Link>
            <Nav.Link
              href="#promotions"
              style={{
                //color: "#F1DEC9", 
                color: navFontColor
              }}
            >
              MONTHLY PROMOS
            </Nav.Link>
            <Nav.Link
              href="/about"
              style={{
                //color: "#F1DEC9", 
                color: navFontColor
              }}
            >
              ABOUT US
            </Nav.Link>
            <Nav.Link
              className="justify-content-end"
              href="#bottom-contact"
              style={{
                //color: "#F1DEC9", 
                color: navFontColor
              }}
            >
              CONTACT
            </Nav.Link>
            <Nav.Link
              href="/"
              style={{
                //color: "#F1DEC9", 
                color: navFontColor
              }}
            >
              SHOP
            </Nav.Link>
            <BookNowBtn text={"Book Now"} />
            <LanguageToggleBtn />
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navigation;
