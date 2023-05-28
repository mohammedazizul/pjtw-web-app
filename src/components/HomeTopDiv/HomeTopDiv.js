import React from "react";
import "./HomeTopDiv.css";
import Navigation from "../Navigation/Navigation";
import {
  Button,
  Card,
  Carousel,
  Col,
  Container,
  Image,
  Row,
} from "react-bootstrap";
// import ServiceInAbout from "../ServiceCardInAbout/ServiceInAbout";
// import FeedbackCarousel from "../FeedbackCarousel/FeedbackCarousel";
import Footer from "../Footer/Footer";
import logo from "../../assets/pjtw-logo.jpg";
import mastercard from "../../assets/payment-logo/mastercard.png"
import visa from "../../assets/payment-logo/visa.png"
import paypal from "../../assets/payment-logo/paypal.png"
import atome from "../../assets/payment-logo/atome.png"
import promotion1 from "../../assets/home/promotion-1.png"
import promotion2 from "../../assets/home/promotion-2.png"
import urutMelayu from "../../assets/home/urut-melayu.jpg"
import postNatalTreatment from "../../assets/home/postnatal-treatment.jpg"
import postrokeTheraphy from "../../assets/home/postroke-theraphy.jpg"
import yourTraditionalCompanion from "../../assets/home/your-traditional-companion.jpg"
import reviewPartOne from "../../assets/home/review-part.jpg"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";

const HomeTopDiv = () => {
  const startIcon = <FontAwesomeIcon icon={faStar} color={"gold"} />;
  return (
    <div className="bg-img">
      <div className="container">
        <Navigation />
        <div className="homeTopMainDiv">
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
              <div className="padding-top-extra">
                <div className="d-flex justify-content-center home-make-appointment-div">
                  <a
                    className="home-make-appointment-anchor"
                    href="https://bit.ly/3NqgGQJ"
                    target="blank"
                  >
                    MAKE AN APPOINTMENT
                  </a>
                </div>
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
                src={yourTraditionalCompanion}
                alt="image for your traditional companion section"
              />
            </Col>
            <Col className="pt-5" md={6} sm={12}>
              <div className="d-flex justify-content-center">
                <h1 className="home-h1">YOUR TRADITIONAL COMPANION</h1>
              </div>
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
                <div className="d-flex justify-content-center home-make-appointment-div">
                  <a
                    className="home-make-appointment-anchor"
                    href="https://bit.ly/3NqgGQJ"
                    target="blank"
                  >
                    Reserver Now
                  </a>
              </div>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
      {/* <ServiceInAbout /> */}
      <div className="homeServicesMainDiv">
        <Row className="d-flex justify-content-center">
          <div className="d-flex justify-content-center">
            <h1 className="home-h1">SERVICES</h1>
          </div>
        </Row>
        <Row xs={1} md={2} className="g-4">
          <Col md={4} sm={12} className="paddingTop">
            <Card className="bg-dark text-white text-center" >
              <Card.Img variant="top" className="home-service-card-image"
                src={urutMelayu}
                alt="image for the service urut melayu"
              />
              {/* <Card.ImgOverlay */}
              <Card className="d-flex flex-column justify-content-end home-service-card">
                <Card.Title>Urut Melayu</Card.Title>
                <Card.Text>
                  Traditional Malay Massage is also known as Urut Melayu which is involves soft-tissues and muscle manipulation of the whole body to stimulate other systems in the body such as lymphatic, circulatory and nerve systems.
                </Card.Text>
                <Button className="service-learn-more-button">
                  <a href="/services/all#service-1#category-1" className="service-learn-more-anchor">
                    Learn more
                  </a>
                </Button>
              </Card>
            </Card>
          </Col>
          <Col md={4} sm={12} className="paddingTop">
            <Card className="bg-dark text-white text-center">
              <Card.Img variant="top" className="home-service-card-image"
                src={postNatalTreatment}
                alt="image for the service post-natal treatment"
              />
              {/* <Card.ImgOverlay */}
              <Card className="d-flex flex-column justify-content-end home-service-card">
                <Card.Title>Post-Natal Treatment</Card.Title>
                <Card.Text>
                  Malay post-natal care is traditional treatment or maternal healing and energy restoration for women who have given birth throughout a specific period.
                </Card.Text>
                <Button className="service-learn-more-button">
                  <a href="/services/all#service-1#category-1" className="service-learn-more-anchor">
                    Learn more
                  </a>
                </Button>
              </Card>
            </Card>
          </Col>
          <Col md={4} sm={12} className="paddingTop">
            <Card className="bg-dark text-white text-center" >
              <Card.Img variant="top" className="home-service-card-image"
                src={postrokeTheraphy}
                alt="image for the service postroke theraphy"
              />
              {/* <Card.ImgOverlay */}
              <Card className="d-flex flex-column justify-content-end home-service-card">
                <Card.Title>Postroke Therapy</Card.Title>
                <Card.Text>
                  Do you struggle with Out-of-balance sexuality Hormones? Legacy therapy that has been done by Malay midwifery practices for women&#39;s internal problems related to estrogen hormonal imbalance.
                </Card.Text>
                <Button className="service-learn-more-button">
                  <a href="/services" className="service-learn-more-anchor">
                    Learn more
                  </a>
                </Button>
              </Card>
            </Card>
          </Col>
        </Row>
      </div>
      <section
        className="promoMainDiv"
        id="promotions"
      // style={{
      //   border: "3px solid green",
      // }}
      >
        <Row className="d-flex justify-content-center">
          <div className="d-flex justify-content-center">
            <h1 className="home-h1">PROMOTION</h1>
          </div>
        </Row>
        <Row className="d-flex justify-content-center">
          <Col>
            <div className="d-flex justify-content-center">
              <Card style={{ width: "18rem" }}>
                <Card.Img
                  variant="top"
                  src={promotion1}
                  alt="promotion one"
                  onClick={() =>
                    alert("Sorry, the feature is under development!")
                  }
                />
                <Card.Body
                  style={{
                    backgroundColor: "#F1DEC9",
                    border: "1px solid #594545",
                    borderBottomLeftRadius: "5px",
                    borderBottomRightRadius: "5px",
                  }}
                >
                  <Button
                    className="promotionBtn"
                    onClick={() =>
                      alert("Sorry, the feature is under development!")
                    }
                  >
                    Go somewhere
                  </Button>
                </Card.Body>
              </Card>
            </div>
          </Col>
          <Col className="topPadding">
            <div className="d-flex justify-content-center">
              <Card style={{ width: "18rem" }}>
                <Card.Img
                  variant="top"
                  //src="https://img.freepik.com/free-vector/watercolor-wellness-spa-poster-template_23-2150322457.jpg?w=740&t=st=1684194549~exp=1684195149~hmac=26c2b072730da63c27821b6bb7438b47b6f324ad9760030ad6aa0acfbe923a45"
                  src={promotion2}
                  alt="promotion two"
                  onClick={() =>
                    alert("Sorry, the feature is under development!")
                  }
                />
                <Card.Body
                  style={{
                    backgroundColor: "#F1DEC9",
                    border: "1px solid #594545",
                    borderBottomLeftRadius: "5px",
                    borderBottomRightRadius: "5px",
                  }}
                >
                  <Button
                    className="promotionBtn"
                    onClick={() =>
                      alert("Sorry, the feature is under development!")
                    }
                  >
                    Go somewhere
                  </Button>
                </Card.Body>
              </Card>
            </div>
          </Col>
        </Row>
      </section>
      {/* <FeedbackCarousel /> */}
      <section className="feedbackSection" id="reviews">
        <Row className="d-flex justify-content-center">
          <div className="d-flex justify-content-center">
            <h1 className="home-h1">PEOPLE SAY ABOUT US</h1>
          </div>
        </Row>
        <Row className="d-flex justify-content-center">
          <Carousel variant="dark" className="fixed-height">
            <Carousel.Item className="fixed-height">
              <img
                className="d-block w-100 fluid"
                src={reviewPartOne}
                alt="background for first review slide"
              />
              <Carousel.Caption>
                <h5 className="textColor">First slide label {Array(5).fill(startIcon)}</h5>
                <p className="textColor">
                  “From when I was single, I took the Sri Pengantin package until I had one child, I still took the massage
                  package with Kak Sha. Kak sha, the massage is really good, it&#39;s light on the body, it feels fresh. If you
                  have sustenance every month, you want to have a massage.”
                </p>
                <h6 className="textColor">- Shamimi, Subang Jaya</h6>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item className="fixed-height">
              <img
                className="d-block w-100"
                src="https://img.freepik.com/free-vector/autumn-leaves-background_23-2148619742.jpg?w=1060&t=st=1684193741~exp=1684194341~hmac=aba1fea76fcb6328f1ca932a2bbf5ad61d9e46c1d3cc3dcd74bcb6fe1e4fc088"
                alt="Second slide"
              />
              <Carousel.Caption>
                <h5 className="textColor">Second slide label {Array(5).fill(startIcon)}</h5>
                <p className="textColor">“Alhamdulillah very happy with the service from Perawan Juwita. 1st time using the confinement lady&#39;s
                  (CL)service felt fresh and relieved. CL is also flexible and always comes on time. CL is knowledgeable in
                  Malay midwifery. always share tips and advice during confinement and after confinement. It&#39;s really
                  follow the malay traditional treatment”</p>
                <h6 className="textColor">- Fatimah, Shah Alam</h6>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item className="fixed-height">
              <img
                className="d-block w-100"
                src="https://img.freepik.com/free-vector/flat-design-autumnal-wallpaper_52683-43403.jpg?w=1060&t=st=1684193805~exp=1684194405~hmac=674ad4370f0301d424d2528f2fe21fdb505c89a9829fc618aede6b7e4439c8bb"
                alt="Third slide"
              />
              <Carousel.Caption>
                <h5 className="textColor">Third slide label {Array(5).fill(startIcon)}</h5>
                <p className="textColor">
                  “Many times had repeated treatment with Perawan Juwita..took the Penutup Pantang in 2020 is the
                  best treatment. Massage, body mask, sauna and the best part is tangas.. I have also had a massage and
                  cupping, after the massage the body feels very light, the service is the best and the price is worth it with
                  the package offered. The best thing is that you don&#39;t have to go to the spa, we just wait at home.. thank
                  you sha. Inshallah I will continue to repeat and recommend you to other people”
                </p>
                <h6 className="textColor">- Juliana, Puchong</h6>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item className="fixed-height">
              <img
                className="d-block w-100"
                src="https://img.freepik.com/free-vector/flat-design-autumnal-wallpaper_52683-43403.jpg?w=1060&t=st=1684193805~exp=1684194405~hmac=674ad4370f0301d424d2528f2fe21fdb505c89a9829fc618aede6b7e4439c8bb"
                alt="Third slide"
              />
              <Carousel.Caption>
                <h5 className="textColor">Third slide label {Array(5).fill(startIcon)}</h5>
                <p className="textColor">
                  “I must say thanks to akak, I got my period after 3 months my period delayed. Only 1 week after get
                  massage my period finally come. Thank you so much akak”
                </p>
                <h6 className="textColor">- Kisho, Klang</h6>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
        </Row>
      </section>
      <div
        style={{
          backgroundColor: "#F1DEC9",
          height: "600px",
          // border: "3px solid green",
        }}
      >
        <Row
          style={{
            // border: "3px solid red",
            height: "450px",
          }}
        >
          <div className="sixthRefFirstDiv">
            <div className="sixthRefSecondDiv">
              <Row>
                <div className="d-flex justify-content-center sixthRefThirdDiv">
                  <h1 className="home-h1 sixthRefH1">YOU OWE YOURSELF THIS MOMENT</h1>
                </div>
              </Row>
              <Row>
              <div className="padding-top-extra">
                <div className="d-flex justify-content-center home-make-appointment-div">
                    <a
                      className="home-make-appointment-anchor home-make-appointment-anchor2"
                      href="https://bit.ly/3NqgGQJ"
                      target="blank"
                    >
                      MAKE AN APPOINTMENT
                    </a>
                  </div>
              </div>
              </Row>
            </div>
          </div>
        </Row>
        <Row
          // style={{
          //   border: "3px solid blue",
          // }}
        >
          <div className="d-flex justify-content-center paymentLogoDiv">
            <Row>
              <Col>
                <Image
                  className="paymentIconImg"
                  src={mastercard}
                />
              </Col>
              <Col>
                <Image
                  className="paymentIconImg"
                  src={visa}
                />
              </Col>
              <Col>
                <Image
                  className="paymentIconImg"
                  src={paypal}
                />
              </Col>
              <Col>
                <Image
                  className="paymentIconImg"
                  src={atome}
                />
              </Col>
            </Row>
          </div>
        </Row>
      </div>
      <Footer />
    </div>
  );
};

export default HomeTopDiv;
