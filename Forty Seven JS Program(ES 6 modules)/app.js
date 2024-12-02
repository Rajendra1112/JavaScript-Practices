import firstName from "./assets/firstName.js"; //default import
import age, { sms } from "./assets/age.js"; //default as well as named import
import { Person } from "./assets/person.js"; //named import

console.log(firstName, age);
console.log(sms);
const person1 = new Person("Rajendra", "Thapa", 24);
person1.info();
