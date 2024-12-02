//hoisting

//fisrt function is called later we declare function
//this type of feature is enabled only for function declaration not for function expression
//or for arrow function
hello1();
function hello1(){
    console.log("hello world 1");
}

//first function is called later we initialize function
//Output: Uncaught ReferenceError: Cannot access 'hello2' before initialization
// hello2();
// const hello2=function(){
//     console.logI("hello world 2");
// }


//first function is called later we initialize function
//Output: Uncaught ReferenceError: Cannot access 'hello2' before initialization
// hello3();
// const hello3=()=>{
//     console.log("hello world 3");
// }


//                  ##### function inside functino ####
const fun1=()=>{
    console.log("we are inside function 1");
    const sum=(a,b)=>a+b;   //arrow function 1
    const mul=(a,b)=>a*b;   //arrow function 2
    console.log(sum(2,3));
    console.log(mul(4,5));
}

fun1(); //outer function is called


//              #### Lexical Scope ####
const var1="value1";
function myApp(){
console.log("inside myApp function",var1);
function myFunc1(){
console.log("inside myFunc1",var1);
const myFunc2=function(){
console.log("inside myFunc2 function",var1);
const myFunc3=()=>{
console.log("inside myFunc3 function",var1);
}
myFunc3();
}
myFunc2();
}
myFunc1();
}
myApp();



//               ##### Block Scope vs Function Scope #####

//let and const are block scope
//var is a function scope



//let and const variable are used only with in the block scope
//if we use vairable outside of block scope error will be shown 



{
    let adddress="ktm";
    console.log(adddress);  //address variable is used only with in this block scope
}
    // console.log(adddress);      //Output: Uncaught ReferenceError: adddress is not defined


{
    const sms="hello";
    console.log(sms);  //name variable is used only with in this block scope
}
// console.log(sms);               //Output: Uncaught ReferenceError: sms is not defined



let fruit1="apple";     //define in global scope(in main block) so it can be used anywhere 

{
    console.log(fruit1);
}

{
    console.log(fruit1);
}

//var is a function scope

{
    var adddress="bhaktapur";
}
    console.log(adddress);
    var vegitable="onion";
{
    console.log(adddress);
        console.log(vegitable);
}

//default parameter

function sum(a,b=0){    //if b is undefined value of b will be 0 by default
    return a+b;
}

console.log(sum(2));    //single argument so b is not assigned i.e. b is undefined
console.log(sum(33,44));


//rest parameter

function sumAllNumbers(...numbers){
    let total=0;
    for(let number of numbers){
        total+=number;
    }
    return total;
}
const ans=sumAllNumbers(3,4,5,6,10,2);
console.log(ans);