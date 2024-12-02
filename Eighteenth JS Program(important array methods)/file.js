"use strict";

//important array methods
// i) forEach method

//without forEach method

// const numbers=[7,11,12,10,8,9];
// function work2(number,index){
//     console.log(`index is ${index} and number is ${number}`);
// }

// function work1(callback){
//     for(let i=0;i<numbers.length;i++){
//         callback(numbers[i],i);
//     }
// }
// work1(work2);



//with forEach method
// const numbers=[7,11,12,10,8,9];
// function work2(number,index){
//     console.log(`index is ${index} and number is ${number}`);
// }

// numbers.forEach(work2);     //forEach method do same thing similat to work1 method 

//more optimized form of above program with forEach method
const numbers=[7,11,12,10,8,9];
numbers.forEach(function(number,index){
    console.log(`index is ${index} and number is ${number}`)
})
  


//example-2 of forEach method real world example
const users=[
    {firstName:"Ram",age:22},
    {firstName:"Shyam",age:20},
    {firstName:"Rajni",age:18},
    {firstName:"Tina",age:24}
];

users.forEach(function(user){
    console.log(user.firstName);
})




// ii) map method
const newUsers=[
    {firstName:"Hari",age:22},
    {firstName:"Mohit",age:20},
    {firstName:"Lila",age:18},
    {firstName:"Tamana",age:24}
];

const names=newUsers.map((newUser)=>{
    return newUser.firstName;
});
console.log(names);


// iii) filter method
//e.g. where fileter method filter the even number from array and store those numbers in new array
const randomNumbers=[22,2,45,61,56];
const evenNumbers=randomNumbers.filter((number)=>{
    return number%2===0;
});
console.log(evenNumbers);


//e.g. where fileter method filter the odd number from array and store those numbers in new array
const oddNumbers=randomNumbers.filter((number)=>{
    return number%2!==0;
});
console.log(oddNumbers);

// iv) reduce method

//example-1
const prices=[200,300,230,560];
const totalPrice=prices.reduce((accumulator,currentValue)=>{
    return accumulator+currentValue;
},0);
console.log(totalPrice);

//example-2
const productCart=[
    {productID:1,productName:"mobile",productPrice:12000},
    {productID:2,productName:"laptop",productPrice:60000},
    {productID:3,productName:"tablet",productPrice:45000}
];

const totalAmount=productCart.reduce((accumulator,currentValue)=>{
    return accumulator+currentValue.productPrice;
},0);
console.log(totalAmount);