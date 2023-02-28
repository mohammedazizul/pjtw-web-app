import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome, faEnvelope, faPhone } from "@fortawesome/free-solid-svg-icons";
import {
  faInstagram,
  faFacebook,
  faTiktok,
} from "@fortawesome/free-brands-svg-icons";
import DevFooter from "../DevFooter/DevFooter";

const Footer = () => {
  const homeIcon = <FontAwesomeIcon icon={faHome} />;
  const envelopIcon = <FontAwesomeIcon icon={faEnvelope} />;
  const phoneIcon = <FontAwesomeIcon icon={faPhone} />;
  const instagramIcon = <FontAwesomeIcon icon={faInstagram} size="lg" />;
  const faceBookIcon = <FontAwesomeIcon icon={faFacebook} size="lg" />;
  const tikTokIcon = <FontAwesomeIcon icon={faTiktok} size="lg" />;

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
              <h6 className="text-uppercase fw-bold mb-4">
                Perawan Juwita Terapi Warisan
              </h6>
              <p style={{ fontSize: "12px", textAlign: "justify" }}>
                The leading brand in providing Malay Traditional Concept
                Spa/Mobile Spa Therapy & Post-Natal Care in Malaysia and
                globally. Our goal is to dignify and maintain the authenticity
                of Malay Traditional Medicine identity without mixing it with
                other medical practitioners. We deliver standard treatment at a
                reasonable, affordable price. Specialist in malay traditional
                massage known as Urut Melayu, malay post-natal treatment and
                provide treatment for poststroke patients.
              </p>
              <p style={{ fontSize: "12px", textAlign: "justify" }}>
                To guide and active support role in traditional malay post-natal
                care to preserve health and healing of the physical and mental
                health and also to prevent postpartum depression and anxiety by
                specific diet and treatment for life well-being.
              </p>
            </Col>

            <Col md="2" lg="2" xl="2" className="mx-auto mb-4">
              <h6 className="text-uppercase fw-bold mb-4">Links</h6>
              <p className="mb-2">
                <a
                  style={{ textDecoration: "none" }}
                  href="#!"
                  className="text-reset"
                >
                  FAQ
                </a>
              </p>
              <p className="mb-2">
                <a
                  style={{ textDecoration: "none" }}
                  href="#!"
                  className="text-reset"
                >
                  Terms & Conditions
                </a>
              </p>
              <p className="mb-2">
                <a
                  style={{ textDecoration: "none" }}
                  href="#!"
                  className="text-reset"
                >
                  Privacy Policy
                </a>
              </p>
            </Col>

            <Col
              md="4"
              lg="3"
              xl="3"
              className="mx-auto mb-md-0 mb-4"
              id="bottom-contact"
            >
              <h6 className="text-uppercase fw-bold mb-4">Contact</h6>
              <p className="mb-2">
                {homeIcon} USJ19 Mall, Subang Jaya, Malaysia
              </p>
              <p className="mb-2">{envelopIcon} info@example.com</p>
              <p className="mb-2">{phoneIcon} +60 11 359 69 735</p>
              <div>
                Follow us &nbsp;&nbsp;
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
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      <DevFooter />
    </div>
  );
};

export default Footer;
