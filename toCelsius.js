"use strict";

window.onload = function() {
    // Link convert button to JavaScript event
    const toCelstBtn = document.getElementById("toCelsBtn");
    toCelstBtn.onclick = toCelsBtnClicked;
}


function toCelsBtnClicked() {
    // Extract Fahrenheit input from fInput field
    const fInputField = document.getElementById("fInput");
    let fInput = Number(fInputField.value);

    // Calculate temperature in Celsius from Fahrenheit input
    let celsTemp = (fInput - 32) * 5/9;

    // Assign result field and display in html field.
    const cResultField = document.getElementById("cResult");
    cResultField.value = celsTemp.toFixed(2); 
}