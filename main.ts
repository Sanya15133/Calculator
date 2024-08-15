const inputDiv = document.getElementById("input-txt") as HTMLDivElement;

const operators: string[] = ["+", "-", "*", "/", "="];
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
    const getScreen: string = inputDiv.innerText;
    let hasError = false;
    let currentCharacter: string;
    let previousCharacter: string;
    for (let i = 0; i < getScreen.length; i++) {
      currentCharacter = getScreen[i];
      previousCharacter = getScreen[i - 1];
      if (i === 0 && operators.includes(currentCharacter)) {
        hasError = true;
        break;
      }
      if (
        i > 0 &&
        operators.includes(currentCharacter) &&
        operators.includes(previousCharacter)
      ) {
        hasError = true;
        break;
      }
    }
    if (hasError) {
      inputDiv.innerText = "";
      const createAlert = document.createElement("p") as HTMLParagraphElement;
      createAlert.innerText = "Illegal action performed";
      const getDiv = document.getElementById("input-error") as HTMLDivElement;
      getDiv.innerHTML = "";
      getDiv.appendChild(createAlert);
      setTimeout(() => {
        inputDiv.innerText = "";
        getDiv.innerHTML = "";
      }, 3000);
    }
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
  let splitSum: string[];
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
