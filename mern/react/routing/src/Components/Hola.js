import React from "react";
import { useParams } from "react-router-dom";

function Hola() {
    const { word } = useParams();
    const displayedWord = word || "hello";

    const textStyle = {
        color: "blue",
        backgroundColor: "#f0394d",
        padding: "10px",
        borderRadius: "5px",
    };

    return (
        <div className="container">
            <div className="row">
                <div className="col">
                    <h1 style={textStyle}> The word is: {displayedWord}</h1>
                </div>
            </div>
        </div>
    );
}

export default Hola;
