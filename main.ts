const inputDiv = document.getElementById("input-txt") as HTMLDivElement;

const operators = ["+", "-", "*", "/", "="];
let result: number = 0;
let currentOperator: string;

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
    inputDiv.innerText += button.value;
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
  let sum: string = inputDiv.innerHTML;
  let splitSum;
  for (let i = 0; i < operators.length; i++) {
    currentOperator = operators[i];
    splitSum = sum.split(operators[i]);
    if (splitSum[1]) {
      let num1: number = parseInt(splitSum[0]);
      let removeEquals = splitSum[1].replace("=", "");
      let num2: number = parseInt(removeEquals);
      let result = calculateSum(num1, num2, currentOperator);
      if (result) {
        let resultToString: string = result.toString();
        inputDiv.innerText = resultToString;
      }
    }
  }
});

const operatorButtons = document.querySelectorAll(".operator");

operatorButtons.forEach((button) => {
  button.addEventListener("click", (event: Event) => {
    event.preventDefault();
    const getScreen: string = inputDiv.innerText;
    for (let i = 0; i < operators.length; i++) {
      currentOperator = operators[i];
      const strArray = getScreen.split(operators[i]);
      console.log("strArray:", strArray);
      console.log("Checking:", strArray[0], strArray[2], strArray[3]);
      if (
        (strArray && strArray[0] === operators[i]) ||
        strArray[2] === operators[i] ||
        strArray[3] === operators[i]
      ) {
        console.log("hello");
        inputDiv.innerText = "";
        const createAlert = document.createElement("p") as HTMLParagraphElement;
        createAlert.innerText = "Illegal action performed";
        const getDiv = document.getElementById("input-error") as HTMLDivElement;
        getDiv.appendChild(createAlert);
      }
    }
  });
});
