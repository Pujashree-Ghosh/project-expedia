import React, { useState } from "react";
import "./SupportFooter.css";
import { Button, Container, Row, Col, Collapse } from "react-bootstrap";
function SupportFooter() {
  const [tripPlanning, setTripPlanning] = useState(false);
  const [exploreMore, setExploreMore] = useState(false);

  return (
    <div>
      <Container calssName="supportFooter">
        <Row>
          <div className="HeadButton">
            <Button variant="outline-primary">
              Add your property to Expedia
            </Button>
          </div>{" "}
        </Row>
        <Row className="tripPlan">
          <Button
            onClick={() => setTripPlanning(!tripPlanning)}
            aria-controls="example-collapse-text"
            aria-expanded={tripPlanning}
            variant="none"
          >
            Trip Planning
          </Button>
          <Collapse in={tripPlanning}>
            <div id="example-collapse-text">
              <Row>
                <Col lg={2}>International Destinations</Col>
                <Col lg={10}>
                  Check out Expedia's featured travel destinations, which gives
                  you a full selection of hotels to suit any budget in the most
                  popular destinations in India and the world at large. Find the
                  hotel that is right for you using our star ratings, guest
                  reviews, location maps & great discount rates. Singapore
                  Hotels Hong Kong Hotels Kuala Lumpur Hotels Bangkok Hotels
                  Pattaya Hotels Paris Hotels Bali Hotels Maldives Hotels Dubai
                  Hotels New York Hotels London Hotels Mauritius Hotels
                  Melbourne Hotels Sydney Hotels Las Vegas Hotels Koh Samui
                  Hotels Krabi Hotels
                </Col>
              </Row>
              <Row>
                <Col lg={2}>Domestic Destinations</Col>
                <Col lg={10}>
                  Travelling within India? Check out our most popular domestic
                  travel destinations with great selection of hotel partners,
                  hotel reviews and our best travel deals! Goa Hotels Ooty
                  Hotels Mahabaleshwar Hotels Manali Hotels Shimla Hotels Mysore
                  Hotels Mount Abu Hotels Lonavala Hotels Chennai Hotels New
                  Delhi Hotels Bangalore Hotels Kolkata Hotels Jaipur Hotels
                  Mumbai Hotels Agra Hotels Hyderabad Hotels Udaipur Hotels Pune
                  Hotels
                </Col>
              </Row>
              <Row>
                All prices and offers are subject to change with availability.
                Hotel prices are per night based on twin share, and excludes
                taxes and fees. Flight prices are per person and includes taxes
                and fees unless otherwise stated. Flight + hotel prices are per
                person, based on twin share, and include taxes and fees unless
                otherwise stated. Offers may be discontinued without notice. ⁺
                Sample prices are “from” prices and based on rates for travel
                within the next 45 days. Sample prices are subject to conditions
                above and limited availability. Prices vary by date, length of
                stay, hotel selected, hotel room category, departure city, and
                availability. Additional restrictions including minimum stay,
                blackout dates, available room types and advance purchase may
                apply. *Savings based on all package bookings with Flight +
                Hotel on Expedia.co.in from January 2018 to December 2018, as
                compared to the price of the same components booked separately.
                Savings will vary based on origin/destination, length of trip,
                stay dates and selected travel supplier(s). Savings not
                available on all packages.
              </Row>
            </div>
          </Collapse>
        </Row>
        <Row>
          <Button
            onClick={() => setExploreMore(!exploreMore)}
            aria-controls="example-collapse-text"
            aria-expanded={exploreMore}
            variant="none"
          >
            Explore More
          </Button>
          <Collapse in={exploreMore}>
            <div id="example-collapse-text">
              <Row>
                <Col lg={2}>More Travel Options</Col>
                <Col lg={10}>
                  Travel Blog Hotels in Goa Hotels in Ooty Hotels in
                  Mahabaleshwar Hotels in Jaipur Hotels in Mumbai Hotels in
                  Bangalore Hotels in Delhi Hotels in Chennai Hotels in Pune
                  Hotels in Hyderabad Hotels in Agra Hotels in Kolkata Hotels in
                  London Hotels in Dubai Hotels in Bangkok Hotels in Pattaya
                  Hotels in Phuket Hotels in Singapore Hotels in Bali
                  Accommodation
                </Col>
              </Row>
              <Row>
                <Col lg={2}>Expedia</Col>
                <Col lg={10}>About Us Privacy Policy Terms of Use Support</Col>
              </Row>
              <Row>
                <Col lg={2}>Partner Services</Col>
                <Col lg={10}>
                  Expedia Partner Central Add a property Expedia Partner
                  Solutions API Add an Activity Travel Agencies Become an
                  Affiliate
                </Col>
              </Row>
              <Row>
                <Col lg={2}>Ecxpedia Partners</Col>
                <Col lg={10}>
                  Expedia Partner Solutions (EPS) Egencia Business Travel Visa
                  Assistance Trivago HomeAway Vrbo Trover
                </Col>
              </Row>
            </div>
          </Collapse>
        </Row>
      </Container>
    </div>
  );
}

export default SupportFooter;
