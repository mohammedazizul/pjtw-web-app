import React from "react";
import { Col, Container, Image, Row } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHome,
  faEnvelope,
  faPhone,
  faPrint,
} from "@fortawesome/free-solid-svg-icons";
import {
  faTwitter,
  faInstagram,
  faFacebook,
  faTiktok,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import pjtw from "../assets/pjtw-logo.jpg";

const Footer = () => {
  const homeIcon = <FontAwesomeIcon icon={faHome} />;
  const envelopIcon = <FontAwesomeIcon icon={faEnvelope} />;
  const phoneIcon = <FontAwesomeIcon icon={faPhone} />;
  const printIcon = <FontAwesomeIcon icon={faPrint} />;
  const twitterIcon = <FontAwesomeIcon icon={faTwitter} />;
  const instagramIcon = <FontAwesomeIcon icon={faInstagram} />;
  const faceBookIcon = <FontAwesomeIcon icon={faFacebook} />;
  const tikTokIcon = <FontAwesomeIcon icon={faTiktok} />;
  const youtubeIcon = <FontAwesomeIcon icon={faYoutube} />;
  const date = new Date();
  const currentYear = date.getFullYear();

  return (
    <div bgColor="light" className="text-center text-lg-start text-muted">
      <section className="d-flex justify-content-center justify-content-lg-between p-4 border-bottom">
        <div className="me-5 d-none d-lg-block">
          <span>Get connected with us on social networks:</span>
        </div>

        <div>
          <a href="/" className="me-4 text-reset">
            {faceBookIcon}
          </a>
          <a href="/" className="me-4 text-reset">
            {twitterIcon}
          </a>
          <a href="/" className="me-4 text-reset">
            {instagramIcon}
          </a>
          <a href="/" className="me-4 text-reset">
            {tikTokIcon}
          </a>
          <a href="/" className="me-4 text-reset">
            {youtubeIcon}
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
                  Privacy Policy
                </a>
              </p>
              <p>
                <a href="#!" className="text-reset">
                  Terms & Conditions
                </a>
              </p>
              <p>
                <a href="#!" className="text-reset">
                  License
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
              <>{homeIcon} Subang Jaya, 47500, Malaysia</>
              <br />
              <>{envelopIcon} info@example.com</>
              <br />
              <>{phoneIcon} + 01 234 567 89</>
              <br />
              <>{printIcon} + 01 234 567 89</>
            </Col>
          </Row>
        </Container>
      </section>

      <div
        className="text-center p-4"
        style={{ backgroundColor: "rgba(0, 0, 0, 0.05)", fontSize: "14px" }}
      >
        {currentYear} © <b>Perawan Juwita Terapi Warisan</b>.
        <br /> ALL RIGHTS RESERVED. PRIVACY POLICY. TERMS & CONDITIONS.
        <br />
        <small>
          {" "}
          Developed by:{" "}
          <a className="text-reset fw-bold" href="https://azizul.netlify.app/">
            Mohammed Azizul
          </a>
        </small>
      </div>
    </div>
  );
};

export default Footer;
// REF: https://mdbootstrap.com/docs/react/navigation/footer/
