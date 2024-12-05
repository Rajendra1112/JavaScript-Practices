// forEach loop in array
const arr2 = [2, 333, 44, 645, 87];
arr2.forEach((arr2Value) => {
  console.log(arr2Value);
});

// forin loop in object

const person = {
  name: "ram",
  age: 22,
  isMarried: false,
};

for (const key in person) {
  console.log(key);
  console.log(person[key]);
}

// some array methods
// map method in array
const arr1 = ["ram", "shyam", "hari"];
// map function call the callback function for each element of the array and we it invoke the callback function callback function takes arguemnt (variable) which hold the element for which callback get invoked.
const arr1AfterMap = arr1.map((arrValue) => {
  return arrValue + "1"; //this concatinate 1 to each element of array as arrValue variable represent each element
});
console.log(arr1AfterMap);

// filter method in array
let arr3 = ["ram", "hari", "mohan", "gita", "sita", "krishna", "bhim", "ram"];
// here we filter an array by giving condition (i.e. remove those element whose value is ram)
const arr3AfterFilter = arr3.filter((valueInArr3) => {
  return valueInArr3 !== "ram";
});

console.log(arr3AfterFilter);

// ternary operators and conditionals
// Example 1
const age = 20;
// if age > 20 then name = "ram" other name = "shayam" this task can be completed by following ternary operator

const name = age > 20 ? "ram" : "shyam";
console.log(name);

// example 2
// if ans is true color is green if ans is false color is red

let color = "green";
let ans = false; //default ans = false

// now to set color based on answer
color = ans ? "green" : "red";
console.log(color);

// if we don't want to use if else ternary operator like if we already have color = red and if ans is true then we want color to be green

let color1 = "red";
let ansOfQuiz = true;

color1 = ansOfQuiz ? "green" : "red"; //if ansOfQuiz is true than color1="green"
console.log(color1);

// optional chaning

let abcd = async () => {
  let data = await fetch("imaginaryapi.com"); //return data from this url

  let name = data.person?.name; //this line says name key will be accessed onlyif there is person object inside the return object
};

abcd();
