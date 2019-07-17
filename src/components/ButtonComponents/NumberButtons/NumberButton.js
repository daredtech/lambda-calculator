import React from "react";

const NumberButton = (props) => {
  const {number} = props;
  return (
    <div lassName="numberButton">
      {/* Display a button element rendering the data being passed down from the parent container on props */}
      <button> {number} </button>
    </div>
  );
};

export default NumberButton;