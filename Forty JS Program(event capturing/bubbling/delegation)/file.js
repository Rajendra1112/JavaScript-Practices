//event capturing
// const childCapture = document.querySelector(".child");
// childCapture.addEventListener(
//   "click",
//   () => {
//     console.log("child element capture");
//   },
//   true
// );

// const parentCapture = document.querySelector(".parent");
// parentCapture.addEventListener(
//   "click",
//   () => {
//     console.log("parent element capture");
//   },
//   true
// );

// const grandparentCapture = document.querySelector(".grandparent");
// grandparentCapture.addEventListener(
//   "click",
//   () => {
//     console.log("grandparent element capture");
//   },
//   true
// );

// const bodyCapture = document.querySelector("body");
// bodyCapture.addEventListener(
//   "click",
//   () => {
//     console.log("body element capture");
//   },
//   true
// );

//event bubbling
// const child = document.querySelector(".child");
// child.addEventListener("click", () => {
//   console.log("you click child element");
// });

// const parent = document.querySelector(".parent");
// parent.addEventListener("click", () => {
//   console.log("you click parent element");
// });

// const grandparent = document.querySelector(".grandparent");
// grandparent.addEventListener("click", () => {
//   console.log("you click grandparent element");
// });

// const body = document.querySelector("body");
// body.addEventListener("click", () => {
//   console.log("you click body element");
// });

//event delegation

//adding event listener only on top most parent element
//but we can call that event on its child by clicking child element
//and the value of target of event object  will child element

//so we can access the element which trigger the event
const grandparent = document.querySelector(".grandparent");
grandparent.addEventListener("click", (e) => {
  console.log(e.target);
});
