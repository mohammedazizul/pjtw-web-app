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
        <Navbar.Toggle
          aria-controls="basic-navbar-nav"
          style={{ borderColor: "green" }}
        />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            {/* <Nav.Link
              href="/home"
              style={{
                // color: "#03755B",
color: "#594545",
              }}
            >
              HOME
            </Nav.Link>
            <Nav.Link
              href="/services/all"
              style={{
                // color: "#03755B",
color: "#594545",
              }}
            >
              SERVICES
            </Nav.Link>
            <Nav.Link
              href="/"
              style={{
                // color: "#03755B",
color: "#594545",
              }}
            >
              MONTHLY PROMOS
            </Nav.Link>
            <Nav.Link
              href="/"
              style={{
                // color: "#03755B",
color: "#594545",
              }}
            >
              REVIEWS
            </Nav.Link>
            <Nav.Link
              href="/about"
              style={{
                // color: "#03755B",
color: "#594545",
              }}
            >
              ABOUT US
            </Nav.Link>
            <Nav.Link
              className="justify-content-end"
              // href="/contact"
              href="#bottom-contact"
              style={{
                // color: "#03755B",
color: "#594545",
              }}
            >
              CONTACT
            </Nav.Link>
            <Nav.Link
              href="/"
              style={{
                // color: "#03755B",
color: "#594545",
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
                // color: "#03755B",
                color: "#594545",
              }}
            >
              HOME
            </Nav.Link>
            <Nav.Link
              href="/services/all"
              style={{
                // color: "#03755B",
                color: "#594545",
              }}
            >
              SERVICES
            </Nav.Link>
            <Nav.Link
              href="/"
              style={{
                // color: "#03755B",
                color: "#594545",
              }}
            >
              MONTHLY PROMOS
            </Nav.Link>
            <Nav.Link
              href="/"
              style={{
                // color: "#03755B",
                color: "#594545",
              }}
            >
              REVIEWS
            </Nav.Link>
            <Nav.Link
              href="/about"
              style={{
                // color: "#03755B",
                color: "#594545",
              }}
            >
              ABOUT US
            </Nav.Link>
            <Nav.Link
              className="justify-content-end"
              // href="/contact"
              href="#bottom-contact"
              style={{
                // color: "#03755B",
                color: "#594545",
              }}
            >
              CONTACT
            </Nav.Link>
            <Nav.Link
              href="/"
              style={{
                // color: "#03755B",
                color: "#594545",
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
