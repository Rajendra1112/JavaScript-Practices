"use strict";

function createUser(firstName,lastName,email,age,address){
    const user=Object.create(createUser.prototype);
    user.firstName=firstName;
    user.lastName=lastName;
    user.email=email;
    user.age=age;
    user.address=address;
    return user;
}

createUser.prototype.about=function(){
            return `${this.firstName} is ${this.age} years old.`;
        }


createUser.prototype.is18=function(){
            return this.age>=18;
        }

const user2=createUser("ramesh","karki","ramesh12@gmail.com",42,"sindhupalchok");
console.log(user2);
const about=user2.about();
console.log(about);
const is18=user2.is18();
console.log(is18);
