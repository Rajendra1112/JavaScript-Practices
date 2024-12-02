"use strict";


//arrow function

//example-1 
//function to print happy birthday song
const singHappyBirthday= ()=>{
console.log("Happy Birthday To You...");
}
singHappyBirthday();    //invoke singHappyBirthday function


//example-2
//function to find sum of three input numbers
const sum=(a,b,c)=>{     //when value is not assigned to variable then it is undefined
    return a+b+c;               //2+3+undefined = Not a Number(NaN)
}
console.log(sum(2,3));          //invoke sum function
console.log(undefined+undefined);   //undefined+undefined=NaN(Not a Number)


//example-3
//function to check whether the input number is even or not
const isEven=(number)=>{
    return (number%2===0);
}
console.log(isEven(3));     //invoke isEven function


//example-4
//function to print first character of input string
const printFirstChar=(name)=>{
    return name[0];
}
console.log(printFirstChar("rajendra"));


//example-5
//function to find target in given array
const findTargetIndex=(array,target)=>{
for(let i=0;i<array.length;i++){
    if(array[i]===target){
        return i;
    }
}
return -1;
}

const array=[2,1,12,5,7,33,56,77,87,4];
const target1=5;
const target2=15;
const target3=12;
const target4=87;
const finalResult1=findTargetIndex(array,target1);
const finalResult2=findTargetIndex(array,target2);
const finalResult3=findTargetIndex(array,target3);
const finalResult4=findTargetIndex(array,target4);
console.log(finalResult1);
console.log(finalResult2);
console.log(finalResult3);
console.log(finalResult4);




