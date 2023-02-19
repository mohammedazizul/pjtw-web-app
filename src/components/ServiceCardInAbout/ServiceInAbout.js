import React from "react";
import { Col, Row, Container } from "react-bootstrap";
import ServiceCardForAbout from "../ServiceCardForAbout/ServiceCardForAbout";

const ServiceInAbout = () => {
  const services = [
    {
      title: "Urut Melayu",
      description: `
        Traditional Malay Massage is also known as Urut Melayu which is involves soft-tissues and muscle manipulation of the whole body to stimulate other systems in the body such as lymphatic, circulatory and nerve systems. Such manoeuvres promote therapeutic effects such as increasing blood flow,
        relieving pain and muscle spasm and rehabilitation of the part body. It is partly spiritual in a nature, with the practitioner exclusively using their hands and fingers. Six integrated hospitals have been introduced
        in Malaysia whereby one of its objective is to provide Urut Melayu for poststroke patient.
        `,
      imageUrl: "/src/assets/286X180.svg",
      serviceLink: "/services/urut-melayu",
    },
    {
      title: "Malay Post-Natal Treatment",
      description: `
        Malay post-natal care is traditional treatment or maternal healing and energy restoration for women who have given birth throughout a specific period. It is essentially an all-encompassing process that
        aims to preserve the health and femininity of women. The healing tradition of Malay women could be aided and guided by a Malay Midwife, known locally as Bidan. The postnatal or post-partum period
        observed by the Malay Women is usually 44days or 60days. Special precautions are followed for those women who had undergone Caesarean-section (surgery) birth as compared to those with normal birth.
        This post-natal malay routine could provide confidence to navigate physical and emotional challenges and experience the dynamic achievement of maternal personal growth.
        Post-natal treatment practice during the confinement period usually involves the following:
            • Post-Natal body massage
            • Hot Press/Hot Compression
            • Body Traditional binding
            • Vaginal steam bath
            • Application of herbal paste tropically on different body parts
            • Traditionally prepared edible supplements using herbs mixture
        `,
      imageUrl: "/src/assets/home-bg.jpg",
      serviceLink: "/services/postnatal-treatment",
    },
    {
      title: "Poststroke Therapy",
      description: `
        Do you struggle with Out-of-balance sexuality Hormones? [***] Legacy therapy that has been done by Malay midwifery practices for women&#39;s internal problems related
        to estrogen hormonal imbalance. The therapy aims to treat the female vagina, avoid the problem of women sexuality desire, and increase the level of fertility in traditional ritual by involving inner lust,
        outer lust, body lust therapy. Malay midwifery believes that stable hormones start from the inner and spiritual being healthy and
        prosperous. There are some practices that need to be done especially after the end of the menstrual period and after giving birth.
        `,
      imageUrl: "/src/assets/home-bg.jpg",
      serviceLink: "/services/poststroke-therapy",
    },
  ];

  return (
    <Container>
      <Row>
        <Col xs={12} md={12}>
          <div
            class="d-flex justify-content-center p-3"
            style={{ color: "#e5e5e5" }}
          >
            <Row>
              {services.map((service, index) => (
                <Col md={4} key={index}>
                  <ServiceCardForAbout
                    title={service.title}
                    description={service.description}
                    imageUrl={service.imageUrl}
                    link={service.serviceLink}
                  />
                </Col>
              ))}
            </Row>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default ServiceInAbout;
