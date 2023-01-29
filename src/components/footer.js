import React from "react";
import { Col, Container, Image, Row } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome, faEnvelope, faPhone } from "@fortawesome/free-solid-svg-icons";
import {
  faInstagram,
  faFacebook,
  faTiktok,
} from "@fortawesome/free-brands-svg-icons";
import pjtw from "../assets/pjtw-logo.jpg";
import DevFooter from "./DevFooter/DevFooter";

const Footer = () => {
  const homeIcon = <FontAwesomeIcon icon={faHome} />;
  const envelopIcon = <FontAwesomeIcon icon={faEnvelope} />;
  const phoneIcon = <FontAwesomeIcon icon={faPhone} />;
  const instagramIcon = <FontAwesomeIcon icon={faInstagram} />;
  const faceBookIcon = <FontAwesomeIcon icon={faFacebook} />;
  const tikTokIcon = <FontAwesomeIcon icon={faTiktok} />;

  return (
    <div bgColor="light" className="text-center text-lg-start text-muted">
      <section className="d-flex justify-content-center justify-content-lg-between p-4 border-bottom">
        <div className="me-5 d-none d-lg-block">
          <span>Get connected with us on social networks:</span>
        </div>

        <div>
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
      </section>

      <section className="">
        <Container className="text-center text-md-start mt-5">
          <Row className="mt-3">
            <Col md="3" lg="4" xl="3" className="mx-auto mb-4">
              <h6 className="text-uppercase fw-bold mb-4">
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
                <br />
                Perawan Juwita Terapi Warisan
              </h6>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Accusamus unde iure voluptates autem? Non rerum necessitatibus
                reiciendis sunt qui! Iste pariatur odit quam, tempore officia
                hic aperiam natus magni sequi!
              </p>
            </Col>

            <Col md="2" lg="2" xl="2" className="mx-auto mb-4">
              <h6 className="text-uppercase fw-bold mb-4">Links</h6>
              <p>
                <a href="#!" className="text-reset">
                  FAQ
                </a>
              </p>
              <p>
                <a href="#!" className="text-reset">
                  Terms & Conditions
                </a>
              </p>
              <p>
                <a href="#!" className="text-reset">
                  Privacy Policy
                </a>
              </p>
            </Col>

            {/* <Col md="3" lg="2" xl="2" className="mx-auto mb-4">
              <h6 className="text-uppercase fw-bold mb-4">Useful links</h6>
              <p>
                <a href="#!" className="text-reset">
                  Pricing
                </a>
              </p>
              <p>
                <a href="#!" className="text-reset">
                  Services
                </a>
              </p>
              <p>
                <a href="#!" className="text-reset">
                  Orders
                </a>
              </p>
              <p>
                <a href="#!" className="text-reset">
                  Help
                </a>
              </p>
            </Col> */}

            <Col md="4" lg="3" xl="3" className="mx-auto mb-md-0 mb-4">
              <h6 className="text-uppercase fw-bold mb-4">Contact</h6>
              <>{homeIcon} USJ19 Mall, Subang Jaya, Malaysia</>
              <br />
              <>{envelopIcon} info@example.com</>
              <br />
              <>{phoneIcon} +60 11 359 69 735</>
            </Col>
          </Row>
        </Container>
      </section>
      <DevFooter />
    </div>
  );
};

export default Footer;
// REF: https://mdbootstrap.com/docs/react/navigation/footer/
