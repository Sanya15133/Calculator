const buttons = document.querySelectorAll("button");
const inputDiv = document.getElementById("input-txt") as HTMLDivElement;

buttons.forEach((button) => {
  button.addEventListener("click", (event: Event) => {
    event.preventDefault();
    inputDiv.innerText += +button.value;
  });
});
