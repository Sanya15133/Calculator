"use strict";
const buttons = document.querySelectorAll("buttons");
const inputDiv = document.getElementById("input-txt");
const operators = ["+", "-", "*", "/", "="];
let result = 0;
let isNumber = false;
let currentOperator;
const clearButton = document.getElementById("clear");
clearButton.addEventListener("click", (event) => {
    event.preventDefault();
    inputDiv.innerText = "";
});
buttons.forEach((button) => {
    button.addEventListener("click", (event) => {
        event.preventDefault();
        inputDiv.innerText += button.innerHTML;
        let sum = inputDiv.innerHTML;
        console.log(sum);
    });
});
