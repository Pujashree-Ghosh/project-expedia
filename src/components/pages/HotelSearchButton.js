import React from "react";
import "./searchbutton.css";
import { Button } from "react-bootstrap";
function HotelSearchButton(props) {
  return (
    <div className="hotelsearch">
      <Button type="button" onClick={props.onClick}>
        Search Hotels
      </Button>
    </div>
  );
}

export default HotelSearchButton;
