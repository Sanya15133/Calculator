const inputDiv = document.getElementById("input-txt") as HTMLDivElement;

const operators = ["+", "-", "*", "/"];
let result = 0;
let isNumber = false;
let currentOperator;

const clearButton = document.getElementById("clear") as HTMLButtonElement;
clearButton.addEventListener("click", (event: Event) => {
  event.preventDefault();
  inputDiv.innerText = "";
  return;
});

const buttons = document.querySelectorAll("button");
buttons.forEach((button) => {
  button.addEventListener("click", (event: Event) => {
    event.preventDefault();
    inputDiv.innerText += button.innerText;
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

solveButton.addEventListener("click", (event: Event) => {
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
        let resultToString = result?.toString();
        inputDiv.innerText = resultToString;
      }
    }
  }
});
