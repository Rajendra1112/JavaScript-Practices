"use strict";

//Before optimizing previous code we need following concept


//another way to create empty object using Object.create()  but we need to pass object prototype for
//the created object if we don't have object prototype then pass null

const obj1=Object.create(null);     //{} empty object is created and also give __proto__
obj1.key1="value1";
console.log("proto of oj1 is:",obj1.__proto__);                 //add key value pair in empty object
console.log(obj1.key1);             //to access value of key3


//concept of __proto__ or [[prototype]]
//NOTE: if javascript doesn't found the property(key) inside the object that try to access that key
//then js will search in the __proto__ of that object 

// example-1 concept of __proto__ chaining
const obj2={
    key2:"value2",
    key3:"value3"
}

const obj3=Object.create(obj2); //we set __proto__ for obj3 as obj2 by passing obj2 during obj3 creation
obj3.key4="value4";
console.log(obj3);
console.log("__proto__ of obj3 is:",obj3.__proto__);
console.log(obj3.key4);
console.log(obj3.key2); //here key2 is not present in obj3 if present JS will return the value of it 
                        //otherwise JS will first search in obj3 it will not found there so it will 
                        //search in obj2 which is the __proto__ for obj3 JS will found key2 in obj2 
                        //so it return the value of key2


//optimize the previous code by creating empty object and through the help of __proto__ of that object
const userMethods={
    about:function(){
        return `${this.firstName} is ${this.age} years old.`;
    },
    is18:function(){
        return this.age>=18;
    }
};

function createUser(firstName,lastName,email,age,address){
    const user=Object.create(userMethods);  //create empty object and set userMethods obj as __proto__
    //for the user object.
    //so on each time when we create object by calling this function that object will empty at 
    //first and __proto__ of that object will be userMethods object
    //then after we start to add key value pair to that empty object
    user.firstName=firstName;
    user.lastName=lastName;
    user.email=email;
    user.age=age;
    user.address=address;
    return user;
}

const user2=createUser("ramesh","karki","ramesh12@gmail.com",42,"sindhupalchok");
console.log(user2);
const about=user2.about();
console.log(about);
const is18=user2.is18();
console.log(is18);

