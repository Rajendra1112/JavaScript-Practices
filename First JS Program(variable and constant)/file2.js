"use strict";
//we need to use var keyword to define variable otherwise error will be shown
//eg firstName without var will not be compiled
var firstName = "rajendra thapa";
console.log(firstName);

//changing value of variable which is defined previously
firstName = "ram";
console.log(firstName);

//on each time we use var keyword new variable is declared
//for eg. var box, var box will declare or create two variable of name box

var color = "red";
console.log(color);

var color = "green";
console.log(color);

//let keyword to define or delcare variable
let animal = "ox";
console.log(animal);

//we cannot use same variable name to declare variable with let keyword like var keyword
// e.g. let animal="ox"; and let animal="cow"; it will throw error
let sms = "hi";
// let sms="bye"; this line will throw error as sms variable is already declared
console.log(sms);

// Conclusion: so instead of var keyword we use let keyword to declare variable in JS

//declare constant
const pi = 3.1415;
console.log(pi);
console.log("square of Pi is:", pi ** 2);
console.log("square root of Pi is:", pi ** 0.5);

// pi variable is declared using constant keyword so new value cannot be assigned to this variable.

//we cannot change value of constant like that of variable
//e.g. const a=5; then changing value of constant a is not possible

var a = [1, 2, 3];
var b = a;
console.log(a);
console.log(b);
b.push(22);
console.log(a);
console.log(b);

// forEach loop for above array
a.forEach((valueOfa) => {
  console.log(valueOfa);
});

let obj1 = { age: 20, name: "ram" };
console.log(obj1);
console.log(obj1.age);
console.log(obj1.name);

// forin loop for above object
for (let keyOfobj1 in obj1) {
  console.log(keyOfobj1);
  console.log(obj1[keyOfobj1]);
}
