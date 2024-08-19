"use strict";
const inputDiv = document.getElementById("input-txt");
const operators = ["+", "-", "*", "/", "="];
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
        inputDiv.innerText += button.value;
        const getScreen = inputDiv.innerText;
        let hasError = false;
        let currentCharacter;
        let previousCharacter;
        for (let i = 0; i < getScreen.length; i++) {
            currentCharacter = getScreen[i];
            previousCharacter = getScreen[i - 1];
            if (i === 0 && operators.includes(currentCharacter)) {
                hasError = true;
                break;
            }
            if (i > 0 &&
                operators.includes(currentCharacter) &&
                operators.includes(previousCharacter)) {
                hasError = true;
                break;
            }
        }
        if (hasError) {
            inputDiv.innerText = "";
            const createAlert = document.createElement("p");
            createAlert.innerText = "Illegal action performed";
            const getDiv = document.getElementById("input-error");
            getDiv.innerHTML = "";
            getDiv.appendChild(createAlert);
            setTimeout(() => {
                inputDiv.innerText = "";
                getDiv.innerHTML = "";
            }, 3000);
        }
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
                let resultToString = result.toString();
                inputDiv.innerText = resultToString;
            }
        }
    }
});
