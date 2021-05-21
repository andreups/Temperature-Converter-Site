"use strict";

window.onload = function() {
    const toCelstBtn = document.getElementById("toCelsBtn");
    toCelstBtn.onclick = toCelsBtnClicked;

    const toFahrBtn = document.getElementById("toFahrBtn");
    toFahrBtn.onclick = toFahrBtnClicked;
}


function toCelsBtnClicked() {
    const fInputField = document.getElementById("fInput");
    let fInput = Number(fInputField.value);

    let celsTemp = (fInput - 32) * 5/9;

    const cResultField = document.getElementById("cResult");
    cResultField.value = celsTemp; 
}
function toFahrBtnClicked() {
    const cInputField = document.getElementById("cInput");
    let cInput = Number(cInputField.value);

    let fahrTemp = (cInput * 9/5) + 32;

    const fResultField = document.getElementById("fResult");
    fResultField.value = fahrTemp; 
}

