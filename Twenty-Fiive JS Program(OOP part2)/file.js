"use strict";

                //more optimized form
            
//methods is common for all the object so we need only one copy of those methods so 
//methods are defined outside the function(that create object) so that every time we create new object
//those methods do not occupy spaces in memory

const userMethods={
    about:function(){
        return `${this.firstName} is ${this.age} years old.`;
    },
    is18:function(){
        return this.age>=18;
    }
};

function createUser(firstName,lastName,email,age,address){
    const user={};
    user.firstName=firstName;
    user.lastName=lastName;
    user.email=email;
    user.age=age;
    user.address=address;
    user.about=userMethods.about;
    user.is18=userMethods.is18;
    return user;
}

const user1=createUser("ram","thapa","ram@123",22,"ktm");
console.log(user1);
const about=user1.about();
console.log(about);
const is18=user1.is18();
console.log(is18);

//Here is still problem and the problem is if we want to add more methods for the object then
//we need to define those methods outside of function(that create object) as above and we need to 
// assign references of those methods as value for the key of object inside the function(that create
//object). So if we sometime miss to assign address of any of those methods to the key of object 
//which is inside function then program not gona work which is problem that need to resolve 
