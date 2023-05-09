import React from "react";
import Footer from "../../components/Footer/Footer";
// import Navigation from "../../components/Navigation/Navigation";
import FeedbackCarousel from "../../components/FeedbackCarousel/FeedbackCarousel";
import "./style.css";
import HomeTopDiv from "../../components/HomeTopDiv/HomeTopDiv";
import ServiceInAbout from "../../components/ServiceCardInAbout/ServiceInAbout";

const Index = () => {
  return (
    <>
      {/* <Navigation /> */}
      <HomeTopDiv />
      <ServiceInAbout />
      <FeedbackCarousel />
      <Footer />
    </>
    // <div className="homeDiv">
    //   <Navigation />
    //   <HomeTopDiv />
    //   <ServiceInAbout />
    //   <FeedbackCarousel />
    //   <Footer />
    // </div>
  );
};

export default Index;
