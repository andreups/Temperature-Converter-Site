"use strict";

window.onload = function() {
    const toCelstBtn = document.getElementById("toCelsBtn");
    toCelstBtn.onclick = toCelsBtnClicked;
}


function toCelsBtnClicked() {
    const fInputField = document.getElementById("fInput");
    let fInput = Number(fInputField.value);

    let celsTemp = (fInput - 32) * 5/9;

    const cResultField = document.getElementById("cResult");
    cResultField.value = celsTemp; 
}