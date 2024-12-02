"use strict";
function singHappyBirthday(){
console.log("Happy Birthday To You...");
}

singHappyBirthday();
singHappyBirthday();
singHappyBirthday();
singHappyBirthday();


function sumOfTwoNumbers(x,y){
    return x+y;
}

function sumOfThreeNumbers(x,y,z){
    return x+y+z;
}

const result1=sumOfTwoNumbers(33,44);
const result2=sumOfTwoNumbers(1,2);
const result3=sumOfTwoNumbers(10,20);
const result4=sumOfThreeNumbers(4,5,6);
console.log(result1);
console.log(result2);
console.log(result3);
console.log(result4);


function sum(a,b,c){
    return a+b+c;   //2+3+undefined = Not a Number(NaN)
}
console.log(sum(2,3));  //when value is not assigned to variable then it is undefined


console.log(undefined+undefined);   //undefined+undefined=NaN(Not a Number)


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
function isEven(number){
    return (number%2===0);
}
console.log(isEven(3));


//function to print first character of input string
function printFirstChar(name){
    return name[0];
}
console.log(printFirstChar("rajendra"));


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
function findTargetIndex(array,target){
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




