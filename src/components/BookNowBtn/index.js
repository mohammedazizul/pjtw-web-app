import React from "react";
import { Button } from "react-bootstrap";
import "./style.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBell } from "@fortawesome/free-solid-svg-icons";

const bellIcon = <FontAwesomeIcon icon={faBell} shake />;

const BookNowBtn = ({ text }) => (
  <Button variant="primary" className="custom-button" href="/services">
    {text} {bellIcon}
  </Button>
);

export default BookNowBtn;
