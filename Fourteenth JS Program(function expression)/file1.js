"use strict";


//function expression

//example-1
const singHappyBirthday= function (){
console.log("Happy Birthday To You...");
}
singHappyBirthday();    //invoke singHappyBirthday function


//example-2
const sum=function (a,b,c){     //when value is not assigned to variable then it is undefined
    return a+b+c;               //2+3+undefined = Not a Number(NaN)
}
console.log(sum(2,3));          //invoke sum function


console.log(undefined+undefined);   //undefined+undefined=NaN(Not a Number)


//example-3

// function to check even or not
// function isEven(a){
//     if(a%2===0){
//         return true;
//     }
//     else{
//         return false;
//     }
// }
// const resultOfChecking=isEven(3);
// console.log(resultOfChecking);


//more optimized form
const isEven=function (number){
    return (number%2===0);
}
console.log(isEven(3));     //invoke isEven function


//example-4
//function to print first character of input string
const printFirstChar=function (name){
    return name[0];
}
console.log(printFirstChar("rajendra"));



//example-5
//function to find target in given array
// function targetIndex(array,target){
//     for(let i=0;i<array.length;i++){
//         if(array[i]===target){
//             return `index of target is:${i}`;
//         }
//     }
//     return "target not found.";
// }

// console.log(targetIndex([2,3,4,5,7,8,33,66,777,888],7))
// console.log(targetIndex([2,3,4,5,7,8],99));


//more optimized way of finding index of target in given array
const findTargetIndex=function (array,target){
for(let i=0;i<array.length;i++){
    if(array[i]===target){
        return i;
    }
}
return -1;
}

const array=[2,1,12,5,7];
const target1=5;
const target2=15;
const target3=12;
const finalResult1=findTargetIndex(array,target1);
const finalResult2=findTargetIndex(array,target2);
const finalResult3=findTargetIndex(array,target3);
console.log(finalResult1);
console.log(finalResult2);
console.log(finalResult3);




