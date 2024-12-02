"use strict";

//Booleans i.e. either true or false

//Comparision Operator gives boolean values as a result i.e. either true or false

//example-1
let firstNumber=12;
let secondNumber=13;
console.log(firstNumber>secondNumber);   //false
console.log(firstNumber<secondNumber);   //true
console.log(firstNumber>=secondNumber);  //false
console.log(firstNumber<=secondNumber);  //true


//example-2
console.log("example-2 output")
let thirdNumber=12;
let fourthNumber=12;
console.log(thirdNumber==fourthNumber);   //true
console.log(thirdNumber<=fourthNumber);   //true
console.log(thirdNumber>=fourthNumber);   //true
console.log(thirdNumber!=fourthNumber);   //false


//example-3
let fifthNumber="123";
let sixthNumber=123;
console.log(fifthNumber==sixthNumber);   //true bcoz equal to sign check only value not datatype
console.log(fifthNumber<=sixthNumber);   //true bcoz equal to sign check only value not datatype
console.log(fifthNumber>=sixthNumber);   //true bcoz equal to sign check only value not datatype
console.log(fifthNumber!=sixthNumber);   //false bcoz equal to sign check only value not datatype


//example-4 triple equal to operator and !== not double equal to operator
let seventhNumber="123";
let eighthNumber=123;

//false bcoz === check both value and its datatype
console.log("output of === comparision operator",fifthNumber===sixthNumber); 

//true bcoz double equal to sign check both value and its datatype 
console.log(fifthNumber!==sixthNumber);  


//example-5
let n1=10;
if(n1%2===0){
    console.log(`${n1} is even number.`);
}
else{
    console.log(`${n1} is odd number.`);
}

//truthy or falsy values

//falsy values are as follows:
// 1. false
// 2. ""
// 3. null
// 4. undefined
// 5. 0


//for falsy values only else condtion will be execute bcoz if condition always gives false result 


// 1. false
// let firstName=false;
// if(firstName){
//     console.log(firstName)
// }
// else{
//     console.log("firstName gives falsy values");
// }


// 2. ""
// let firstName="";
// if(firstName){
//     console.log(firstName)
// }
// else{
//     console.log("firstName gives falsy values");
// }


// 3. null
// let firstName=null;
// if(firstName){
//     console.log(firstName)
// }
// else{
//     console.log("firstName gives falsy values");
// }


// 4. undefined
// let firstName;
// if(firstName){
//     console.log(firstName)
// }
// else{
//     console.log("firstName gives falsy values");
// }


// 5. 0
// let numberToChecked=0;
// if(numberToChecked){
//     console.log(numberToChecked)
// }
// else{
//     console.log("gives falsy values");
// }

//values other than falsy values are truthy values
//truthy values always execute if condition statement
//e.g. true,1,-1,"hello"

// let numberToChecked=1;
// if(numberToChecked){
//     console.log(numberToChecked)
// }
// else{
//     console.log("gives falsy values");
// }


//ternary operator

// let age=10;
// let drink;
// if(age>=5){
//     drink="coffee";
// }
// else{
//     drink="milk";
// }
// console.log(drink);

//above condition can be applied in short by using ternary operator
//syntax: condition ? true value : false value ;
let age=20;

//example-1 of ternary operator
let drink = age >= 5 ? "coffee" : "milk" ;
console.log(drink);

//example-2 of ternary operator
let checkForVoting=age>=18?"eligible for voting":"not eligible for voting";
console.log(checkForVoting);

// OR and AND operator

let checkName="Rajendra";
let checkAge=22;


if(checkName[0]==="R" || checkAge>=18){
    console.log("your name start with R or you are above 18.");
}
else{
    console.log("check error");
}

if(checkName[0]==="R" && checkAge>=18){
    console.log("your name start with R and you are above 18.");
}
else{
    console.log("check error");
}




