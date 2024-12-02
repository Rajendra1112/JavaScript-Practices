"use strict";
//Example of closure

// function myFunction(power){
//     return function(number){
//         return number ** power;
//     }
// }


//above code can be made more shorter using arrow function
const myFunction=power=>number=>number**power;


const square=myFunction(2);
const ans=square(4);
console.log(ans);