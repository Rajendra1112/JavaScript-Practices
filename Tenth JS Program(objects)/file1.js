//NOTES:
//Arrays are good but not sufficient enough for real wordl data. So, we use object
//Object is also a reference type so mechanism of storing data in memory is similar to array
//Oject do not have index like that of an array


//how to create an object 
//syntax: let or const objectName={key:value};  curly braces means it is object literal
//key in javascript are always in string form
//for an object there is only one key like person object has only one age as key(property)


//example-1:

const person={name:"Rajendra Thapa",
age:22,
hobbies:["swimming","watching movies","riding"] //we can insert array inside object
};


// . (dot notation) OR ["key"] (bracket notation) is used to access data of object 

console.log(person.name);

console.log(person["hobbies"]);


//to add key value pair in previously created object . OR [] is used
person.gender="male";
person["hair_color"]="black";
person.height=5.6;
person["weight"]=57;


const key="email";
person[key]="hellonepal@gmail.com"; //bracket can compute value of variable which is inside it
console.log(person);

//difference bwtn dot and brakcet notation is we use bracket notation to access key having multiple
//word e.g. to access key with keyName=> "person hobbies"


// how to iterate object
//i) for in loop
//ii) Object.keys


//Example of for in loop


// for(let key in person){
//     console.log(key);   //1st iteration ma key=name 2nd iteration ma key=age and so only 
//     //key name will be shown as output not value of key
// }

// for(let key in person){
//     console.log(person[key]);   //1st iteration ma key="name" 2nd iteration ma key="age" and so only 
//     //bracket compute the value of key vairable so "name"="Rajendra Thapa" "age" =22 and so on.
// }



for(let key in person){
    console.log(`${key}:${person[key]}`);   //to print both key and value in console
}


//Example of Object.keys method

const car={
    brand:"tesla",
    color:"black",
    speed:240,
};

console.log(Object.keys(car));  //Object.keys() give an array of keys
console.log(typeof Object.keys(car)) ;  //since Object.keys gives array so its type is object
console.log(Array.isArray(Object.keys(car)));   //to check array given by Object.keys() 
//is array or not

//use for of loop 
//to access the value of an array of keys of object given by Object.keys() method 
for(let key of Object.keys(car)){
    console.log(car[key]);
}




