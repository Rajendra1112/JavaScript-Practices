"use strict";

// v) sort method

//example-1
const numbers=[33,12,1,45,30,34,,26,21,13,66,19];

const lowToHigh=numbers.slice(0).sort((a,b)=>a-b);   //to clone the array becoz sort method mutate 
//the original array and then sort in ascending order and store the return value in new array
console.log(lowToHigh);

const highToLow=numbers.slice(0).sort((a,b)=>b-a);   //to clone the array becoz sort method mutate 
//the original array and then sort in descending order and store the return value in new array
console.log(highToLow);


//example-2
const products=[
    {productID:1,productName:"p1",productPrice:12000},
    {productID:2,productName:"p2",productPrice:60000},
    {productID:3,productName:"p3",productPrice:45000},
    {productID:4,productName:"p4",productPrice:5000},
    {productID:5,productName:"p5",productPrice:95000}
];

//to clone the array of objects becoz sort method mutate the original array and then sort in 
// ascending order and store the return value in new array
const priceLowToHigh=products.slice(0).sort((a,b)=>a.productPrice-b.productPrice);
console.log(priceLowToHigh);

//to clone the array of objects becoz sort method mutate the original array and then sort in 
// descending order and store the return value in new array
const priceHighToLow=products.slice(0).sort((a,b)=>b.productPrice-a.productPrice);
console.log(priceHighToLow);

// vi) find method
//example-1
const animals=["cat","ox","elephant","fish","horse"];
const ans=animals.find((animalName)=>{
    return animalName.length===5;
});
console.log(ans);

const numbers2=[33,12,1,45,30,34,,26,21,13,66,19];
const foundTarget=numbers2.find((target)=>{
    return target===6;
});
console.log(foundTarget);

//example-3
const newProducts=[
    {productID:1,productName:"p1",productPrice:12000},
    {productID:2,productName:"p2",productPrice:60000},
    {productID:3,productName:"p3",productPrice:45000},
    {productID:4,productName:"p4",productPrice:5000},
    {productID:5,productName:"p5",productPrice:95000}
];

//to fetch data from above array of list of product details whose productID is 3
const fetchData=newProducts.find((product)=> product.productID===3);
console.log(fetchData);


// vii) every method

//example-1
const numbers3=[1,3,5,7,9];
//to check every elements of given array is odd or not
const isOdd=numbers3.every((number)=>number%2!==0);
console.log(isOdd); //if output is true then every elements of an array are odd


//example-2
const cartProducts=[
    {productID:1,productName:"p1",productPrice:12000},
    {productID:2,productName:"p2",productPrice:6000},
    {productID:3,productName:"p3",productPrice:5000},
    {productID:4,productName:"p4",productPrice:1500},
    {productID:5,productName:"p5",productPrice:9000}
];

//to check each product added in cart has price less than 15000
const isLess=cartProducts.every((cartItem)=>cartItem.productPrice<15000) ;
console.log(isLess);    //if output is true then prices of every items added to 
                        //cart is less than 15000

// viii) some method

//example-1
//check atleast one element in an array is odd 
const numbers4=[2,4,6,8,10,11];
const oddAvailable=numbers4.some((number)=>number%2!==0);
console.log("is odd number available:",oddAvailable);


//example-2
//check atleast one item in cart has price above 1000
const itemsInCart=[
    {productID:1,productName:"p1",productPrice:1200},
    {productID:2,productName:"p2",productPrice:600},
    {productID:3,productName:"p3",productPrice:500},
    {productID:4,productName:"p4",productPrice:150},
    {productID:5,productName:"p5",productPrice:900}
];
const itemAvailable=itemsInCart.some((item)=>item.productPrice>1000);
console.log(itemAvailable);


// ix) fill method
//example-1 
//to replace value of index by giving value,start index,end index
const numbers5=[2,3,5,6,7];
numbers5.fill(-66,2,5);
console.log(numbers5);

//example-2
//to create array with size 10 and fill all index with value 10
const myArray=new Array(10).fill(200);
console.log(myArray);

// x) splice method
//start delete insert


//to delete items
const numbers6=[12,22,42,26,88];
// const deletedItems=numbers6.splice(2,2);
// console.log("deleted items are:",deletedItems);
// console.log("original array after items get deleted:",numbers6);


//to insert item
// numbers6.splice(0,0,200);
// console.log("origial array after insert of item:", numbers6);

//delete and insert at the same time
numbers6.splice(0,3,1,2,3,4,5);
console.log("original array after insert and delete operations:",numbers6);



