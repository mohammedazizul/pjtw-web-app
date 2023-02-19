import React from "react";
// import { useTranslation } from "react-i18next";
import Footer from "../../components/Footer/Footer";
import Navigation from "../../components/Navigation/Navigation";
import ListInAbout from "../../components/ListInAbout/ListInAbout";
import VisionMission from "../../components/VisionMission/VisionMission";
import FounderSection from "../../components/FoundeSection/FounderSection";
import ServiceInAbout from "../../components/ServiceCardInAbout/ServiceInAbout";

const Index = () => {
  // const { t } = useTranslation();

  return (
    <>
      <Navigation />
      <div
        style={{
          backgroundColor: "#BD7E49",
        }}
      >
        <VisionMission />
        <ListInAbout />
        <ServiceInAbout />
        <FounderSection />
      </div>
      <Footer />
    </>
  );
};

export default Index;
