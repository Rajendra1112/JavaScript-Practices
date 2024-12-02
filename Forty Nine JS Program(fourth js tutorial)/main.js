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

//

// example of promise, then and catch

// is the random number is less than 5 or greater then 5

var ans = new Promise(function (res, rej) {
  var number = Math.floor(Math.random() * 10);
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

// here Promise will be in three state pending, reslove or reject state. First Promise will be in pending state and when it get executed it will be either in resove state or reject state. If Promise get resolve then then will get executed otherwise catch will get executed.

//
