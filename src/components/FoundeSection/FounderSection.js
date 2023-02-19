import React from "react";
import "./FounderSection.css";
import { Container, Row, Col } from "react-bootstrap";
import founderPic from "../../assets/muslim-girl.jpg";

const FounderSection = () => {
  return (
    <Container>
      <Row>
        <Col xs={12} md={12}>
          <div
            class="d-flex justify-content-center p-3"
            style={{ color: "#03755B" }}
          >
            <h2>The Founder</h2>
          </div>
          <hr className="pb-3 m-0" style={{ color: "#03755B" }} />
        </Col>

        <Col sm={8}>
          <div className="FounderSection-details">
            <h2 className="FounderSection-name">SHAKIRA HAMZAH</h2>
            <h4 className="FounderSection-title">
              Malay Traditional Medicine Practitioner
            </h4>
            <h4 className="FounderSection-title">
              DIRECTOR OF JUWEETAR LEGACY
            </h4>
            <p className="FounderSection-description">
              Experienced practitioners in Malay Post-Natal Care industry, Malay
              Traditional Medicine, Spa Therapy certified from Akademi Warisan
              Urut.
            </p>
            <p className="FounderSection-quote">
              “With Perawan Juwita Terapi Warisan I aim to help all women to
              give them advise and support in terms of women health care in
              traditional and spiritually practice. I believe that life
              well-being is starting from our personal health care related to
              physical &amp; mental health”- Kak Sha
            </p>
          </div>
        </Col>
        <Col sm={4}>
          <div className="d-flex justify-content-center FounderSection-details">
            <img
              src={founderPic}
              alt="Founder Shakira Hamzah"
              className="img-fluid rounded FounderSection-image"
            />
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default FounderSection;
