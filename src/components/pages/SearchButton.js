import React from "react";
import { Button } from "react-bootstrap";

function SearchButton({ hotel }) {
  return (
    <div>
      <Button type="button" onClick={hotel}>
        Search
      </Button>
    </div>
  );
}

export default SearchButton;
