// promise and setTimeout
// I want to resolve / reject after 2 second
function myPromise() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      value = true;
      if (value) {
        resolve();
      } else {
        reject();
      }
    });
  }, 2000);
}

myPromise()
  .then(() => {
    console.log("promise resolve successfully.");
  })
  .catch(() => {
    console.log("promise reject");
  });
