import React from "react";
import "./AboutUs.css";

import { Card, Row, Container } from "react-bootstrap";

function AboutUs() {
  return (
    <div>
      <Container className="about">
        {/* <Row> */}
        <Card className="aboutus" expand="lg" bg="light" variant="light">
          <Card.Body className="aboutus.body">
            <Row style={{ fontSize: "30px" }}>About Us</Row>
            <Row style={{ fontSize: "18px" }}>
              Last Revised on January 22, 2019
            </Row>
            <Row style={{ fontSize: "15px" }}>
              Expedia is one of the fastest growing online travel portals in
              Asia, offering travellers an extensive selection of hotels,
              activities and travel services to meet every budget and activities
              of every kind at competitive rates. With over hundreds of
              thousands of hotel partners worldwide and a comprehensive offering
              of flight inventory made available on the website, travellers can
              book everything they need for a holiday - rooms to meet every
              budget, activities of every kind and travel services to
              complement. This website is operated by BEX Travel Asia Pte. Ltd.,
              (“BEX Travel”), a Singapore entity (UEN 201113337M), with its
              registered address at 8 Marina Boulevard #05-02, Marina Bay
              Financial Centre Tower 1, Singapore 018981. BEX Travel is part of
              the Expedia Group of companies. BEX Travel is licensed under the
              Travel Agents Act of Singapore (Cap. 334) under license number
              02420.
            </Row>
          </Card.Body>
        </Card>
        {/* </Row> */}
      </Container>
    </div>
  );
}

export default AboutUs;
