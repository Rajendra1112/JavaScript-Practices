//array destructuring
let myArray=["value1","value2","value3","value4","value5"];
// let var1=myArray[0];
// let var2=myArray[1];


//instead of above two lines of variable define we can use array destructuring as follows
//when value are more than variable
let [var1,var2]=myArray;
console.log(`value of variable1 is:${var1} and value of variable2 is:${var2}`);


//when variables are more than values
let numbers=[22,11];
let[a,b,c]=numbers;
console.log(a);
console.log(b);
console.log(c); //c is not assigned with any value so c is undefined


//to skip index of an array while array destructuring
let volwels=["a","e","i","o","u"];
let [v1,,v3,,v5]=volwels;
console.log("vowel1:",v1);
console.log("vowel3:",v3);
console.log("vowel5:",v5);


//to store some values of array in in some variable and remaining value of array in new array
//by destructuring 
let fruits=["apple","banana","grapes","cucumber","watermelon"];
let[fruit1,fruit2,...remainFruits]=fruits;
// console.log(fruit1);
// console.log(fruit2);
// console.log("remaining fruits: ",remainFruits);

console.log(`fruit1:${fruit1},fruit2:${fruit2} and remaining fruits are:${remainFruits}`);