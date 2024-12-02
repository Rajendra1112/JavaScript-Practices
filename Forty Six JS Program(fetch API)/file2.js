// Error Handling in Fetch API

const URL = "https://jsonplaceholder.typicode.com/postss";

// fetch method always return Promise that gets resolved so always then block will
// get executed and control will never go to catch block

//fetch method return Promise that gets rejected only when there is no internet connection

fetch(URL)
  .then((response) => {
    if (response.ok) {
      //return promise which is returned by response.json()
      return response.json(); //internally it will be return Promise.resolve(response.json())
    } else {
      throw new Error("something went wrong");
    }
  })
  .then((data) => {
    console.log(data);
  })
  .catch((error) => {
    console.log("inside catch block");
    console.log(error);
  });
