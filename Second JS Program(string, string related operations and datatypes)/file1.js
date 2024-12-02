"use strict";
//              STRING
//string indexing
let firstName2="rajkumar";

//here      r a j k u m a r
//index     0 1 2 3 4 5 6 7

//to access index value
console.log(firstName2[4]);

//to find length of string we use length property
//length is followed after string name
console.log(firstName2.length);

//to find last index = length - 1
let lastIndex;
lastIndex=firstName2.length-1;
console.log(lastIndex);

//to access value of last index when we don't know last index position
console.log(firstName2[firstName2.length-1]);

//NOTE: space also have index value

let fullName="  Vhim Khadka  ";
console.log(fullName);
console.log(fullName.length);

//some methods used with string value

// 1) trim() method ->used to remove spaces

let newName=fullName.trim();
console.log(newName);
console.log(newName.length);

// OR we simply can store the new string given by trim() method in previously 
//defined string variable

fullName=fullName.trim();
console.log(fullName);
console.log(fullName.length);

// 2)toUpperCase 
fullName=fullName.toUpperCase();
console.log(fullName);

// 3) toLowerCase
fullName=fullName.toLowerCase();
console.log(fullName);

// 4)slice
//slice with single index value
console.log(fullName.slice(3));

//slice with multiple index value NOTE: upper limit will be excluded
console.log(fullName.slice(0,7));

//      typeof operator
//syntax: typeof variableName OR typeof(variableName)
let num1=10;
let bird="parrot";
console.log(typeof num1);
console.log(typeof bird);

//convert number to string
//first method
let a=20;
a=a+"";
console.log("datatype of a is:",typeof(a));

//second method: using String method or simple way
let age=20;
age=String(age);
console.log(age);
console.log("datatype of age is:",typeof age);

//convert string to number 
//first method
let b="1234";
b=+b;
console.log("datatype of b is:",typeof(b));


//second method: using Number method or simple way
let num="999";
num=Number(num);
console.log(num);
console.log("datatype of num is",typeof num);


//stirng concatenation
let string1="Rajendra";
let string2="Thapa";
let fullName2=string1+" "+string2;
console.log("value of fullName2 is :",fullName2);
console.log("datatype of fullName2 is:", typeof fullName2)

//concatenation of two number string will give string
let string3="123";
let string4="456";
let newString=string3+string4;
console.log("value of newString is:",newString);
console.log("datatype of newString is:",typeof newString);

//to add two number string
let addTwoNumbers=Number(string3)+Number(string4);
console.log("addition of two number is:",addTwoNumbers);


//templet string
let myAge=22;
let myName="Rajendra";

//The output for following statement is My name is Rajendra and my age is 22.
// console.log("My name is "+myName+" and my age is "+myAge+".");

//same output can be generated using templet string
console.log(`My name is ${myName} and my age is ${myAge}.`);

//undefined
let digit;
console.log(typeof digit);
digit=11;
console.log(typeof digit);

var color2;
console.log(typeof color2);
color2="black";
console.log(typeof color2);

// const must be intialized during declaration time other it will throw error
// const c; this satement will throw error so need to initialized like this const c=2;
// console.log(typeof c);

//null
let value1=null;
console.log(typeof value1);
value1=123;
console.log(typeof value1);
console.log(value1);

let lastName=null;
console.log(typeof lastName);
lastName="thapa";
console.log(typeof lastName);

//BigInt
let value2=123;
//to fing limit of number (up to which a number can go) 
console.log("limit of number datatype:",Number.MAX_SAFE_INTEGER);


//to change number type to BigInt type

// i) using BigInt Constructor
let value3=123;
console.log("value3=",value3);
console.log(typeof value3);

value3=BigInt(value3);
console.log("value3=",value3);
console.log(typeof value3);

// ii) by adding n at the last of number 
let value4=44n;
console.log(typeof value4);

//addition of bigint types
console.log("addition of two bigint type:",(value3+value4));

