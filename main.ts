const buttons = document.querySelectorAll("button");
const inputDiv = document.getElementById("input-txt") as HTMLDivElement;

const operators = ["+", "-", "*", "/", "="];

buttons.forEach((button) => {
  button.addEventListener("click", (event: Event) => {
    event.preventDefault();
    inputDiv.innerText += button.value;
    let newArr = [];
    let sum = inputDiv.innerText;
    for (let i = 0; i < operators.length; i++) {
      newArr = sum.split(operators[i]);
      console.log(newArr);
    }
  });
});
