// Mind Blowing ES6 JS techniques

//  let and const => to declare variable and constant

//  arrow functions => these are the types of function. It has three variations

//  template literals => `` (backticks)

//  default paramenters => yedi function parameter lai value nadida telse default value lincha bhane

//  rest and spread => three dots (...) jasko kam chai context anushar different different huncha

//  destructuring => array or object bata data baira nikalnu and store it in variable

//  classes => to make objects from the particular blue print

//  promises => to take care of async code in js

//  async await => to take care of async code but more eligently than promises

//  tyr catch => to take care of the code when it provides errors

// In details

//          --- let and const ---
/*
- Both are used to store value. let is used to make variable and cosnt is used to make constant.

- Both behave in different way i.e. we can change the value of variable which is declared by using let keyword but cannot do that to constant declared by const

- there is no need to initialized value to variable during declaration using let but initialization of value to constant is mendatory when we used const to declare constant because once constant is declared, it's value cannot be changed anywhere.

- some similarties in let and const
::both are in es6
::let and const are added in window object
::both are braces scoped
*/

// Example
// const a; this line throw error of missing initialization which means we didn't give the value to constant and value of constant will not be update in future so we got error

//          --- arrow function ---
/* 
purano js ma teen parkar ko function theyo
::function statement 
::function expression
::anonymous function

naya js ma ek prakar ko function cha jasko teen variation huncha
::basic fat arrow function
::fat arrow function with 1 paramenter
::fat arrow function with implict return
*/

// basic fat arrow function

let fun1 = () => {
  console.log("basic fat arrow function");
};
// here we make function using arrow and store that function in fun1 variable because if we do not store it in variable then that function will not have the name and without the name we cannot call the function .

fun1(); //we need to use small bracket after the variable to invoke the function which is store in that variable

// fat arrow function with 1 paramenter
// for fat arrow function with 1 parameter we can remove the fat()
// example
// without removving fat()
let fun2 = (value1) => {
  console.log(value1);
};

fun2(12.11);

// removing fat()
/*
let fun3 = recevingVariable => {
  console.log(recevingVariable);
};

fun3(324);
*/

// so if there is only one parameter in arrow function then we can remove fat() otherwise not i.e. if there are more than one parameter then we need to put fat() during function defination.

// fat arrow function with implict return
// implict means we cannot write by ourself or hami le na bhenko kura , hame le na lekhayako kura, hami le instruct na gareko kura

// example

let fun4 = () => 2054; //here function return value 2054  to fun4 variable
console.log(fun4()); //to check what is return in fun4

//              --- template literals or backtick --- (``)
// this is used to do calculations inside string or for sting interpolation(means we can replace the variable with its value while displaying the results and for this we need to use $ sign before middle bracket like ${here we can perform mathematical calculation or mention the variable whose value can be displayed in output}

// example
console.log(`${2 + 2} is equal to 4`); //math calculation
let fName = "rajendra";
let lName = "thapa";
console.log(`Full name is: ${fName} ${lName}`); //string interpolation

//              --- default parameters ---
// to assign default value to function parameter so that instead of giving undefine value in output when value is not passed to the respective parameter when function call

// example
// fucntion without default parameter
/*
function defaultParameterFunction(prm1, prm2) {
  console.log(prm1 + " " + prm2);
}

defaultParameterFunction(22, 33); //pem1=22 and prm2=33
defaultParameterFunction(111); //prm1=111 and prm2=undefined
defaultParameterFunction(); //pr1=undefined and prm2=undefined
*/

// function with default parameter here we assign defalut value to the parameters of function
function defaultParameterFunction(prm1 = 10, prm2 = 50) {
  console.log(prm1 + " " + prm2);
}

defaultParameterFunction(22, 33); //pem1=22 and prm2=33
defaultParameterFunction(111); //prm1=111 and prm2=50 which is default value
defaultParameterFunction(); //pr1=10 and prm2=50 which are default values

//          --- rest and spread (...) ---
//rest ko used jaba hami lai remaining values auta variable ma store garaunu cha bhane in the form of array bhane
function abcd(a, b, c, ...d) {
  console.log(a);
  console.log(b);
  console.log(c);
  console.log(d);
}

abcd(22, 33, 32, 11, 232, 55, 66, 77);
// here when we call function we passed arguments more than parameters so first three arguments will be received by a,b,c variables and the remaining will be store in d variable in the form of array as we used rest operator before d variable

//spread ko used jaba hami lai kunai auta location ma arkako values place garnu cha bhane like arrays wa object ko values lai copy garnu cha bhane arko location ma

let a = [0, 9, 8, 7, 6, 5, 4];
console.log(a);

let b = [...a]; //here all the values of a will be spread in b location and instead of copying reference both have their own values which is possible due to spread operator
console.log(b);

//          --- destructuring ---

// destructuring of array
let arr1 = [22, 21, 88, 90, 0];

/*
let val1=arr1[0];
let val2=arr1[1];
*/

// instead of assigning value of arry separetely in variables we can use destructuring concept
let [val1, val2] = arr1; // yeha hamle variables lai array ko bhitra rakheyako chua kina bhane hami array ko value destructuring gardai chau i.e. val1= arr1[0], val2=arr1[1]
console.log(val1, val2);

// if we want to store value in variable by skiping index then we need to use commas

let [num1, , num2, , num3] = arr1; //here we get value of index 0, index2, index4 of arr1 array.
console.log(num1, num2, num3);

// destructuring of object

let obj1 = {
  name: "ram",
  age: 20,
  hairColor: "brown",
};

/* instead of accessing value of object by doing objectName.keyName (like obj1.name, obj1.age, obj1.hairColor) we can destructure it and access it in simple way as follow
 */

let { name, hairColor } = obj1; //yeha hamle variables lai curly bracket bhitra rakhayako chau kina bhane hami object ko value lai destructuring gardai chau jasle garda yo example ma name variable ma obj1 ko name key ko value store huncha ra haiColor variable ma obj1 ko hairColor key ko value.

console.log(name, hairColor);

//        --- Promise ---

//example 3 of promise then and catch
// the below tasks are asynchronous tasks which means they are not executed in order but we need to execute them in order i.e. we need to executed one after another i.e.only after completing first task, second task needs to start its execution and so on.

/* tasks are as follows
- paila gharma au
- gate khola ra ghar bhitra jau
- khana pakau ra khau
- sutna jau
*/

//solution for above task is to create second promise inside the then statement of first promise  and return it ,to create thrid promise inside the then statement of second promise and return it and same technique followed further.

let ansOfPromise1 = new Promise((res, rej) => {
  return res("paila gharma au");
});
// here this whole promise will return resolve state (fulfilled state) with promise result of value "paila gharma au" string

console.log(ansOfPromise1); //to check promise

// since the promise is fulfilled so then statement will get executed and the parameter of callback func of then statement will received the promise result (i.e. value passed as an argument when res() function get called)

let ansOfPromise2 = ansOfPromise1.then(function (data) {
  console.log(data);
  // here we create another new promise inside then statement of first promise and return it .
  return new Promise((res, rej) => {
    return res("gate khola ra ghar bhitra jau");
  });
});

// the created new promise will be store in ansOfPromise2 variable which will be in fulfilled state so then statement of promise2 will get executed
let ansOfPromise3 = ansOfPromise2.then(function (data) {
  console.log(data);
  // promise3 is created inside then statment of promise2
  return new Promise((res, rej) => {
    return res("khana pakau ra khau");
  });
});

let ansOfPromise4 = ansOfPromise3.then(function (data) {
  console.log(data);
  return new Promise((res, rej) => {
    return res("sutna jau");
  });
});

ansOfPromise4.then(function (data) {
  console.log(data);
});

//  ---- async await ---
// yedi function bhitra async code cha bhane hami teslai promise bhitra rakhera resolve garchau ra promise resolve bhayo bhane hami then statement chalauchau ho yehi promise ra then statement lai hatayara hami async code lai ajhai ramro tarkia le handle garna sakchua with the help of async await

// example
//first using then to async code which is inside function

function abcd() {
  fetch("https://randomuser.me/api/") //async code
    .then(function (rawData) {
      // fetch will return raw data(data in unreadable format) from requested url which will be received by rawData parameter of then statement (because fetch async code return fulfilled state)

      //to convert raw data into readable data and return it
      return rawData.json();
    })
    .then(function (realData) {
      //to receive the readable data and print it
      console.log(realData);
    });
}

abcd();

// now without using then statement same task can be done as follow in more elegant way

// we need to use async keyword just before the closet parent function of async code

async function efgh() {
  // use await keyword just before async code kina ki async code le kati bela ans layara dincha hamlai tha hudina so hami await keyword used garera wait garchau
  // auta await le auta then hataucha
  // fetch le raw data return garcha so hami teslai variable ma store garchau
  let rawData = await fetch("https://randomuser.me/api/");

  // yo talako line ma rawData ko aagadi await lekhana bhane error aucha kina ki talako line sync code huncha ra mathi ko async code chalnu bhanda aagadi talako sync code chalcha jasko karan rawData ma kuna data aayako hudina tesko matlab jaba data nai chaina ta k lai json ma convert garne so error falcha teskaran hami await used garera yeslai ne async code banauchau ra mathi ko async code chalesi matra talako async code chalcha which make proper order and we get the result
  let finalData = await rawData.json();
  console.log(finalData);
}

efgh();

//      --- try catch ---

// try catch is used to handle line of code which throw error in js as js is interpreted langauge and error in one line will stop the remaining lines of code to execute so to solve this we use try catch

// inside try block write that line of code which throw error then in catch block received that error inside the paramenter and print that error
