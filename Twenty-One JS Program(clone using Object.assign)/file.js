"use strict";

//clone using Object.assign
//when we clone array or object the clone hold different address in memory so update in one
//will not affect the other 

// exmaple-1
const obj1={
    key1:"value1",
    key2:"value2"
};


//previous way i.e. clone using spread operator
const obj2={...obj1};
obj1.key3="value3";
console.log(obj1);
console.log(obj2);

// exmaple-2
const obj3={
    key1:"value1",
    key2:"value2"
};


//clone using Object.assign 
const obj4=Object.assign({},obj1);
obj1.key3="value3";
obj2.key4="value4";
obj2.key5="value5";
console.log(obj1);
console.log(obj2);


//Optional chaining 
//->  mainly used in nested object
//->  object?.key?.

const users={
    ID:1,
    //userName:"ram",
    //address:{houseNo:123}
};


//check users exits or not if exit then check key exist or not if exist return value of that key 
//during checking if user or key is null or undefined(i.e. user or key is not exist) from that spot
//it return undefined

console.log(users?.ID);
console.log(users?.userName);
console.log(users?.address?.houseNo);

//methods
//->fuction inside object

// example-1
//we can directly define method 
const animals={
    ID:1,
    name:"cow",
    about(){
        console.log(`animal ID is:${this.ID} and animal name is:${this.name}`);
    }
};
animals.about();    //calling about method

//we can define method in key value pair form but meaning is same as above
const newAnimals={
    ID:11,
    name:"calf",
    about:function(){
        console.log(`animal ID is:${this.ID} and animal name is:${this.name}`);
    }
};
newAnimals.about();



//example-2
function displayInfo(){
    console.log(`person name is: ${this.firstName} and age is: ${this.age}`);
}
const person1={
    firstName:"ram",
    age:22,
    about:displayInfo   //value of about key is function i.e. we set function as value of about key
}
const person2={
    firstName:"shyam",
    age:22,
    about:displayInfo   //value of about key is function i.e. we set function as value of about key
}
const person3={
    firstName:"mohan",
    age:22,
    about:displayInfo   //value of about key is function i.e. we set function as value of about key
}
const person4={
    firstName:"rita",
    age:22,
    about:displayInfo   //value of about key is function i.e. we set function as value of about key
}

//about key has whole function as value(i.e. about=displayInfo) so about become about() method
//and we called that method as follows
person1.about();        //this=person1 object
person2.about();        //this=person2 object
person3.about();        //this=person3 object
person4.about();        //this=person4 object

console.log(this);

