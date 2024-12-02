//exporting class
class Person {
  constructor(firstName, lastName, age) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
  }

  info() {
    console.log(
      `My name is ${this.firstName} ${this.lastName} and I am ${this.age}`
    );
  }
}

export { Person }; //named export
