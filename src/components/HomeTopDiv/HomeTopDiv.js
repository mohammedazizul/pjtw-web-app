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
// import dummyImage from "../../assets/286X180.svg";
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

const HomeTopDiv = () => {
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
                // src="https://as1.ftcdn.net/v2/jpg/00/66/96/02/1000_F_66960295_g9xpjL6i0mjcyUHInPie82W663gvIwBp.jpg"
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
      {/* <ServiceInAbout /> */}
      <div className="homeServicesMainDiv">
        <Row className="d-flex justify-content-center">
          <div className="d-flex justify-content-center">
            <h1 className="home-h1">SERVICES</h1>
          </div>
        </Row>
        <Row xs={1} md={2} className="g-4">
          <Col md={4} sm={12} className="paddingTop">
            <Card className="bg-dark text-white text-center">
              <Card.Img
                // src="https://img.freepik.com/free-photo/sea-salt-towels-aroma-oil-bottles-flowers-vintage-wooden-background_1150-37681.jpg?w=1060&t=st=1684194032~exp=1684194632~hmac=31065387fe80b02f940e07a4d85a102301a8aad687f283914f8199ec1bd1bfcf"
                src={urutMelayu}
                alt="image for the service urut melayu"
              />
              <Card.ImgOverlay
                className="d-flex flex-column justify-content-end"
                style={
                  {
                    // border: "2px solid red",
                  }
                }
              >
                <Card.Title>Urut Melayu</Card.Title>

                <Card.Text>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi
                  odit porro autem inventore ducimus aliquid laborum, fugit
                  obcaecati quis molestias minus.
                </Card.Text>
                <Button className="viewMoreBtn">View more</Button>
              </Card.ImgOverlay>
            </Card>
          </Col>
          <Col md={4} sm={12} className="paddingTop">
            <Card className="bg-dark text-white text-center">
              <Card.Img
                // src="https://img.freepik.com/free-photo/sea-salt-towels-aroma-oil-bottles-flowers-vintage-wooden-background_1150-37681.jpg?w=1060&t=st=1684194032~exp=1684194632~hmac=31065387fe80b02f940e07a4d85a102301a8aad687f283914f8199ec1bd1bfcf"
                src={postNatalTreatment}
                alt="image for the service post-natal treatment"
              />
              <Card.ImgOverlay
                className="d-flex flex-column justify-content-end"
                style={
                  {
                    // border: "2px solid red",
                  }
                }
              >
                <Card.Title>Post-Natal Treatment</Card.Title>

                <Card.Text>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi
                  odit porro autem inventore ducimus aliquid laborum, fugit
                  obcaecati quis molestias minus.
                </Card.Text>
                <Button className="viewMoreBtn">View more</Button>
              </Card.ImgOverlay>
            </Card>
          </Col>
          <Col md={4} sm={12} className="paddingTop">
            <Card className="bg-dark text-white text-center">
              <Card.Img
                // src="https://img.freepik.com/free-photo/sea-salt-towels-aroma-oil-bottles-flowers-vintage-wooden-background_1150-37681.jpg?w=1060&t=st=1684194032~exp=1684194632~hmac=31065387fe80b02f940e07a4d85a102301a8aad687f283914f8199ec1bd1bfcf"
                src={postrokeTheraphy}
                alt="image for the service postroke theraphy"
              />
              <Card.ImgOverlay
                className="d-flex flex-column justify-content-end"
                style={
                  {
                    // border: "2px solid red",
                  }
                }
              >
                <Card.Title>Postroke Therapy</Card.Title>

                <Card.Text>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi
                  odit porro autem inventore ducimus aliquid laborum, fugit
                  obcaecati quis molestias minus.
                </Card.Text>
                <Button className="viewMoreBtn">View more</Button>
              </Card.ImgOverlay>
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
                  // src="https://img.freepik.com/free-vector/watercolor-wellness-spa-poster-template_23-2150322457.jpg?w=740&t=st=1684194549~exp=1684195149~hmac=26c2b072730da63c27821b6bb7438b47b6f324ad9760030ad6aa0acfbe923a45"
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
                // src="https://img.freepik.com/free-vector/hand-drawn-autumn-background_23-2148616467.jpg?w=1060&t=st=1684193697~exp=1684194297~hmac=1edf850be839492486a33625b0705ab0acc58bec35c7fac0f1d4c97d04fe1012"
                src={reviewPartOne}
                alt="background for first review slide"
              />
              <Carousel.Caption>
                <h5>First slide label</h5>
                <p>
                  Nulla vitae elit libero, a pharetra augue mollis interdum.
                </p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item className="fixed-height">
              <img
                className="d-block w-100"
                src="https://img.freepik.com/free-vector/autumn-leaves-background_23-2148619742.jpg?w=1060&t=st=1684193741~exp=1684194341~hmac=aba1fea76fcb6328f1ca932a2bbf5ad61d9e46c1d3cc3dcd74bcb6fe1e4fc088"
                alt="Second slide"
              />
              <Carousel.Caption>
                <h5>Second slide label</h5>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item className="fixed-height">
              <img
                className="d-block w-100"
                src="https://img.freepik.com/free-vector/flat-design-autumnal-wallpaper_52683-43403.jpg?w=1060&t=st=1684193805~exp=1684194405~hmac=674ad4370f0301d424d2528f2fe21fdb505c89a9829fc618aede6b7e4439c8bb"
                alt="Third slide"
              />
              <Carousel.Caption>
                <h5>Third slide label</h5>
                <p>
                  Praesent commodo cursus magna, vel scelerisque nisl
                  consectetur.
                </p>
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
                <div className="d-flex justify-content-center makeAppointDiv">
                  <a
                    className="makeAppointA makeAppointA2"
                    href="https://bit.ly/3NqgGQJ"
                    target="blank"
                  >
                    MAKE AN APPOINTMENT
                  </a>
                </div>
              </Row>
            </div>
          </div>
        </Row>
        <Row
          style={{
            // border: "3px solid blue",
          }}
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
