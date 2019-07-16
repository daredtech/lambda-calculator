//import any components needed
import React, {useState} from "react";
import {numbers} from "/Users/red/Desktop/lambda/projects/lambda-calculator/src/data"

//Import your array data to from the provided data file
const Numbers = () => {
 
  // STEP 2 - add the imported data to state
  const [numberState, setNumberState] = useState(numbers);
  
  return (
    <div>
      
      {/* STEP 3 - Use .map() to iterate over your array data and return a button
       component matching the name on the provided file. Pass
       it any props needed by the child component*/}
    </div>
  );
};

export default Numbers;