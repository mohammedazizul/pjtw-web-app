import "bootstrap/dist/css/bootstrap.min.css";
import pjtw from "./assets/pjtw-logo.jpg";
import { Button, Image } from "react-bootstrap";
import { useTranslation } from "react-i18next";
import i18next from "i18next";

function App() {
  const { t } = useTranslation();
  return (
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
      <Image
        src={pjtw}
        alt="logo of Perawan Juwita Terapi Warisan"
        thumbnail="true"
        style={{
          height: "250px",
          weight: "250px",
        }}
      />
      <div
        style={{
          color: "#03755B",
          fontFamily: "monospace",
          padding: "10px",
        }}
      >
        <h3>{t("sample_txt")}</h3>
        <Button
          variant="outline-secondary"
          onClick={() => i18next.changeLanguage("en")}
        >
          English
        </Button>
        <Button
          style={{
            marginLeft: "10px",
          }}
          variant="outline-secondary"
          onClick={() => i18next.changeLanguage("bm")}
        >
          Malay
        </Button>
      </div>
    </div>
  );
}

export default App;
