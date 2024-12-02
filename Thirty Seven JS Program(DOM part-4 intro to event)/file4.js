//little practice with click event
const allButtons = document.querySelectorAll(".multiple-buttons button");
console.log(allButtons);
allButtons.forEach((button) => {
  button.addEventListener("click", (event) => {
    console.log(event.currentTarget);
    const btn = event.currentTarget;
    btn.style.color = "yellow";
    btn.style.backgroundColor = "black";
  });
});
