"use strict";
const buttons = document.querySelectorAll("button");
const inputDiv = document.getElementById("input-txt");
buttons.forEach((button) => {
    button.addEventListener("click", (event) => {
        event.preventDefault();
        if (button.className === "number") {
            inputDiv.innerText += parseInt(button.value);
        }
        inputDiv.innerText += button.value;
    });
});
