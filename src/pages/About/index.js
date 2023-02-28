import React from "react";
// import { useTranslation } from "react-i18next";
import Footer from "../../components/Footer/Footer";
import Navigation from "../../components/Navigation/Navigation";
// import ListInAbout from "../../components/ListInAbout/ListInAbout";
import VisionMission from "../../components/VisionMission/VisionMission";
import FounderSection from "../../components/FounderSection/FounderSection";
// import ServiceInAbout from "../../components/ServiceCardInAbout/ServiceInAbout";
import "./style.css";

const Index = () => {
  // const { t } = useTranslation();

  return (
    <div className="aboutDiv">
      <Navigation />
      <VisionMission />
      {/* <ListInAbout />
      <ServiceInAbout /> */}
      <FounderSection />
      <Footer />
    </div>
  );
};

export default Index;
