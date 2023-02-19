import React from "react";
import Footer from "../../components/Footer/Footer";
import Navigation from "../../components/Navigation/Navigation";
import { useTranslation } from "react-i18next";

const Index = () => {
  const { t } = useTranslation();
  return (
    <>
      <Navigation />
      <div
        style={{
          minHeight: "75vh",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#BD7E49",
          color: "#e5e5e5",
        }}
      >
        <h2>404</h2>
        <h4>{t("oops")}</h4>
        <small>{t("not_found_text")}</small>
      </div>

      <Footer />
    </>
  );
};

export default Index;
