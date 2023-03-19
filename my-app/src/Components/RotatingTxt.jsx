import React from 'react';
import { useState, useEffect } from 'react';
import './RotatingTxt.css';


const RotatingTxt = () => {
    const [wordsList, changeList] = useState([
        "Mathematician", "Programmer", "Thinker", 
        "Problem Solver", "Teacher"
    ])
    const [index, changeIndex] = useState(0);
    const [displayText, changeText] = useState("");
    const [direction, newDirection] = useState("upper");

    useEffect(() => {
        setTimeout(() => {
            let currentWord = wordsList[index%wordsList.length];
            if (direction === "upper")  {
                changeText(displayText + currentWord.charAt(displayText.length));
                RotatingTxt.time = 100;
                if (displayText === currentWord) {
                    newDirection("lower");
                }
            } else if (direction === "lower") {
                changeText(displayText.substring(0,displayText.length-2));
                RotatingTxt.time = 150;
                if (displayText === "") {
                    newDirection("upper");
                    RotatingTxt.time = 500;
                    changeIndex(index+1);
                }
            }
        }, RotatingTxt.time);
    });

    return (
        <h1 className='my-font rotatingFont'>{"A " + displayText}</h1>
    )
}

RotatingTxt.time = 100;

export default RotatingTxt;