import React from "react";
import "./Dummy.css";

function Responsive() {
  return (
    <>
      <div class="row">
        <div class="col-3 menu">
          <ul>
            <li>The Flight</li>
            <li>The City</li>
            <li>The Island</li>
            <li>The Food</li>
          </ul>
        </div>

        <div class="col-6">
          <h1>The City</h1>
          <p>
            Chania is the capital of the Chania region on the island of Crete.
            The city can be divided in two parts, the old town and the modern
            city.
          </p>
        </div>

        <div class="col-3 right">
          <div class="aside">
            <h2>What?</h2>
            <p>Chania is a city on the island of Crete.</p>
            <h2>Where?</h2>
            <p>Crete is a Greek island in the Mediterranean Sea.</p>
            <h2>How?</h2>
            <p>You can reach Chania airport from all over Europe.</p>
          </div>
        </div>
      </div>
    </>
  );
}
export default Responsive;
