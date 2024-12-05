// Asynchronous JS

// Synchronous ==> euta task complete bhaya pachi arko task garnu i.e. gari rahayako task complete na bhaya sama arko task ma jump hudina

// Asynchronous ==>sabai task ekai sath start garnu jas madheya jun sukai task pani jun sukai bela complete huna sakcha i.e. order bhane hudina yesma (pailo line ko statement chado execute huncha bhane hudina third line ko ne huna sakcha)

// Example of synchronous code
console.log("hey");
console.log("response of hey");

// here first line execute first then after its completion second line get executed

// Example of asynchronous code
console.log("hello 1");
setTimeout(function () {
  console.log("hello 2");
}, 2000);
console.log("hello 3");
// here line 1 execute first then line 3 and line 2 at last because line 1 and line 3 are synchronour code so it will move to main stack and line 2 will move to side stack. First task of main stack will get executed one by one then when main stack got empty it will ask if the task of side stack is ready or not it ready side stack task will move to main stack and execution process continue. This asking and responsing process is also called event loop.

// Is JS asynchronous programming?
// ==>No its not. JS is a single thread programming that means it only process one task at a time. IT will not process multiple tasks simultaneously. For example if there are two task a and b. then it will process some part of a then switch to b and complete some part of b then again switch to a and so on. The switching process is very fast that is in millisecond.

// Conclusion:
// Javascript is the synchronous single-threaded language but with the help of event-loop and promises, JavaScript is used to do asynchronous programming.

// Some of the code in JS that make JS code asynchronous code
// setTimeout()
// setTimeInterval()
// Promise
// then catch
// fetch
// XMLHttpRequest
// async await

//      ---- Promise ---
/* Promise will be in three state
- pending 
- fulfilled
- rejected

if promise got fulfilled then statement will run

if promise got rejected catch statement will run
*/

// Promise will be used to take care of async code i.e. if we don't know hou much time will the async code take then we keep those code inside promise

// example 1 of promise, then and catch
let ansOfPromise1 = new Promise((res, rej) => {
  // we know by default if condition is true so from this code rej() function will get returned which means promise is in reject state due to which catch statement will get executed
  if (false) {
    return res();
  } else {
    return rej();
  }
});

ansOfPromise1
  .then(function () {
    console.log("promise got resolved");
  })
  .catch(function () {
    console.log("promise got reject");
  });

// example 2 of promise, then and catch
// is the random number less than 5 or greater then 5
// here we store the result return by Promise in some variable
var ans = new Promise(function (res, rej) {
  var number = Math.floor(Math.random() * 10);
  // if generated number is less 5 promise is resolved otherwise promise is reject
  if (number < 5) {
    return res();
  } else {
    return rej();
  }
});

console.log(ans);

ans
  .then(() => {
    console.log("generated number is less than five");
  })
  .catch(() => {
    console.log("generated number is greater than five");
  });
