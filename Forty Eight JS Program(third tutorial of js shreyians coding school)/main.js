//  #IIFE Imediately Invoked Function Expression

//exmple of iife function are jQuery $()
// iffe function will get called immediately when program get executed

// NOTE: all the variable which are defined inside iife function are private by default and we used iife function in
// some situation when we need to keep the variable value private

// Example
var ans = (function () {
  var value1 = 12;
  return {
    // here we used getter function to print the value or to access the private variable value which is not accessible before
    getter: function () {
      console.log(value1);
    },
    // here we used setter function to set the new value in the private variable which is not possible before
    setter: function (newValue) {
      value1 = newValue;
    },
  };
})();

ans.getter(); //to acces the value of private variable
ans.setter(333); //to change the value of private variable
ans.getter(); //to access the new value of private variable

//  # [[prototype]]

var obj1 = { name: "rajendra", rollNo: 11 };

console.log(obj1); //here we get [[prototype]] property which is not definde by us while creating object
console.log(obj1.hasOwnProperty("name")); //here we used .hasOwnProperty method which is defined under [[prototype]] property and this method helps to identify whether the mentioned property is inside the created object or not

// [[prototype]] is given by JS by default when we create object and it contains helper properties and methods which we used to complete our task.

//  #prototypal inheritance

var parentObj = {
  isHuman: "true",
  canTalk: "true",
  eyeColor: "black",
};

var childObj = {
  isEducated: "true",
  status: "single",
};

// child inherit parent propertis using __proto__ method which is defined under [[prototype]] property of childObj

childObj.__proto__ = parentObj;

//  # this call apply bind

//  # this
// this keyword is a speical keyword which change its value in different context

// in global scope this keyword will point window object
console.log(this);

// in function scope this keyword will point window object
function abcd() {
  console.log(this);
}

abcd();

// in method scope this keyword will point its parent object

var person = {
  name: "ram",
  age: 22,
  talk: function () {
    console.log(this);
  },
};

// in addEventListener function this keyword will point the element which is attached to the addEventListener function
var button = document.querySelector("button");
button.addEventListener("click", function () {
  console.log(this);
  this.style.color = "green";
});

//  #call apply and bind are used in such case where we need this keyword to point other object instead of the function within which it is mentioned

// more explanation yedi temi sanga function ra object cha ra temlai function bhitra rahayako this keyword le window object lai point na garayera tyo arko object lai point garaunu cha bhane hami call apply ra bind ko used garchau

//  #call

function carAcceleration() {
  console.log(this);
  console.log(this.speed);
  console.log(this.color);
}

var carObj = {
  speed: "20km/hr",
  color: "red",
};

carAcceleration.call(carObj); //used call keyword to call the function and pass the object which we want to be pointed by this keyword

// when we need to pass arguements when function get called using call keyword and received those arguments as parameter then first we passed the object name which will be pointed by this keyword which is inside function then after using comma we passed the remaining arguments

function numberPrint(num1, num2, num3) {
  console.log(this);
  console.log(num1);
  console.log(num2);
  console.log(num3);
  console.log(this.name);
  console.log(this.age);
}

var objNumberPrint = {
  name: "rajendra",
  age: 22,
};

numberPrint.call(objNumberPrint, 22, 35, 65);

// #  apply

//apply ra call usta ustai ho farak yeti matra ho ki apply keyword used garda arguments pass garnu paryo bhane array used garchau kina ki apply keyword le function call garda apply function bhitra duita matrai arguments passed garna milcha tara kaile kahi hamlai ta dherai arguments chai ra huncha so paila object name passed garne ani chiyako arguments array bhitra pass garne
function exampleForApply(color, model) {
  console.log(this);
  console.log(color, " ", model);
}

var exampleOfObjForApply = {
  vehicle: "car",
  speed: 100,
};

exampleForApply.apply(exampleForApply, ["red", "2024"]); //here when we call the function first we pass object name which will be pointed by this keyword of the invoked function then remaining arguments are passed inside array

// # bind
//bind react ma dherai used garchau

// yedi bind used garera function call garyau bhane invoked bhayako function ra point gareko object duitai bind bhayara auta naya function bancha ra tyo naya baneko function return garcha jaslai hami kunai variable ma store garchau ra used garchau

// example of bind
function exampleOfBind() {
  console.log(this);
  console.log("inside function which is called using bind");
}

var objForBind = {
  location: "sindhupalchok",
  distance: 155,
};

var newBindedFunction = exampleOfBind.bind(objForBind);
console.log(newBindedFunction); //to check what is inside newBindedFunction

// now newBindedFunction variable is a function so we can call it
newBindedFunction();

//
//
//  # pure and impure function

// # pure function
function pureFunction(a, b) {
  return a * b;
}

var ans1 = pureFunction(2, 3);
var ans2 = pureFunction(2, 3);

// here both variable ans1 and ans2 give the same value every time for the same input
console.log(ans1);
console.log(ans2);

// # impure function
function impureFunction(number1) {
  return Math.random() * number1;
}

var answer1 = impureFunction(4);
var answer2 = impureFunction(4);

// here both variable answer1 and answer2 give different value every time for the same input
console.log(answer1);
console.log(answer2);
