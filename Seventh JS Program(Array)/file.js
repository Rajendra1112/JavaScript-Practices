"use strict";

//Array in Javascript


//example-1
let numbers=[1,2,44,55];
console.log("elements in array are:",numbers);
console.log("item of last index:",numbers[numbers.length-1]);
console.log("length of numbers is:",numbers.length);

// example-2
let vegetables=["tomato","potato","onion"];
console.log(vegetables);
console.log(typeof vegetables); //object comes as output as array is called an object

//to access specific element or item of array
console.log(vegetables[0]); //item of 0th index
console.log(vegetables[1]); //item of 1st index
console.log(vegetables[2]); //item of 2nd index

//to find length of array
console.log(vegetables.length);

//to determine whether it is array or not
console.log(Array.isArray(vegetables)); 

//methods of array 
// i) push      --insert item at last 
// ii) pop      --remove item from last and return that item
// iii)unshift  --insert item at the beginning
// iv)shift     --remove item from the beginning and return that item


//example of push method 
let items=["apple","ball","cat","dog"];
console.log("items of items array are:",items);
items.push("elephant");
items.push(222);
items.push(null);
console.log("items in items array after push operation are:",items);

//example of pop method
let elements=[22,10,67,99];
console.log("elements before pop operation are:",elements);
elements.pop();
elements.pop();
console.log("elements after pop operation are:",elements);

//pop method remove element from array and return that element
let collections=["ball","bat","boot"];
console.log("items in collection array are:",collections);
let poppedItem=collections.pop();
console.log("items in collection array after pop operation are:",collections);
console.log("popped item from collection array is:",poppedItem);

//example of unshift method
elements.unshift(666);
elements.unshift(1000);
elements.unshift(123);
console.log("elements after unshift operation are:",elements);

//example of shift method
elements.shift();
elements.shift();
elements.shift();
elements.shift();
console.log("elements after shift operation are:",elements);

//shift method remove element from the beginning of an array and return that element
let removedItem=elements.shift();
console.log("removed item from element array is:",removedItem);

//difference between primitive and  reference type

//primitive type
let a=10;
let b=a;
console.log()
a++;
console.log(a);
console.log(b);


//reference type i.e. array is a pointer it is mutable update in one array will affect another too
//as both the array pointer hold the address of same array in heap
let array1=[25,8,1,2];
let array2=array1;
console.log(array1===array2);   //they hold same address so output is true

array1.push(33);
console.log(array1);
console.log(array2);

//to clone array i.e. to create duplicate array 


//by using slice method
let physicalGroup=["physics","chemistry","computer","nepali"];
let bioGroup1=physicalGroup.slice(0);

console.log(physicalGroup===bioGroup1); //they hold different address so output is false
console.log(bioGroup1);

//by using contatinate with empty array
let bioGroup2=[].concat(physicalGroup);
console.log(physicalGroup===bioGroup2); //they hold different address so output is false
console.log(bioGroup2);

//by using spread operator i.e. ...
let bioGroup3=[...physicalGroup];
console.log(physicalGroup===bioGroup3); //they hold different address so output is false
console.log(bioGroup3);


//making cloe and adding extra element


//way 1
let bioGroup4=physicalGroup.slice(0).concat(["biology"]);   //first array is clone then extra       element is concatinate to new array
console.log(bioGroup4);

//way 2
let bioGroup5=[].concat(physicalGroup,["math","botany"]);
console.log(bioGroup5);

//way 3
let bioGroup6=[...physicalGroup,"item1","item2","item3"];
console.log(bioGroup6);

//to contatinate arrray i.e. to add different array
let a1=[11,3,5,6];
let a2=[44,22,123];
let a3=[...a1,...a2]; //here a3 clone a1 and a2 i.e. elements of both array are present in a3




