// keypress event
//example: display what key we pressed inside body element on console screen
const body = document.body;
body.addEventListener("keypress", (event) => {
  console.log(event.key);
});

//mouseover event
const mainButton = document.querySelector(".btn-headline");
mainButton.addEventListener("mouseover", () => {
  console.log("mosuseover event occured.");
});

//mouseleave event
mainButton.addEventListener("mouseleave", () => {
  console.log("mouseleave event occured.");
});
