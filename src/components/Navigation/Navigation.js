// import { Image } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
// import pjtw from "../assets/pjtw-logo.jpg";
import BookNowBtn from "../BookNowBtn";
import LanguageToggleBtn from "../LanguageToggleBtn";

function Navigation() {
  return (
    <Navbar bg="light" expand="lg">
      <Container>
        {/* <Navbar.Brand href="#home">
          <Image
            src={pjtw}
            alt="logo of Perawan Juwita Terapi Warisan"
            thumbnail="true"
            style={{
              height: "50px",
              weight: "50px",
              alignSelf: "center",
            }}
          />{" "}
        </Navbar.Brand> */}
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link
              href="/home"
              style={{
                color: "#03755B",
              }}
            >
              Home
            </Nav.Link>
            <Nav.Link
              href="/services/all"
              style={{
                color: "#03755B",
              }}
            >
              Services
            </Nav.Link>
            {/* <Nav.Link
              href="/products"
              style={{
                color: "#03755B",
              }}
            >
              Products
            </Nav.Link> */}
            <Nav.Link
              href="/about"
              style={{
                color: "#03755B",
              }}
            >
              About Us
            </Nav.Link>
            <Nav.Link
              className="justify-content-end"
              // href="/contact"
              href="#bottom-contact"
              style={{
                color: "#03755B",
              }}
            >
              Contact
            </Nav.Link>
            <BookNowBtn text={"Book Now"} />
          </Nav>
          <Nav>
            <LanguageToggleBtn />
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navigation;
