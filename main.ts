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

const solveButton = document.getElementById("solve") as HTMLButtonElement;

const calculateSum = (a: number, b: number, operator: string) => {
  if (operator === "+") {
    return a + b;
  } else if (operator === "*") {
    return a * b;
  } else if (operator === "/") {
    return a / b;
  } else if (operator === "-") {
    return a - b;
  }
};
