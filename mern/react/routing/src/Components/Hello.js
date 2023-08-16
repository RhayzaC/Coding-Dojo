import React from "react";
import { useParams } from 'react-router-dom';

function Hello() {
  const { word } = useParams();
  const displayedWord = word || 'hello';

  return (
    <div
      className="d-flex justify-content-center align-items-center p-3"
      style={{ height: "300px" }}
    >
      <h1 style={{ color: "lightgreen" }}>The word is: {displayedWord}</h1>
    </div>
  );
  };

export default Hello;