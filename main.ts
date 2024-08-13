const buttons = document.querySelectorAll("buttons");

const inputDiv = document.getElementById("input-txt") as HTMLDivElement;

const operators = ["+", "-", "*", "/", "="];
let result = 0;
let isNumber = false;
let currentOperator;

const clearButton = document.getElementById("clear") as HTMLButtonElement;

clearButton.addEventListener("click", (event: Event) => {
  event.preventDefault();
  inputDiv.innerText = "";
});

buttons.forEach((button) => {
  button.addEventListener("click", (event: Event) => {
    event.preventDefault();
    inputDiv.innerText += button.innerHTML;
    let sum = inputDiv.innerHTML;
    console.log(sum);
  });
});
