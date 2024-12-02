// convert nested callbacks to flat code using Promises
const heading1 = document.querySelector(".heading1");
const heading2 = document.querySelector(".heading2");
const heading3 = document.querySelector(".heading3");
const heading4 = document.querySelector(".heading4");
const heading5 = document.querySelector(".heading5");
const heading6 = document.querySelector(".heading6");
const heading7 = document.querySelector(".heading7");

function changeTextAndColor(element, text, color, delay) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (element) {
        element.textContent = text;
        element.style.color = color;
        resolve();
      } else {
        reject("some error detected");
      }
    }, delay);
  });
}

changeTextAndColor(heading1, "one", "red", 1000)
  .then(() => changeTextAndColor(heading2, "two", "green", 1000))
  .then(() => changeTextAndColor(heading3, "three", "yellow", 1000))
  .then(() => changeTextAndColor(heading4, "four", "purple", 1000))
  .then(() => changeTextAndColor(heading5, "five", "violet", 1000))
  .then(() => changeTextAndColor(heading6, "six", "brown", 1000))
  .then(() => changeTextAndColor(heading7, "seven", "blue", 1000))
  .catch((error) => {
    alert(error);
  });
