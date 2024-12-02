//computed properties
const key1="objkey1";
const key2="objkey2";

const value1="myValue1";
const value2="myValue2";

const obj={
    [key1]:value1,  //bracket compute the variable inside it and give corresponding of that variable
    [key2]:value2
};

console.log(typeof obj);
console.log(Array.isArray(Object.keys(obj)));
console.log(obj);

//spread operator in array

//spreading array's elements
let array1=[7,11,12,9,];
let array2=[17,111,122,954,];
let newArray1=[...array1,...array2,1234,999,788];   //clone of array1,array2 and added new elements
let newArray2=[array1,array2];  //array1 and array2 will consider as each single element of newArray2
console.log(newArray2);

//spreading string
let message="hello";
let newArray3=[...message];
console.log(newArray3);


//spreading string
let newArray4=[..."Nepal"];
console.log(newArray4);


//spreading number string
let newArray5=[..."1234"];
console.log(newArray5);

//NOTE: Number e.g. 1234 will not spread because it is not iterable as we know string and reference type are iterable as they are the collection of items



//spread operator in object
const obj1={
    key1:"value1",
    key2:"value2"
};

const obj2={
    key3:"value3",
    key4:"value4"
};


//cloning of obj1 and obj2 in single new object
const newObj={
    ...obj1,
    ...obj2
}

console.log(newObj);

//NOTE: one object has one key of same name

//same key multiple times in same object
const horse={
    noOfLegs:4,
    color:"black",
    noOfLegs:3  //noOFLegs key's value will be overite so latest value will be 3 
};

console.log(horse);

//key with same name in multiple object but when spread in single new object it will get overrite 
//with the latest value 
const cat1={
    species:"domestic",
    color:"white",
    breed:"ragdoll"
}

const cat2={
    eye_color:"black",
    weight:15,
    breed:"burmese cat"
};

const catData={
    ...cat2,
    ...cat1,
}
//here cat1 and cat2 have same key name so latest one i.e. based on order of object placed
//in catData there will be the final value of that key

console.log(catData);


//another example of spread operator in object

//spread of string inside object
const example1={
    ..."abcdejiowopioik"
};
console.log(example1);


//spread of array inside object
const example2={
    ...["apple","ball","cat"]
};
console.log(example2);

//destructuring of object
//destructuring of object
//destructuring of object

const band={
    bandName:"axe",
    popularSong:"chiya bari ma",
    bandFormedYear:1992,
    members:3,
};
console.log(band);

//remainProps property is an object not an array here so remaining properties will store here
let{bandName,popularSong,...remainProps}=band;
console.log(`name of band:${bandName}, popularSong of band:${popularSong}`);

console.log(typeof remainProps);
console.log(Array.isArray(remainProps));    //gives false result as it is not array it is object
console.log("reamin properties of band:",remainProps);

//to rename variable other then key name and store value of object's key on it
const{bandName:nameOfBand}=band;
console.log(nameOfBand);


