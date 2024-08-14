"use strict";
const inputDiv = document.getElementById("input-txt");
const operators = ["+", "-", "*", "/"];
let result = 0;
let isNumber = false;
let currentOperator;
const clearButton = document.getElementById("clear");
clearButton.addEventListener("click", (event) => {
    event.preventDefault();
    inputDiv.innerText = "";
    return;
});
const buttons = document.querySelectorAll("button");
buttons.forEach((button) => {
    button.addEventListener("click", (event) => {
        event.preventDefault();
        inputDiv.innerText += button.innerText;
    });
});
const solveButton = document.getElementById("solve");
const calculateSum = (a, b, operator) => {
    if (operator === "+") {
        return a + b;
    }
    else if (operator === "*") {
        return a * b;
    }
    else if (operator === "/") {
        return a / b;
    }
    else if (operator === "-") {
        return a - b;
    }
};
solveButton.addEventListener("click", (event) => {
    event.preventDefault();
    let sum = inputDiv.innerHTML;
    let splitSum;
    for (let i = 0; i < operators.length; i++) {
        currentOperator = operators[i];
        splitSum = sum.split(operators[i]);
        if (splitSum[1]) {
            let num1 = parseInt(splitSum[0]);
            let removeEquals = splitSum[1].replace("=", "");
            let num2 = parseInt(removeEquals);
            let result = calculateSum(num1, num2, currentOperator);
            if (result) {
                let resultToString = result === null || result === void 0 ? void 0 : result.toString();
                inputDiv.innerText = resultToString;
            }
        }
    }
});
