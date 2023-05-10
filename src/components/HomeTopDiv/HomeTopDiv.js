import React from "react";
import "./HomeTopDiv.css";
import Navigation from "../Navigation/Navigation";
import { Button, Col, Container, Image, Row } from "react-bootstrap";
import ServiceInAbout from "../ServiceCardInAbout/ServiceInAbout";
import FeedbackCarousel from "../FeedbackCarousel/FeedbackCarousel";
import Footer from "../Footer/Footer";
// import dummyImage from "../../assets/286X180.svg";

const HomeTopDiv = () => {
  return (
    <div className="bg-img">
      <div
        className="container"
        style={
          {
            // backgroundColor: "#F1DEC9",
          }
        }
      >
        <Navigation />
        <div
          style={{
            // margin: "0px",
            // position: "absolute",
            // top: "80%",
            // left: "50%",
            // -ms-transform: translate(-50%, -50%);
            // transform: translate(-50%, -50%);
            display: "flex",
            justifyContent: "center",
            alignItems: "flex-end",
            height: "80vh",
            // border: "3px solid green",
            marginBottom: "73px",
          }}
        >
          <Button
            style={{
              color: "#F1DEC9",
              backgroundColor: "#594545",
              padding: "10px",
              width: "20vw",
              border: "0px",
            }}
            onClick={() => alert("Sorry, the feature is under development!")}
          >
            MAKE AN APPOINTMENT
          </Button>
        </div>
      </div>
      <div
        style={{
          backgroundColor: "#F1DEC9",
          // border: "3px solid green",
          // height: "50vh",
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
              <p style={{ fontSize: "14px", textAlign: "justify" }}>
                The leading brand in providing Malay Traditional Concept
                Spa/Mobile Spa Therapy & Post-Natal Care in Malaysia and
                globally. Our goal is to dignify and maintain the authenticity
                of Malay Traditional Medicine identity without mixing it with
                other medical practitioners. We deliver standard treatment at a
                reasonable, affordable price. Specialist in malay traditional
                massage known as Urut Melayu, malay post-natal treatment and
                provide treatment for poststroke patients.
              </p>
              <p style={{ fontSize: "14px", textAlign: "justify" }}>
                To guide and active support role in traditional malay post-natal
                care to preserve health and healing of the physical and mental
                health and also to prevent postpartum depression and anxiety by
                specific diet and treatment for life well-being.
              </p>
              <Button
                style={{
                  color: "#F1DEC9",
                  backgroundColor: "#594545",
                  padding: "10px",
                  // width: "20vw",
                  border: "0px",
                }}
                onClick={() =>
                  alert("Sorry, the feature is under development!")
                }
              >
                Reserver Now
              </Button>
            </Col>
          </Row>
        </Container>
      </div>
      <ServiceInAbout />
      <FeedbackCarousel />
      <Footer />
    </div>
  );

  // return (
  //   <Container className="pb-3">
  //     <Row>
  //       <Col sm={4}>
  //         <div className="d-flex justify-content-center HomeTopDiv-logo">
  //           <img
  //             src={pjtwLogo}
  //             alt="pjtw logo"
  //             className="img-fluid rounded HomeTopDiv-image"
  //           />
  //         </div>
  //       </Col>

  //       <Col sm={8}>
  //         <div className="d-flex justify-content-center HomeTopDiv-details">
  //           <p className="text-center HomeTopDiv-p">
  //             “Bismillahirahmanirahim… Beramalah dengan nama Tuhan mu yang maha
  //             mengetahui segala yang ghaib dan nyata. Moga beroleh manfaat dunia
  //             & akhirat…”
  //           </p>
  //         </div>
  //       </Col>
  //     </Row>
  //   </Container>
  // );
};

export default HomeTopDiv;
