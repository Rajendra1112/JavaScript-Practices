"use strict";

//arrow function
//In arrow function this pointer point one level up object in our case window global object's reference is stored in this pointer

const user={
    ID:1,
    age:22,
    about:()=>{
        console.log(this);      //show window global object
        console.log(this.ID);
        console.log(this.age);
    }
}
// user.about();                //user object call the function but this pointer doesn't take user object
user.about.call(user);          //we cannot change value of this pointer of arrow function 