import React, { useState } from "react";
import { Button } from "react-bootstrap";
import i18next from "i18next";

const Index = () => {
  const [language, setLanguage] = useState("en");
  const toggleLanguage = () => {
    if (language === "en") {
      setLanguage("bm");
      i18next.changeLanguage("bm");
    }
    if (language === "bm") {
      setLanguage("en");
      i18next.changeLanguage("en");
    }
  };
  return (
    <Button
      size="sm"
      variant={language === "en" ? "outline-primary" : "outline-info"}
      onClick={() => toggleLanguage()}
    >
      {language}
    </Button>
  );
};

export default Index;
