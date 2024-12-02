// Consume Promises with async and Await

const URL = "https://jsonplaceholder.typicode.com/posts";

// async function always return Promise
async function getPosts() {
  // await => is used to control the execution of js
  // due to use of await JS wait on that line  until the promise resolve with some value
  const receiveData = await fetch(URL);
  if (!receiveData.ok) {
    throw new Error("something went wrong");
  }
  // here receivedData=Response
  // we will call json method of Response as it return Promise
  // which is resolve with value(array of JS Objects) which is obtained after parsing JSON data
  const data = await receiveData.json();

  // we return value assign to data variable which is array of objects
  return data;
}
getPosts()
  .then((data) => {
    console.log(data);
  })
  .catch((error) => {
    console.log(error);
  });

// async in arrow function
// const getPosts = async () => {
//   const receiveData = await fetch(URL);
//   if (!receiveData.ok) {
//     throw new Error("something went wrong");
//   }
//   const data = await receiveData.json();
//   return data;
// };
// getPosts()
//   .then((data) => {
//     console.log(data);
//   })
//   .catch((error) => {
//     console.log(error);
//   });
