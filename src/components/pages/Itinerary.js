import React from "react";
import { Link } from "react-router-dom";
function Itinerary() {
  return (
    <div className="itinerary">
      <div
        class="row justify-content-center"
        style={{
          backgroundColor: "rgb(196, 194, 194)",
          marginTop: "0px",
          marginRight: "0px",
          marginLeft: "0px",
        }}
      >
        <div class="col-10">
          <div>
            <h4>Find your itinerary without signing in</h4>
          </div>
          <div style={{ backgroundColor: "white", padding: "30px" }}>
            Find your itinerary without signing in
            <div
              style={{
                marginTop: "15px",
              }}
            >
              <label>Email Address *</label>
            </div>
            <div>
              <input type="text"></input>
            </div>
            <div
              style={{
                marginTop: "15px",
              }}
            >
              <label>Itinerary Number *</label>
            </div>
            <div>
              <input type="number"></input>
            </div>
            <div>
              {/* <Link t0="/ForgotItenerary">Forgot your itinerary number?</Link> */}
            </div>
            <div
              style={{
                marginTop: "15px",
              }}
            >
              <button>Find Itinerary</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Itinerary;
