//import any components needed
import React, {useState} from "react";
import {numbers} from "/Users/red/Desktop/lambda/projects/lambda-calculator/src/data"
import NumberButton from "./NumberButton";

//Import your array data to from the provided data file
const Numbers = () => {
 
  // STEP 2 - add the imported data to state
  const [numberState, setNumberState] = useState(numbers);
      /* STEP 3 - Use .map() to iterate over your array data and return a button
       component matching the name on the provided file. Pass
       it any props needed by the child component*/
  console.log(numberState);
  // const number = 11;

  return (
    <div>
{/* HELLO THERE */}
          {/* <div> {numbers.map(x => x*2)};</div> */}
          <div> {numbers.map(x => <NumberButton number={x}/>)}</div>
      
 
      
  
    </div>
  );
};

export default Numbers;