"use strict";

//while loop
//example-1 print 0 to 9
let i=0;
while(i<10){
    console.log(i);
    i++;
}

//example-2 sum of first n natural numbers
let sum=0;
let num=10;
i=1;
while(i<=num){
    sum=sum+i;
    i++;
}
console.log(`sum of first ${num} natural numbers is ${sum}`);

//fingind sum of first 20 natural no using math formula
let num1=20;
let total=(num1*(num1+1))/2;
console.log(`sum of first ${num1} natral numbers is ${total}`);

//for loop

//example-1 print 0 to 9
for(let j=0;j<10;j++){
    console.log(j);
}

//example-2 sum of first n natural numbers
let sum2=0;
let num2=10;
for(let k=1;k<=num2;k++){
    sum2=sum2+k;
}
console.log(`sum of first ${num2} natural numbers is ${sum2}`);

//do while loop
//firstly statement inside do will get execute then condition will be checked
let n=10;
do{
    console.log(n);
    n++;
}
while(n<=10)

//break and continue keyword

//e.g. of break keyword
console.log("e.g. of break keyword");
for(let l=0;l<10;l++){
    if(l===5){
        break;  //break the loop or whole iteration
    }
    console.log(l);
}


//e.g. of continue keyword
console.log("e.g. of continue keyword");
for(let m=0;m<=20;m++){
    if(m%2===0){
        continue;   //skip the current iteration and go to next iteration
    }
    console.log(m);
}



