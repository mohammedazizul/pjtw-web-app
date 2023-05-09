import { Image } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import pjtw from "../../assets/pjtw-logo.jpg";
import BookNowBtn from "../BookNowBtn";
import LanguageToggleBtn from "../LanguageToggleBtn";

function Navigation() {
  return (
    <Navbar
      // bg="light"
      bg="transparent "
      expand="lg"
    >
      <Container>
        <Navbar.Brand href="#home">
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
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            {/* <Nav.Link
              href="/home"
              style={{
                color: "#03755B",
              }}
            >
              HOME
            </Nav.Link>
            <Nav.Link
              href="/services/all"
              style={{
                color: "#03755B",
              }}
            >
              SERVICES
            </Nav.Link>
            <Nav.Link
              href="/"
              style={{
                color: "#03755B",
              }}
            >
              MONTHLY PROMOS
            </Nav.Link>
            <Nav.Link
              href="/"
              style={{
                color: "#03755B",
              }}
            >
              REVIEWS
            </Nav.Link>
            <Nav.Link
              href="/about"
              style={{
                color: "#03755B",
              }}
            >
              ABOUT US
            </Nav.Link>
            <Nav.Link
              className="justify-content-end"
              // href="/contact"
              href="#bottom-contact"
              style={{
                color: "#03755B",
              }}
            >
              CONTACT
            </Nav.Link>
            <Nav.Link
              href="/"
              style={{
                color: "#03755B",
              }}
            >
              SHOP
            </Nav.Link>
            <BookNowBtn text={"Book Now"} /> */}
          </Nav>
          <Nav>
            <Nav.Link
              href="/home"
              style={{
                color: "#03755B",
              }}
            >
              HOME
            </Nav.Link>
            <Nav.Link
              href="/services/all"
              style={{
                color: "#03755B",
              }}
            >
              SERVICES
            </Nav.Link>
            <Nav.Link
              href="/"
              style={{
                color: "#03755B",
              }}
            >
              MONTHLY PROMOS
            </Nav.Link>
            <Nav.Link
              href="/"
              style={{
                color: "#03755B",
              }}
            >
              REVIEWS
            </Nav.Link>
            <Nav.Link
              href="/about"
              style={{
                color: "#03755B",
              }}
            >
              ABOUT US
            </Nav.Link>
            <Nav.Link
              className="justify-content-end"
              // href="/contact"
              href="#bottom-contact"
              style={{
                color: "#03755B",
              }}
            >
              CONTACT
            </Nav.Link>
            <Nav.Link
              href="/"
              style={{
                color: "#03755B",
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
