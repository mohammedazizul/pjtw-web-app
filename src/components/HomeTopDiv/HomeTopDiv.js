import React from "react";
import "./HomeTopDiv.css";
import Navigation from "../Navigation/Navigation";
import { Button, Col, Container, Image, Row } from "react-bootstrap";
import ServiceInAbout from "../ServiceCardInAbout/ServiceInAbout";
import FeedbackCarousel from "../FeedbackCarousel/FeedbackCarousel";
import Footer from "../Footer/Footer";
// import dummyImage from "../../assets/286X180.svg";
import logo from "../../assets/pjtw-logo.jpg";

const HomeTopDiv = () => {
  return (
    <div className="bg-img">
      <div className="container">
        <Navigation />
        <div
          style={{
            height: "80vh",
            border: "1px solid #F1DEC9",
            marginBottom: "73px",
            // filter: "blur(1px)",
            backgroundColor: "rgba(255, 255, 255, 0.3)",
          }}
        >
          <Container className="p-0 m-0">
            <Row>
              <Col md={6} sm={12}>
                <div className="d-flex justify-content-center HomeTopDiv-logo">
                  <img
                    src={logo}
                    alt="pjtw logo"
                    className="img-fluid rounded HomeTopDiv-image"
                  />
                </div>
              </Col>

              <Col md={6} sm={12}>
                <div className="d-flex justify-content-center HomeTopDiv-details">
                  <p className="text-center HomeTopDiv-p">
                    “Bismillahirahmanirahim… Beramalah dengan nama Tuhan mu yang
                    maha mengetahui segala yang ghaib dan nyata. Moga beroleh
                    manfaat dunia & akhirat…”
                  </p>
                </div>
              </Col>
            </Row>
            <Row>
              <div className="d-flex justify-content-center makeAppointDiv">
                <a
                  className="makeAppointA"
                  href="https://bit.ly/3NqgGQJ"
                  target="blank"
                >
                  MAKE AN APPOINTMENT
                </a>
              </div>
            </Row>
          </Container>
        </div>
      </div>
      <div
        style={{
          backgroundColor: "#F1DEC9",
          // border: "3px solid green",
        }}
      >
        <Container>
          <Row>
            <Col className="pt-5" md={6} sm={12}>
              <Image
                fluid
                src="https://as1.ftcdn.net/v2/jpg/00/66/96/02/1000_F_66960295_g9xpjL6i0mjcyUHInPie82W663gvIwBp.jpg"
              />
            </Col>
            <Col className="pt-5" md={6} sm={12}>
              <h1
                style={{
                  color: "#594545",
                }}
              >
                YOUR TRADITIONAL COMPANION
              </h1>
              <p
                className="pt-4"
                style={{ fontSize: "14px", textAlign: "justify" }}
              >
                The leading brand in providing Malay Traditional Concept
                Spa/Mobile Spa Therapy & Post-Natal Care in Malaysia and
                globally. Our goal is to dignify and maintain the authenticity
                of Malay Traditional Medicine identity without mixing it with
                other medical practitioners. We deliver standard treatment at a
                reasonable, affordable price. Specialist in malay traditional
                massage known as Urut Melayu, malay post-natal treatment and
                provide treatment for poststroke patients.
              </p>
              <p
                className="pt-4"
                style={{ fontSize: "14px", textAlign: "justify" }}
              >
                To guide and active support role in traditional malay post-natal
                care to preserve health and healing of the physical and mental
                health and also to prevent postpartum depression and anxiety by
                specific diet and treatment for life well-being.
              </p>
              <div className="d-flex justify-content-end pt-4">
                <Button
                  style={{
                    color: "#F1DEC9",
                    backgroundColor: "#594545",
                    padding: "10px",
                    border: "0px",
                  }}
                  onClick={() =>
                    alert("Sorry, the feature is under development!")
                  }
                >
                  Reserver Now
                </Button>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
      <ServiceInAbout />
      <FeedbackCarousel />
      <Footer />
    </div>
  );
};

export default HomeTopDiv;
