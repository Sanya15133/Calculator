const buttons = document.querySelectorAll("button");
const inputDiv = document.getElementById("input-txt") as HTMLDivElement;

buttons.forEach((button) => {
  button.addEventListener("click", (event: Event) => {
    event.preventDefault();
    if (button.className === "number") {
      inputDiv.innerText += parseInt(button.value);
    }
    inputDiv.innerText += button.value;
  });
});
