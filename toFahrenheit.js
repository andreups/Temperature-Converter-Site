"use strict";

window.onload = function() {
    // Link convert button to JavaScript event
    const toFahrBtn = document.getElementById("toFahrBtn");
    toFahrBtn.onclick = toFahrBtnClicked;
}

function toFahrBtnClicked() {
    // Extract Celsius input from cInput field
    const cInputField = document.getElementById("cInput");
    let cInput = Number(cInputField.value);
    
    // Calculate temperature in Fahrenheit from Celsius input
    let fahrTemp = (cInput * 9/5) + 32;

    // Assign result field and display in html field.
    const fResultField = document.getElementById("fResult");
    fResultField.value = fahrTemp.toFixed(2); 
}

