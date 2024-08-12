"use strict";
const buttons = document.querySelectorAll("button");
const inputDiv = document.getElementById("input-txt");
buttons.forEach((button) => {
    button.addEventListener("click", (event) => {
        event.preventDefault();
        if (button.className === "number") {
            inputDiv.innerText += parseInt(button.value);
        }
        else if (button.className === "operator" && button.value === "+") {
        }
    });
});
const addNums = (a, b) => {
    return a + b;
};
const multiplyNums = (a, b) => {
    return a * b;
};
const minusNums = (a, b) => {
    return a - b;
};
const divideNums = (a, b) => {
    return a / b;
};
