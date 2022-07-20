import React from "react";
import './result.css';
import imgR from "./images/result.svg";
function Result() {
    return ( <>  <div class="result">
        <div class="result">
        <div class="result-text">
            <h5 className="Font_Lato">Result</h5>
            <h3>OSCE preparation like   you’ve never seen before </h3>
            <p>Have you struggled with preparing for OSCE’s? Not have anyone to practise with? Struggle to find scenarios to act out? Not sure how to improve? Look no more! Our revolutionary AI powered chat will help you to level up and bring out the best healthcare professional version of yourself!</p>
            <button class="bills bg-blue">SEE MORE</button>
        </div>
        <div class="result-img">
            <img src={imgR} width="700px" height="500px" alt="no img"/>
        </div>
    </div> </div></> );
}

export default Result;