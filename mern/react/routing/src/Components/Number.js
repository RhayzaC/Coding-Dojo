import React from "react";
import { useParams } from 'react-router-dom';

function Number(){
  const {number} = useParams();
  const parsedNumber = number ? parseInt(number) : 4
  //-----------------------------------
  // III) JSX
  //-----------------------------------

  return (
    <div className= "d-flex justify-content-center align-items-center p-3"
    style={{ height: "300px" }}
    >
      <h1 style={{ color: "blue"}}>The number is: {parsedNumber} </h1>
    </div>
  );
};

export default Number;