// ################# add event in multiple elements #################
// const allButtons = document.querySelectorAll(".multiple-buttons button");

//for of loop

// for (let button of allButtons) {
//   button.addEventListener("click", function () {
//     console.log(`${this.textContent} got clicked.`);
//   });
// }

// simple for loop
// for (let i = 0; i < allButtons.length; i++) {
//   allButtons[i].addEventListener("click", function () {
//     console.log(this.textContent,"got clicked");
//   });
// }

//forEach method
// allButtons.forEach(function (button) {
//   button.addEventListener("click", function () {
//     console.log(this.textContent, "got clicked");
//   });
// });

// ################# event object #################

//example-1

//select element
// const firstButton = document.querySelector(".multiple-buttons #one");
// console.log(firstButton);

// attached element with addEventListener method which pass event and callback function
// as an argument. And we directly define callback function during passing as an argument
// where callback function receive event object which is provided by web API.

// firstButton.addEventListener("click", function (event) {
//   console.log(event);
// });

//example-2

//select multiple element
const allButtons = document.querySelectorAll(".multiple-buttons button");
console.log(allButtons);

// adding event listener in each button element using loop
// allButtons.forEach((button) => {
//   button.addEventListener("click", (event) => {
//     console.log(event);
//   });
// });

// we receive event object during the  time of defining callback function
// that event object contain lots of properties some of them are target, currentTarget etc
// target==>element that trigger the event
// currentTarget=>element that is attached to addEventListener

//accessing property of event object

// i)currentTarget
// allButtons.forEach((button) => {
//   button.addEventListener("click", (event) => {
//     console.log(event.currentTarget);
//   });
// });

// ii)target
allButtons.forEach((button) => {
  button.addEventListener("click", (event) => {
    console.log(event.target);
  });
});
