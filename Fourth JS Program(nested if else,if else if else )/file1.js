"use strict";


//nested if else
//Number guessing game
let winningNumber=15;
let guessNumber=+(prompt("guess any number:"));
// console.log(guessNumber,typeof guessNumber);
if(guessNumber===winningNumber){
    console.log("your guess is right");
}
else{
    if(guessNumber>winningNumber){
        console.log(`${guessNumber} is too high.`);
    }
    else{
        console.log(`${guessNumber} is too low.`)
    }
}

//if else if else
let marksObtained=49;
if(marksObtained>=90){
    console.log("Outstanding");
}
else if(marksObtained>=80){
    console.log("Excellent");
}
else if(marksObtained>=70){
    console.log("Very Good");
}
else if(marksObtained>=60){
    console.log("Good");
}
else if(marksObtained>=50){
    console.log("Satisfied");
}
else if (marksObtained>=40){
    console.log("Need Improvement")
}
else{
    console.log("Fail");
}


