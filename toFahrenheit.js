"use strict";

window.onload = function() {
    const toFahrBtn = document.getElementById("toFahrBtn");
    toFahrBtn.onclick = toFahrBtnClicked;
}

function toFahrBtnClicked() {
    const cInputField = document.getElementById("cInput");
    let cInput = Number(cInputField.value);

    let fahrTemp = (cInput * 9/5) + 32;

    const fResultField = document.getElementById("fResult");
    fResultField.value = fahrTemp; 
}

