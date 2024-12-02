const heading1 = document.querySelector(".heading1");
const heading2 = document.querySelector(".heading2");
const heading3 = document.querySelector(".heading3");
const heading4 = document.querySelector(".heading4");
const heading5 = document.querySelector(".heading5");
const heading6 = document.querySelector(".heading6");
const heading7 = document.querySelector(".heading7");

//callback hell
// setTimeout(() => {
//   heading1.textContent = "one";
//   heading1.style.color = "violet";
//   setTimeout(() => {
//     heading2.textContent = "two";
//     heading2.style.color = "purple";
//     setTimeout(() => {
//       heading3.textContent = "three";
//       heading3.style.color = "red";
//       setTimeout(() => {
//         heading4.textContent = "four";
//         heading4.style.color = "pink";
//         setTimeout(() => {
//           heading5.textContent = "five";
//           heading5.style.color = "green";
//           setTimeout(() => {
//             heading6.textContent = "six";
//             heading6.style.color = "blue";
//             setTimeout(() => {
//               heading7.textContent = "seven";
//               heading7.style.color = "brown";
//             }, 1000);
//           }, 3000);
//         }, 2000);
//       }, 1000);
//     }, 2000);
//   }, 2000);
// }, 1000);

//implementing callback hell using function
function changeTextAndColor(
  element,
  text,
  color,
  delay,
  onSuccessCallback,
  onEleemntFailure
) {
  setTimeout(() => {
    if (element) {
      element.textContent = text;
      element.style.color = color;
      if (onSuccessCallback) {
        onSuccessCallback();
      }
    } else {
      if (onEleemntFailure) {
        onEleemntFailure();
      }
    }
  }, delay);
}

changeTextAndColor(
  heading1,
  "one",
  "violet",
  1000,
  () => {
    changeTextAndColor(
      heading2,
      "two",
      "purple",
      2000,
      () => {
        changeTextAndColor(
          heading3,
          "three",
          "red",
          2000,
          () => {
            changeTextAndColor(
              heading4,
              "four",
              "pink",
              1000,
              () => {
                changeTextAndColor(
                  heading5,
                  "five",
                  "green",
                  2000,
                  () => {
                    changeTextAndColor(
                      heading6,
                      "six",
                      "blue",
                      1000,
                      () => {
                        changeTextAndColor(
                          heading7,
                          "seven",
                          "brown",
                          1000,
                          () => {},
                          () => {
                            console.log("heading7 doesn't exits");
                          }
                        );
                      },
                      () => {
                        console.log("heading6 doesn't exits");
                      }
                    );
                  },
                  () => {
                    console.log("heading5 doesn't exits");
                  }
                );
              },
              () => {
                console.log("heading4 doesn't exits");
              }
            );
          },
          () => {
            console.log("heading3 doesn't exits");
          }
        );
      },
      () => {
        console.log("heading2 doesn't exits");
      }
    );
  },
  () => {
    console.log("heading1 doesn't exits");
  }
);
