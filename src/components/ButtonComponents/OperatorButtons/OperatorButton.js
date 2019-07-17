import React from "react";

const OperatorButton = (pros) => {
  const {operator} = pros;
  return (
    <div nameClass='operatorButton'>
      {/* Display a button element rendering the data being passed down from the parent container on props */}
      <button> {operator} </button>
    </div>
  );
};
export default OperatorButton;