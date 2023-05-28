import React from "react";
import { Col, Container, Image, Row } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome, faEnvelope, faPhone, faMapLocationDot } from "@fortawesome/free-solid-svg-icons";
import {
  faInstagram,
  faFacebook,
  faTiktok,
  faTelegram,
  faWaze,
  faWhatsapp
} from "@fortawesome/free-brands-svg-icons";
import DevFooter from "../DevFooter/DevFooter";
import pjtw from "../../assets/pjtw-logo.jpg"

const Footer = () => {
  const homeIcon = <FontAwesomeIcon icon={faHome} />;
  const envelopIcon = <FontAwesomeIcon icon={faEnvelope} />;
  const phoneIcon = <FontAwesomeIcon icon={faPhone} />;
  const instagramIcon = <FontAwesomeIcon icon={faInstagram} size="lg" />;
  const faceBookIcon = <FontAwesomeIcon icon={faFacebook} size="lg" />;
  const tikTokIcon = <FontAwesomeIcon icon={faTiktok} size="lg" />;
  const telegramIcon = <FontAwesomeIcon icon={faTelegram} size="lg" />;
  const wazeIcon = <FontAwesomeIcon icon={faWaze} size="lg" />;
  const mapIcon = <FontAwesomeIcon icon={faMapLocationDot} size="lg" />;
  const whatsAppIcon = <FontAwesomeIcon icon={faWhatsapp} size="lg" />;

  return (
    <div
      className="text-center text-lg-start text-muted pt-2"
      style={{
        backgroundColor: "#F5F5F5",
      }}
    >
      <section className="">
        <Container className="text-center text-md-start mt-5">
          <Row className="mt-3">
            <Col md="3" lg="4" xl="3" className="mx-auto mb-4">
              <div style={{ paddingBottom: "5px", borderBottom: "1px solid gray" }}>
                <h6 className="text-uppercase fw-bold mb-4">
                  Perawan Juwita Terapi Warisan
                </h6>
              </div>
              <div style={{ paddingTop: "15px", paddingBottom: "15px", borderBottom: "1px solid gray" }}>
                <p className="mb-2">
                  {homeIcon} E1-04-02, Tamarind Square 63000 Cyberjaya Selangor
                </p>
                <p className="mb-2">{envelopIcon}  perawanjuwita@gmail.com</p>
                <p className="mb-2">{phoneIcon} +60 11 355 86 706</p>
              </div>
              <div style={{ paddingTop: "15px" }}>
                <a
                  href="https://www.facebook.com/perawanjuwita"
                  className="me-4 text-reset"
                  target="_blank"
                  rel="noreferrer"
                >
                  {faceBookIcon}
                </a>
                <a
                  href="https://www.instagram.com/perawan_juwita"
                  className="me-4 text-reset"
                  target="_blank"
                  rel="noreferrer"
                >
                  {instagramIcon}
                </a>
                <a
                  href="https://tiktok.com/@perawanjuwita"
                  className="me-4 text-reset"
                  target="_blank"
                  rel="noreferrer"
                >
                  {tikTokIcon}
                </a>
                <a
                  href="https://t.me/perawanjuwita"
                  className="me-4 text-reset"
                  target="_blank"
                  rel="noreferrer"
                >
                  {telegramIcon}
                </a>
                <a
                  href="https://bit.ly/3NqgGQJ"
                  className="me-4 text-reset"
                  target="_blank"
                  rel="noreferrer"
                >
                  {whatsAppIcon}
                </a>
                <a
                  href="https://waze.com/ul/hw2828g93g"
                  className="me-4 text-reset"
                  target="_blank"
                  rel="noreferrer"
                >
                  {wazeIcon}
                </a>
                <a
                  href="https://maps.app.goo.gl/F39sCz3TuMxDL9u98"
                  className="me-4 text-reset"
                  target="_blank"
                  rel="noreferrer"
                >
                  {mapIcon}
                </a>
              </div>
            </Col>
            <Col md="2" lg="2" xl="2" className="mx-auto mb-4">
              <div className="">
                <Image
                  src={pjtw}
                  alt="logo of Perawan Juwita Terapi Warisan"
                  thumbnail="true"
                  style={{
                    height: "50px",
                    weight: "50px",
                    alignSelf: "center",
                  }}
                /></div>

              <p className="mb-2" >
                Perawan Juwita Terapi Warisan is located at 4th floor opposite the event hall.
              </p>
            </Col>

            <Col md="2" lg="2" xl="2" className="mx-auto mb-4">
              <h6 className="text-uppercase fw-bold mb-4">Menus</h6>
              <p className="mb-2">
                <a
                  style={{ textDecoration: "none" }}
                  href="/services/all"
                  className="text-reset"
                >
                  Services
                </a>
              </p>
              <p className="mb-2">
                <a
                  style={{ textDecoration: "none" }}
                  href="/home#promotions"
                  className="text-reset"
                >
                  Monthly Promos
                </a>
              </p>
              <p className="mb-2">
                <a
                  style={{ textDecoration: "none" }}
                  href="/shop"
                  className="text-reset"
                >
                  Shop
                </a>
              </p>
              <p className="mb-2">
                <a
                  style={{ textDecoration: "none" }}
                  href="/faq"
                  className="text-reset"
                >
                  FAQ
                </a>
              </p>
              <p className="mb-2">
                <a
                  style={{ textDecoration: "none" }}
                  href="/terms-and-conditions"
                  className="text-reset"
                >
                  Terms & Conditions
                </a>
              </p>
              <p className="mb-2">
                <a
                  style={{ textDecoration: "none" }}
                  href="/privacy-policy"
                  className="text-reset"
                >
                  Privacy Policy
                </a>
              </p>
            </Col>
            <Col md="2" lg="2" xl="2" className="mx-auto mb-4">
              <h6 className="text-uppercase fw-bold mb-4">Spa Hours</h6>
              <Row>
                <Col>Monday</Col>
                <Col>Closed</Col>
              </Row>
              <Row>
                <Col>Tuesday</Col>
                <Col>9 am - 7 pm</Col>
              </Row>
              <Row>
                <Col>Wednesday</Col>
                <Col>9 am - 7 pm</Col>
              </Row>
              <Row>
                <Col>Thursday</Col>
                <Col>9 am - 7 pm</Col>
              </Row>
              <Row>
                <Col>Friday</Col>
                <Col>9 am - 7 pm</Col>
              </Row>
              <Row>
                <Col>Saturday</Col>
                <Col>9 am - 7 pm</Col>
              </Row>
              <Row>
                <Col>Sunday</Col>
                <Col>9 am - 7 pm</Col>
              </Row>
            </Col>
          </Row>
        </Container>
      </section>
      <DevFooter />
    </div>
  );
};

export default Footer;
