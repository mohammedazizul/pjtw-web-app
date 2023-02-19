import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const ListInAbout = () => {
  const serviceList = [
    { id: 1, name: "Tradtional Malay Massage" },
    { id: 2, name: "Traditional Malay Pre & Post Natal Care" },
    { id: 3, name: "Female Health Treatment" },
    { id: 4, name: "Traditional Malay Blood Cupping" },
    { id: 5, name: "Therapy for Stroke Case" },
    { id: 6, name: "Traditional Malay Herbal Medicine" },
    { id: 7, name: "Spiritual Healing" },
    { id: 8, name: "Traditional Malay Exercise" },
  ];

  function ServiceItem(props) {
    return <li>{props.name}</li>;
  }

  return (
    <Container>
      <Row>
        <Col xs={12} md={12}>
          <div
            class="d-flex justify-content-center p-3"
            style={{ color: "#03755B" }}
          >
            <h3>Popular Services</h3>
          </div>
          <hr className="pb-3 m-0" style={{ color: "#03755B" }} />
        </Col>
        <Col xs={12} md={12}>
          <div
            class="d-flex justify-content-center p-3"
            style={{ color: "#e5e5e5" }}
          >
            We offer a range of traditional Malay spa treatments that will leave
            you feeling relaxed and rejuvenated. Here are some of our most
            popular services:
          </div>
        </Col>
        <Col xs={12} md={12}>
          <div
            class="d-flex justify-content-center p-3"
            style={{ color: "#e5e5e5" }}
          >
            <ol>
              {serviceList.map((service) => (
                <ServiceItem key={service.id} name={service.name} />
              ))}
            </ol>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default ListInAbout;
