"use strict";
const buttons = document.querySelectorAll("button");
const inputDiv = document.getElementsByClassName("input-screen");
buttons.forEach((button) => {
    button.addEventListener("click", (event) => {
        console.log(button.innerText);
        event.preventDefault();
    });
});
