"use strict";


//same method in super and sub class(i.e. method overriding)

//Example-1
class Animal {
    constructor(name, age) {
      this.name = name;
      this.age = age;
    }

    eat(){
        return "eat method of super class";
    }
}

  class Dog extends Animal {
    constructor(name,age,speed){
      super(name,age);
      this.speed=speed;
    }
    runSpeed(){
      return `${this.name} can run at ${this.speed} KMPH.`;
    }
    eat(){
        return "eat method of sub class";
    }
  }
  const dog1 = new Dog("max", 2,25);
  console.log(dog1);
  console.log(dog1.name);
  console.log(dog1.age);
  console.log(dog1.speed);
  console.log(dog1.eat());
  console.log(dog1.runSpeed());
  

//Example-1
class Car {
    constructor(name, speed) {
      this.name = name;
      this.speed = speed;
    }

    detail(){
        return `Speed of ${this.name} is ${this.speed} km/h`;
    }
}

  class RacingCar extends Car {
    detail(){
      return `${this.name} can race at speed of ${this.speed} km/h.`;
    }
  }
  const racingCar1= new RacingCar("AC Cobra", 225);
  console.log("for car:")
  console.log(racingCar1.detail());
