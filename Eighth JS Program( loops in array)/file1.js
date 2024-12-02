//for loop in array

    //modify elements of fruits array and store those elements in newFruits array
let fruits=["apple","banana","mango","guva","sweet potato"];
let i;
let newFruits=[];
for(i=0;i<fruits.length;i++){
    newFruits[i]=fruits[i].toUpperCase();
}
console.log("old fruits are :",fruits);
console.log("new fruits are :",newFruits);

//same things done using push method
let oldNumbers=[1,2,3];
let newNumbers=[];
for(i=0;i<oldNumbers.length;i++){
    newNumbers.push(oldNumbers[i]+1);
}

console.log(oldNumbers);
console.log(newNumbers);

// Note: use const for reference type variable
//example

const array1=["a","e","i"];
array1.push("o","u");   //it will change the array value not the value of array variable which is 
//a constant type
console.log(array1);


//while loop in array
let j=0;
while(j<array1.length){
    console.log(array1[j]);
    j++;
}


//modify elements of arrray1 array and store those elements in vowel array
const vowel=[];
j=0;
while(j<array1.length){
    vowel.push(array1[j].toUpperCase());
    j++;
}
console.log(vowel);


//for of loop in array
//on each iteration loop gives value of array to initiated variable
let vegitables=["onion","ginger","carrot","tomato"];
let newVegitables=[];
for(let vegitable of vegitables){
    newVegitables.push(vegitable.toUpperCase());
}
console.log(newVegitables);


//for in loop in array
//on each iteration, loop gives index to initialized variable
let vegitables2=["potato","little finger","pumpkin"];
let newVegitables2=[];
for(let vegitable2 in vegitables2){
    newVegitables2.push(vegitables2[vegitable2].toUpperCase());
}
console.log(newVegitables2);

