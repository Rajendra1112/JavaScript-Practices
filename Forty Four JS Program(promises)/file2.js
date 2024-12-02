// promise and setTimeout are handled by web api
console.log("script start");
const kitchen = ["vegitable", "rice", "salt", "tomato", "potato"];
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

fryRice
  .then((onFulfillment) => {
    console.log(onFulfillment);
  })
  .catch((onRejection) => {
    console.log(onRejection);
  });

setTimeout(() => {
  console.log("inside setTimeout method");
}, 1000);

console.log("script end");
