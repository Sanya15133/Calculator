"use strict";
const buttons = document.querySelectorAll("button");
const inputDiv = document.getElementById("input-txt");
buttons.forEach((button) => {
    button.addEventListener("click", (event) => {
        var _a;
        event.preventDefault();
        if (button.className === "number") {
            inputDiv.innerText += parseInt(button.value);
        }
        else if (button.className === "operator" && button.value === "+") {
            inputDiv.innerText += button.value;
            let numbers = (_a = inputDiv.innerText) === null || _a === void 0 ? void 0 : _a.split("+");
            console.log(numbers, "num");
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
