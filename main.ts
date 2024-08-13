const buttons = document.querySelectorAll("button");
const inputDiv = document.getElementById("input-txt") as HTMLDivElement;

buttons.forEach((button) => {
  button.addEventListener("click", (event: Event) => {
    event.preventDefault();
    if (button.className === "number") {
      inputDiv.innerText += parseInt(button.value);
    } else if (button.className === "operator" && button.value === "+") {
      inputDiv.innerText += button.value;
      let numbers = inputDiv.innerText?.split("+");
      console.log(numbers, "num");
    }
  });
});

const addNums = (a: number, b: number) => {
  return a + b;
};

const multiplyNums = (a: number, b: number) => {
  return a * b;
};

const minusNums = (a: number, b: number) => {
  return a - b;
};

const divideNums = (a: number, b: number) => {
  return a / b;
};
