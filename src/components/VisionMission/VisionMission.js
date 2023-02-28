import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import pwjtLogo from "../../assets/pjtw-logo.jpg";
import "./VisionMission.css";

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

        <Col>
          <div class="d-flex justify-content-center p-3">
            <img className="visionMission-image" src={pwjtLogo} alt="" />
          </div>
        </Col>

        <Col xs={12} md={12}>
          <p className="text-center" style={{ color: "#e5e5e5" }}>
            Perawan Juwita Terapi Warisan was established in 2018 and is a 100%
            bumiputra owned company. We provide practices that complement Malay
            Traditional & Complimentary Medicine, namely Malay massage, the use
            of herbs, malay postnatal midwifery and blood cupping with field of
            knowledge and that cover aspects of health and healing which was
            practiced generation to generation.
          </p>
        </Col>
      </Row>
    </Container>
  );
};

export default VisionMission;
