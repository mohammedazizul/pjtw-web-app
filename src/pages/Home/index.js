import React from "react";
import { Image } from "react-bootstrap";
import Footer from "../../components/Footer/Footer";
import Navigation from "../../components/Navigation/Navigation";
import pjtw from "../../assets/pjtw-logo.jpg";
import FeedbackCarousel from "../../components/FeedbackCarousel/FeedbackCarousel";
import homeBg from "../../assets/home-bg.jpg";
import "./style.css";

const Index = () => {
  return (
    <>
      <Navigation />
      <div className="home-top-header">
        <img src={homeBg} style={{ width: "100vw" }} alt="bg" />
        <div className="home-div-top-center">
          <p>“بِسْمِ اللهِ الرَّحْمٰنِ الرَّحِيْمِ”</p>
          <p>"In the name of God, the Most Gracious, the Most Merciful."</p>
          <hr />
          <p>
            “Beramalah dengan nama Tuhan mu yang maha mengetahui segala yang
            ghaib dan nyata. Moga beroleh manfaat dunia &amp; akhirat…”
          </p>
          <p>“Moga beroleh manfaat dunia &amp; akhirat…”</p>
        </div>
        <div className="home-div-img-center">
          <Image
            className="home-div-img-center-img"
            src={pjtw}
            alt="logo of Perawan Juwita Terapi Warisan"
            thumbnail="true"
          />
        </div>
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#BD7E49",
          height: "500px",
        }}
      >
        <FeedbackCarousel />
      </div>
      <Footer />
    </>
  );
};

export default Index;
