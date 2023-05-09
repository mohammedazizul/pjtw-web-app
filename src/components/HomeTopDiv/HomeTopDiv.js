import React from "react";
import "./HomeTopDiv.css";
import Navigation from "../Navigation/Navigation";

const HomeTopDiv = () => {
  return (
    <div className="bg-img">
      <div className="container">
        <Navigation />
      </div>
    </div>
  );

  // return (
  //   <Container className="pb-3">
  //     <Row>
  //       <Col sm={4}>
  //         <div className="d-flex justify-content-center HomeTopDiv-logo">
  //           <img
  //             src={pjtwLogo}
  //             alt="pjtw logo"
  //             className="img-fluid rounded HomeTopDiv-image"
  //           />
  //         </div>
  //       </Col>

  //       <Col sm={8}>
  //         <div className="d-flex justify-content-center HomeTopDiv-details">
  //           <p className="text-center HomeTopDiv-p">
  //             “Bismillahirahmanirahim… Beramalah dengan nama Tuhan mu yang maha
  //             mengetahui segala yang ghaib dan nyata. Moga beroleh manfaat dunia
  //             & akhirat…”
  //           </p>
  //         </div>
  //       </Col>
  //     </Row>
  //   </Container>
  // );
};

export default HomeTopDiv;
