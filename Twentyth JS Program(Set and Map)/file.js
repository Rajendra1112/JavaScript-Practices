"use strict";
//iterables
const firstName="rajendra";
for(let letter of firstName){
    console.log(letter);
}

// const user={
//     name:"ram",
//     age:22,
//     color: "brown"
// };
//NOTE: Object is not iterable so here user will not get iterated`
// for(let key of user){
//     console.log(key);
// }


//SET


//set is iterable
//set store data in linear order similar to that of array
//order is not guaranteed
//set store only unique element (i.e. no duplicates allowed)
//no index-based access  
//we can pass iterables in set constructor while creating set
//some method of set are .add() and .has(). Here .has() return boolean values


const animals=new Set();
animals.add("ox");
animals.add("elephant");
animals.add("fish");
animals.add("tiger");
animals.add("lion");

//set ignore repetative element
animals.add("fish");

//to print set
console.log(animals);

//set is iterable so for of loop is satisfied
//to print every element of set
for(let animal of animals){
    console.log(animal);
}

//to check whether set contain mentioned element or not
const ans=animals.has("elephant");
console.log(ans);

//we can pass iterables in set constructor while creating set
const numbers=[32,66,37,88,90];
const setOfNumbers=new Set(numbers);
console.log(setOfNumbers);

const setOfLetters=new Set("apple");    //here p is repeated so only one p is store in set
console.log(setOfLetters);  


//no repetation is allowed in set but JS consider two arrays having same element as different 
//because they have different address in heap 
const plants=new Set();
plants.add(["lily","apple tree","mango tree"]);
plants.add(["lily","apple tree","mango tree"]);
console.log(plants);


//as we know array may have duplicate data but set don't so when we pass array having duplicated
//data set will store only unique data by ignoring duplicate datas

const randomNumbers=[1,2,2,1,2,4,6,7,8,9,3,5,6,5,6,7];
const uniqueElements=new Set(randomNumbers);
uniqueElements.add(9999);    //all the duplicate data will get ignored
console.log(uniqueElements);
const additionalData=[55,66,77] ;
uniqueElements.add(additionalData);
let length=0;
for(let element of uniqueElements)   {
    length++;
    console.log(element);
}
console.log("length of uniqueElement set is:",length);


//Maps


const users=new Map();
//to add key value pair in Map object
users.set('ID',1);
users.set('userName','Rajendra');
users.set('age',22);

//key can be anything like number,string,array,object literals etc so
users.set(5,'five');
users.set([1,2,3],'onetwothree');

//to print map
console.log(users);

//to access data of map
console.log(users.get('ID'));
console.log(users.get('userName'));
console.log(users.get('age'));
console.log(users.get(5));
console.log(users.get('[1,2,3]'));

//to print all keys of the created map
console.log(users.keys());  //keys() function gives mapiterator as output so we can use loops

for(let key of users.keys()){
    console.log(users.get(key));
}

//to make object as a key in map
const newUsers={
    ID:2,
    firstName:"rakesh",
    address:"ktm"
};

users.set(newUsers,{age:12,contactNo:1334});
console.log(users);

//to access value of object key
console.log(users.get(newUsers).age);
console.log(users.get(newUsers).contactNo);

//to access key value pair which are in the form of array so we can destructure that array as 
for(let [key,value] of users){
    console.log(`key is: ${key} and value is: ${value}`);
}


//we can pass multiple key value pair in map as follows
const animalsCategory=new Map([['animalID',1],['animalType','domastic'],['animalName','cow'],['animalAge',7]]);
console.log(animalsCategory);


//to add extra info of an object not inside object but in other space using map.
const waterAnimal1={
    name:"star fish"
};

const extraInfo=new Map();
extraInfo.set(waterAnimal1,{age:2,gender:'male',swimSpeed:10});

//to access the extra info of waterAnimal1 
console.log(extraInfo.get(waterAnimal1));      //return value of waterAnimal1 object (i.e.key)
console.log(extraInfo.get(waterAnimal1).age);  //return age value of waterAnimal1 object (i.e.key)

//return gender value of waterAnimal1 object (i.e.key)
console.log(extraInfo.get(waterAnimal1).gender); 

 //return swim value of waterAnimal1 object (i.e.key)
console.log(extraInfo.get(waterAnimal1).swimSpeed);







