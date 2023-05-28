import React from "react";
import { Button } from "react-bootstrap";
import "./style.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBell } from "@fortawesome/free-solid-svg-icons";

const bellIcon = <FontAwesomeIcon icon={faBell} shake />;

const BookNowBtn = ({ text }) => (
  <Button
    variant="primary"
    className="book-now-button"
  >
    <a
      className="book-now-anchor"
      href="https://form.jotform.com/perawanjuwita/treatment-consent-form"
      target="blank"
    >
      {text} {bellIcon}
    </a>
  </Button>
);

export default BookNowBtn;
