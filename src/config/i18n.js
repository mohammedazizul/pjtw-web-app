import i18next from "i18next";
import { initReactI18next } from "react-i18next";
import Backend from "i18next-xhr-backend";
import LanguageDetector from "i18next-browser-languagedetector";

const fallbackLng = ["en"];
const availableLanguages = ["en", "bm"];

i18next
  .use(initReactI18next)
  .use(LanguageDetector)
  .use(Backend)
  .init({
    fallbackLng,
    detection: {
      checkWhitelist: true,
    },
    debug: false, // to see console logs
    whitelist: availableLanguages,
  });

export default i18next;
