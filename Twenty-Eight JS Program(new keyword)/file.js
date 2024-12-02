"use strict";

//new keyword
//i)create empty object and set this={} object
//ii)after adding key value pair it return this(i.e. {} object filled wtih key value pair)
//iii)set __proto__ of this object(i.e. {} object created by new keyword ) = function prototype(i.e.
//free space or object given by function)

function DisplayInfo(userName, address) {
  //Constructor is used to assign property(key):value pair to the object
  this.userName = userName;
  this.address = address;
}
DisplayInfo.prototype.about = function () {
  console.log(this.userName, this.address);
};
DisplayInfo.prototype.sing = function () {
  console.log("la la lala");
};
const user1 = new DisplayInfo("rajendra thapa", "sindhupalchok"); //without new keyword we cannot
//invoke function constructor or class constructor. So, we neeed to use new keyword before it.
console.log(user1);
user1.about();
user1.sing();

//optimize the previous code by using new keyword
function CreateUser(firstName, lastName, email, age, address) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.email = email;
  this.age = age;
  this.address = address;
}

CreateUser.prototype.about = function () {
  return `${this.firstName} is ${this.age} years old.`;
};

CreateUser.prototype.is18 = function () {
  return this.age >= 18;
};

const user2 = new CreateUser(
  "ramesh",
  "karki",
  "ramesh12@gmail.com",
  42,
  "sindhupalchok"
);
console.log(user2);
const about = user2.about();
console.log(about);
const is18 = user2.is18();
console.log(is18);

//to access all the keys of object including the keys of that object's prototype
console.log("all keys of user2 object:");
for (let key in user2) {
  console.log(key);
}

//to access keys that are only the property of user2 object i.e. to access those keys which are
//inside user2 object not in prototype of user2 object
console.log("keys that are inside user2 object but not in its prototypeD");
for (let key in user2) {
  if (user2.hasOwnProperty(key)) {
    console.log(key);
  }
}
