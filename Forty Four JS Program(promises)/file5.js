// Promise.resolve() method

// Prmoise.resolve() return Promise which can be consumed using .then method
// const myPromise = Promise.resolve(15);
// myPromise.then((valueOnFulfilled) => {
//   console.log(valueOnFulfilled);
// });

// .then method always return Promise object
function Promise1() {
  return new Promise((resolve, reject) => {
    resolve("Hi");
  });
}

Promise1()
  .then((value) => {
    console.log(value);
    value += "Rajendra";
    return value; //internally return Promise.resolve(value) bhai ra cha ra Promise.resolve() le
    //Promise object return garcha
  })
  .then((value) => {
    console.log(value);
    value += "Thapa.";
    return value;
  })
  .then((value) => {
    console.log(value);
    value += "How are you?";
    return value;
  })
  .then((value) => {
    console.log(value);
  });
