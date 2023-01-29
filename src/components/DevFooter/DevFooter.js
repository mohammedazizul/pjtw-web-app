import React from "react";
import "./style.css";

const DevFooter = () => {
  const version = "0.1";
  const devWebLink = "https://azizul.netlify.app/";
  const devName = "Mohammed Azizul";
  return (
    <footer className="footer-container">
      <div className="footer-copyright">
        Copyright {new Date().getFullYear()} {devName} All rights reserved.
      </div>
      <div className="footer-developer">
        Developed by:{" "}
        <a href={devWebLink} className="footer-link">
          {devName}
        </a>
      </div>
      <div className="footer-version">
        Version:{" "}
        <a href={devWebLink} className="footer-link">
          {version} (Under development)
        </a>
      </div>
    </footer>
  );
};

export default DevFooter;
