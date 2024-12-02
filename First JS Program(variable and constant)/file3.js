// forEach loop
let arr1 = [1, 2, 3];

arr1.forEach((valueOfarr1) => {
  console.log(valueOfarr1);
});

// forin loop
let obj1 = {
  rollNo: 12,
  name: "ram",
  age: 20,
};

for (let keyOfobj1 in obj1) {
  console.log(keyOfobj1);
}

// now to get the value of object using forin loop we have to used the key which we obtained through for in loop

for (let key in obj1) {
  console.log(obj1[key]);
}

// callback function

function hi() {
  console.log("hi");
}

function hello() {
  console.log("hello");
}

function printMessage(receiver) {
  receiver();
}

// printMessage function get called by passing above functions one by one  and those functions will get called again inside
// the printMessage function which make them callback function

printMessage(hi);
printMessage(hello);

// passing another function as an argument in printMessage funciton

printMessage(() => {
  console.log("goodbye");
});

// first class function == if function is considered as value and store it in variable or that function which is considered as value and passed that function as an argument when another function get called and again called inside it then that kind of function will be first class function

// store function in a variable then passed as an argument

let a = () => {
  console.log("my name is rajendra");
};

function printName(receiver) {
  receiver();
}

printName(a);

// passing function as an argument

printName(() => {
  console.log("hello world");
});
