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
          minHeight: "100vh",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          fontFamily: "Courier New",
          borderColor: "white",
          backgroundColor: "#BD7E49",
        }}
      >
        <h1>404 {t("about_test_text")}</h1>
        <h2>{t("oops")}</h2>
        <h3>{t("not_found_text")}</h3>
      </div>
      <Footer />
    </>
  );
};

export default Index;
