"use strict";
const buttons = document.querySelectorAll("button");
const inputDiv = document.getElementById("input-txt");
buttons.forEach((button) => {
    button.addEventListener("click", (event) => {
        inputDiv.innerText += button.innerText;
        event.preventDefault();
    });
});
