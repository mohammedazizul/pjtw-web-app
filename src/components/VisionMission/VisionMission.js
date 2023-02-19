import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const VisionMission = () => {
  return (
    <Container>
      <Row>
        <Col xs={12} md={12}>
          <div
            class="d-flex justify-content-center p-3"
            style={{ color: "#03755B" }}
          >
            <h2>Our Vision And Mission</h2>
          </div>
          <hr className="pb-3 m-0" style={{ color: "#03755B" }} />
        </Col>
        <Col xs={12} md={12}>
          <p className="text-justify" style={{ color: "#e5e5e5" }}>
            The leading brand in providing Malay Traditional Concept Spa/Mobile
            Spa Therapy &amp; Post-Natal Care in Malaysia and globally. Our goal
            is to dignify and maintain the authenticity of Malay Traditional
            Medicine identity without mixing it with other medical
            practitioners. We deliver standard treatment at a reasonable,
            affordable price. Specialist in malay traditional massage known as
            Urut Melayu, malay post-natal treatment and provide treatment for
            poststroke patients.
          </p>
          <p className="text-justify" style={{ color: "#e5e5e5" }}>
            To guide and active support role in traditional malay post-natal
            care to preserve health and healing of the physical and mental
            health and also to prevent postpartum depression and anxiety by
            specific diet and treatment for life well-being.
          </p>
        </Col>
      </Row>
    </Container>
  );
};

export default VisionMission;
