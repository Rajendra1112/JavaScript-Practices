"use strict";

//parameter destructuring and this concept is used with object
//mostly used in react

const person={
    name:"rajendra thapa",
    gender:"male"
};

// function printDetails(obj){  //this function take object as input
//     console.log(obj);               //to access whole object
//     console.log(obj.name);       //to access specific key of an object
//     console.log(obj.gender);     //to access specific key of an object
// }


//in above function obj is the parameter so we destructure object here
function printDetails({name,gender}){
    console.log(name);
    console.log(gender);
}

printDetails(person);


//callback function
function myFunc2(a,b){
    return a*b;
}
function myFunc1(callback){
    console.log("insde myFunc1");
    const resut=callback(6,5);
    console.log(resut);
}
myFunc1(myFunc2);

//function returning function
// function func1(){
//     // console.log("inside func1");
//     return function func2(a,b){
//         return a+b;
//     };
// }

// const ans=func1();
// const finalAns=ans(3,4);
// console.log(finalAns);

function outerFunction(){
    function innerFunction(){
        console.log("inner function");
    }
    return innerFunction;
}

const var1=outerFunction();
console.log(typeof var1);   //to check type of variable
console.log(var1());        //to call return function and it is called through variable becoz function that is returned is stored in var1
console.log(var1);          //to display return function
