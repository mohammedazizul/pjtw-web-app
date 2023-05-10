import React from "react";
import { Card, Container, Carousel, Col } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import "./style.css";

const FeedbackCarousel = () => {
  const startIcon = <FontAwesomeIcon icon={faStar} color={"gold"} />;
  const feedbacks = [
    {
      id: 1,
      rating: 5,
      message: `“From when I was single, I took the Sri Pengantin package until I had one child, I still took the massage
        package with Kak Sha. Kak sha, the massage is really good, it&#39;s light on the body, it feels fresh. If you
        have sustenance every month, you want to have a massage.”`,
      customerName: "- Shamimi",
      address: "Subang Jaya",
    },
    {
      id: 2,
      rating: 5,
      message: `“Alhamdulillah very happy with the service from Perawan Juwita. 1st time using the confinement lady&#39;s
        (CL)service felt fresh and relieved. CL is also flexible and always comes on time. CL is knowledgeable in
        Malay midwifery. always share tips and advice during confinement and after confinement. It&#39;s really
        follow the malay traditional treatment”`,
      customerName: "– Fatimah",
      address: "Shah Alam",
    },
    {
      id: 3,
      rating: 5,
      message: `“Many times had repeated treatment with Perawan Juwita..took the Penutup Pantang in 2020 is the
        best treatment. Massage, body mask, sauna and the best part is tangas.. I have also had a massage and
        cupping, after the massage the body feels very light, the service is the best and the price is worth it with
        the package offered. The best thing is that you don&#39;t have to go to the spa, we just wait at home.. thank
        you sha. Inshallah I will continue to repeat and recommend you to other people”`,
      customerName: "– Juliana",
      address: "Puchong",
    },
    {
      id: 4,
      rating: 5,
      message: `“I must say thanks to akak, I got my period after 3 months my period delayed. Only 1 week after get
          massage my period finally come. Thank you so much akak”`,
      customerName: "– Kisho",
      address: "Klang",
    },
  ];

  const returnCarousel = (index, feedback) => {
    return (
      <Carousel.Item key={index}>
        <Card style={{ width: "100%" }} className="feedback-card" key={index}>
          <Card.Body key={index}>
            <Card.Title key={index + 1}>
              {/* // NEED FIX: for unique key */}
              {Array(feedback.rating).fill(startIcon)}
              {/* {startIcon} */}
              {/* {feedback.rating} */}
            </Card.Title>
            <Card.Text key={index + 2}>{feedback.message}</Card.Text>
            <Card.Footer key={index + 3}>
              <small className="text-muted" key={index + 4}>
                {feedback.customerName}, {feedback.address}
              </small>
            </Card.Footer>
          </Card.Body>
        </Card>
      </Carousel.Item>
    );
  };

  return (
    <div
      style={{
        backgroundColor: "#F1DEC9",
        // border: "3px solid green",
        // height: "50vh",
      }}
    >
      <Container className="p-5">
        <Col xs={12} md={12}>
          <div
            className="d-flex justify-content-center p-3"
            style={{ color: "#03755B" }}
          >
            <h2>Customer Feedbacks</h2>
          </div>
          <hr className="pb-3 m-0" style={{ color: "#03755B" }} />
        </Col>
        <Carousel fade>
          {feedbacks.map(
            (feedback, index) => returnCarousel(index, feedback)
            // <Carousel.Item key={index}>
            //   <Card style={{ width: "100%" }} className="feedback-card">
            //     <Card.Body>
            //       <Card.Title>
            //         {Array(feedback.rating).fill(startIcon)}
            //         {startIcon}
            //         {/* {feedback.rating} */}
            //       </Card.Title>
            //       <Card.Text>{feedback.message}</Card.Text>
            //       <Card.Footer>
            //         <small className="text-muted">
            //           {feedback.customerName}, {feedback.address}
            //         </small>
            //       </Card.Footer>
            //     </Card.Body>
            //   </Card>
            // </Carousel.Item>
          )}
        </Carousel>
      </Container>
    </div>
  );
};

export default FeedbackCarousel;
