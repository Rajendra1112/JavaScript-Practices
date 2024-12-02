"use strict";

//creating object using function and returning that object
function createUser(firstName,lastName,email,age,address){
    const user={};
    user.firstName=firstName;
    user.lastName=lastName;
    user.email=email;
    user.age=age;
    user.address=address;
    user.about=function(){
        return `${this.firstName} is ${this.age} years old.`;
    };
    user.is18=function(){
        return this.age>=18;
    };
    return user;
}

const user1=createUser("ram","thapa","ram@123",22,"ktm");
console.log(user1);
const about=user1.about();
console.log(about);
const is18=user1.is18();
console.log(is18);

//on each call of the fuction createUser new object get created that contains two methods
//which occupy space in memory

//so whenever we create new object two methods will also created inside that object that occupy
//space in memory. this cause lack of efficiency in memory so it need to resolve. 