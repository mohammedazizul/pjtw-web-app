import React, { useState } from "react";
import { Card, Button } from "react-bootstrap";
// import placeHolderImage from "./286X180.svg";
import "./style.css";

const ServiceCardForAbout = ({ title, description, link, imageUrl }) => {
  const [showFullDescription, setShowFullDescription] = useState(false);

  const handleReadMoreClick = () => {
    setShowFullDescription(!showFullDescription);
  };

  return (
    <Card className="ServiceCard mb-2" style={{ color: "#03755B" }}>
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        {/* <Card.Img variant="top" src={placeHolderImage} /> */}
        {showFullDescription ? (
          <div>
            <Card.Text>{description}</Card.Text>
            <Button variant="warning" onClick={handleReadMoreClick}>
              Hide more
            </Button>
          </div>
        ) : (
          <div>
            <Card.Text>{description.slice(0, 500)}...</Card.Text>
            <div
              className="read-more-div d-flex justify-content-end"
              onClick={handleReadMoreClick}
            >
              Read more...
            </div>
          </div>
        )}
      </Card.Body>
      <Card.Footer>
        <Button variant="outline-info">
          <a href={link} style={{ textDecoration: "none" }}>
            Learn more
          </a>
        </Button>
      </Card.Footer>
    </Card>
  );
};

export default ServiceCardForAbout;
