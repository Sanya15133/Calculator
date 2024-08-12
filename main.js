"use strict";
const buttons = document.querySelectorAll("button");
const inputDiv = document.getElementById("input-txt");
buttons.forEach((button) => {
    button.addEventListener("click", (event) => {
        event.preventDefault();
        inputDiv.innerText += button.innerText;
    });
});
