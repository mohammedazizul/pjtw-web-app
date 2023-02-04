import React, { useState } from "react";
import { Card, ListGroup, ListGroupItem } from "react-bootstrap";
import "./style.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClockRotateLeft, faTag } from "@fortawesome/free-solid-svg-icons";

const Service = ({ service, categories }) => {
  const durationIcon = <FontAwesomeIcon icon={faClockRotateLeft} />;
  const priceIcon = <FontAwesomeIcon icon={faTag} />;
  const [showCategories, setShowCategories] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState(null);

  const toggleCategories = () => {
    setShowCategories(!showCategories);
    setSelectedCategory(null);
  };

  const handleCategoryClick = (index) => {
    setSelectedCategory(index);
  };

  return (
    <Card
      style={{
        width: "350px",
        margin: "20px auto",
      }}
      className="spa-service-card"
    >
      <Card.Body>
        <Card.Title
          style={{ color: "#03755B" }}
          className="spa-service-title"
          onClick={toggleCategories}
        >
          {service}
        </Card.Title>
        {showCategories ? (
          <ListGroup className="list-group-flush spa-service-list">
            {categories.map((category, index) => (
              <ListGroupItem
                key={index}
                className="spa-service-item"
                onClick={() => handleCategoryClick(index)}
              >
                <h5
                  className="spa-service-category"
                  style={{ color: "#03755B" }}
                >
                  {category.name}
                </h5>
                {selectedCategory === index ? (
                  <>
                    <p
                      className="spa-service-description"
                      style={{ color: "#03755B" }}
                    >
                      {category.description}
                    </p>
                    {/* <p className="spa-service-details">
                      Price: RM{category.price} | Duration: {category.duration}{" "}
                      mins
                    </p> */}
                    <p
                      className="spa-service-details"
                      style={{ color: "#03755B", fontWeight: "bold" }}
                    >
                      {priceIcon} RM{category.price} &nbsp;&nbsp;|&nbsp;&nbsp;{" "}
                      {durationIcon} {category.duration} mins
                    </p>
                  </>
                ) : null}
              </ListGroupItem>
            ))}
          </ListGroup>
        ) : null}
      </Card.Body>
    </Card>
  );
};

export default Service;
