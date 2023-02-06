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
        <div
          style={{
            color: "#03755B",
            fontFamily: "monospace",
            padding: "10px",
          }}
        >
          <h1>{t("product_test_text")}</h1>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Index;
