const buttons = document.querySelectorAll("button");
const inputDiv = document.getElementById("input-txt") as HTMLDivElement;

buttons.forEach((button) => {
  button.addEventListener("click", (event: Event) => {
    event.preventDefault();
    inputDiv.innerText += button.value;
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
