"use strict";

//simple function
function hello(){
    console.log("hello world");
}

// in javascript we can treat function as object too
//so javascript function ==> normal function + object

//js provide name property to print name of function
//as we know function can be treat at object so we can access that property by . symbol similar to object
console.log(hello.name);

//we can also add our own property to the function
hello.usernName="rajendra";
hello.age=24;
console.log(hello.usernName);
console.log(hello.age);

//prototype: function gives free space which we treat as empty object that free space is called 
            //prototype.

console.log(hello.prototype);

//adding new key value pair in the prototype(aka empty object)
hello.prototype.key1="value1";
hello.prototype.key2="value2";

// adding function in the prototype
hello.prototype.myFunc=function(){
    console.log("hello nepal");
}
console.log(hello.prototype);

