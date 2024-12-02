"use strict";

//Class keyword
//we can place both methods and properties inside the class

//Example-1
//optimized code of previous program for creating user

class CreateUser {
  constructor(firstName, lastName, email, age, address) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.email = email;
    this.age = age;
    this.address = address;
  }

  about() {
    return `${this.firstName} is ${this.age} years old.`;
  }

  is18() {
    return this.age > 18;
  }

  collegeName(clzName) {
    return `${this.firstName} ${this.lastName} read in ${clzName} college.`;
  }
}

const user1 = new CreateUser(
  "rojan",
  "stha",
  "rs@gmail.com",
  12,
  "sindhupalchok"
);
console.log(user1);
console.log(Object.getPrototypeOf(user1));
console.log(user1.about());
console.log(user1.is18());
console.log(user1.collegeName("MBMC"));

//Example-2 inheritance 
class Animal {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  eat() {
    return `${this.name} is eating`;
  }

  isCute() {
    return this.age > 2;
  }

  isSuperCute() {
    return this.age <= 2;
  }
}
// const animal1 = new Animal("cow", 2);
// console.log("for animal:");
// console.log(animal1.eat());
// console.log("is cute:",animal1.isCute());
// console.log("is super cute",animal1.isSuperCute());

class Dog extends Animal {
  constructor(name,age,speed){
    super(name,age);
    this.speed=speed;
  }
  runSpeed(){
    return `${this.name} can run at ${this.speed} KMPH.`;
  }
}
const dog1 = new Dog("tommy", 3,45);

console.log("for dog:");
console.log(dog1);
console.log("name of dog is:",dog1.name);
console.log("age of dog is:",dog1.age);
console.log(dog1.eat());
console.log("is cute:",dog1.isCute());
console.log("is super cute:",dog1.isSuperCute());
console.log(dog1.runSpeed())

