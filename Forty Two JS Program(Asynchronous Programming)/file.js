//lets look example of synchronous programming before understanding asynchronous programming
// console.log("script start");
// for (let i = 0; i < 1000; i++) {
//   console.log("inside for loop");
// }
// console.log("script end");

//here first line execute first then for loop execute completely only then third line execute

//Asynchronous Programmming

// 1)setTimeout function
//Example-1 of setTimeout function

// console.log("script start");
// setTimeout(() => {
//   console.log("inside setTimeout function");
// }, 10);
// console.log("script end");

//here first line run first then js throw setTimeout function to browser api and continue to
//execute third line
//all the line get executed so call stack is empty so event loop push callback function of
//setTimeout on that stack and js execute that function so callback function of setTimeout execute
//at last.

//Example-2 of setTimeout function
// console.log("script start");

//setTimeout function return id so we store it in variable
// const id = setTimeout(() => {
//   console.log("inside setTimeout function");
// }, 0);
// for (let i = 0; i < 1000; i++) {
//   console.log("hello world");
// }
// console.log("id of setTimeout is", id);
// clearTimeout(id); //to eliminate setTimeout function having that id
// console.log("script end");

//set interval
// console.log("start");
// setInterval(() => {
//   console.log("inside set interval");
// }, 2000);
// console.log("end");

//after every 2 second callback function of set interval will get called i.e. after
//every 2 sec web api provide callback function to js for execution

//example using setInterval method

//changing color of body on every 1 second
// const bodyElement = document.body;
// const button = document.querySelector("button");
// const id = setInterval(() => {
//   const red = Math.floor(Math.random() * 256);
//   const green = Math.floor(Math.random() * 256);
//   const blue = Math.floor(Math.random() * 256);
//   bodyElement.style.backgroundColor = `rgb(${red},${green},${blue})`;
// }, 1000);
// button.addEventListener("click", () => {
//   clearInterval(id);
//   button.textContent = bodyElement.style.backgroundColor;
// });

//understanding callback function

//example-1
// function myFunc1(callback) {
//   console.log("this is myFunc1");
//   callback();
// }

// function myFunc2() {
//   console.log("this is myFunc2");
// }
// myFunc1(myFunc2);

//example-2
function getTwoNumbersAndAdd(number1, number2, onSuccess, onFailure) {
  if (typeof number1 === "number" && typeof number2 === "number") {
    onSuccess(number1, number2);
  } else {
    onFailure();
  }
}

getTwoNumbersAndAdd(
  20,
  22,
  (num1, num2) => {
    console.log(num1 + num2);
  },
  () => {
    console.log("invalid input so enter numbers only");
  }
);
