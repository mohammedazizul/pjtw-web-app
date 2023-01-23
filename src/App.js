import "bootstrap/dist/css/bootstrap.min.css";
import pjtw from "./assets/pjtw-logo.jpg";
import Image from "react-bootstrap/Image";

function App() {
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
        <h3>Coming Soon...</h3>
      </div>
    </div>
  );
}

export default App;
