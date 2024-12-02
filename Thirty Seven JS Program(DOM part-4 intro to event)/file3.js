// ################# how event listener work #################
// look concept in copy which is explained on the basis of this example

//example
console.log("script started !!!!");
const allButtons = document.querySelectorAll(".multiple-buttons button");
console.log(allButtons);
allButtons.forEach((button) => {
  button.addEventListener("click", (event) => {
    var innerSum = 0;
    for (let i = 0; i < 1000000000; i++) {
      innerSum += i;
    }
    console.log(
      event.currentTarget.textContent,
      "inner loop sum is:",
      innerSum
    );
  });
});

var outerSum =  0;
for (let i = 0; i < 100000000; i++) {
  outerSum += i;
}
console.log("outer loop sum is :",outerSum);
console.log("script ended !!!!");
