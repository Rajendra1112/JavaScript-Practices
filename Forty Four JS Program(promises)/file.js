const kitchen = ["vegitables", "rice", "salt", "tomato", "potato"];

//create promise

//here the callback function inside costructor is called executor function of promise
//which also pass two function(resolve,reject) as an arguments
const fryRice = new Promise((resolve, reject) => {
  if (
    kitchen.includes("vegitable") &&
    kitchen.includes("rice") &&
    kitchen.includes("salt")
  ) {
    resolve("fry rice");
  } else {
    reject("promise broken");
  }
});

//consume promise

fryRice
  .then((onFulfillment) => {
    console.log(onFulfillment);
  })
  .catch((onRejection) => {
    console.log(onRejection);
  });
