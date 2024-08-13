const buttons = document.querySelectorAll("button");
const inputDiv = document.getElementById("input-txt") as HTMLDivElement;

const operators = ["+", "-", "*", "/", "="];

const clearButton = document.getElementById("clear") as HTMLButtonElement;

clearButton.addEventListener("click", (event: Event) => {
  event.preventDefault();
  inputDiv.innerText = "";
});

buttons.forEach((button) => {
  button.addEventListener("click", (event: Event) => {
    event.preventDefault();
    inputDiv.innerText += button.value;
    let newArr = [];
    let sum = inputDiv.innerText;
    for (let i = 0; i < operators.length; i++) {
      newArr = sum.split(operators[i]);
      let num1 = newArr[0];
      let num2 = newArr[1];
      console.log(num1, num2);
      let result = parseInt(num1) + operators[i] + parseInt(num2);
      console.log({ result });
    }
  });
});
