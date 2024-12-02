// function that returns promise

function fryRicePromise() {
  const kitchen = ["vegitable", "rice", "salt", "tomato", "potato"];
  return new Promise((resolve, reject) => {
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
}

//consume promise

fryRicePromise()
  .then((onFulfillment) => {
    console.log(onFulfillment);
  })
  .catch((onRejection) => {
    console.log(onRejection);
  });
