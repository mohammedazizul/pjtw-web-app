import React from "react";
import { Button } from "react-bootstrap";
import "./style.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBell } from "@fortawesome/free-solid-svg-icons";

const bellIcon = <FontAwesomeIcon icon={faBell} shake />;

const BookNowBtn = ({ text }) => (
  <Button
    // commented for new navigation
    // style={{
    //   marginRight: "5px",
    // }}
    variant="primary"
    className="custom-button"
    href="/services/all"
  >
    {text} {bellIcon}
  </Button>
);

export default BookNowBtn;
