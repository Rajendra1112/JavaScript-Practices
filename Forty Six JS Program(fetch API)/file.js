// fetch API

const URL = "https://jsonplaceholder.typicode.com/posts";

//fetch method return Promise which is resolve with Response value so response=Response
fetch(URL)
  .then((response) => {
    return response.json(); //here json method of Response is called so that it return Promise
    //which is resolve with value(array of JS Objects) which is obtained after parsing JSON data
  })
  .then((data) => {
    console.log(data); //data=[object1,object2,....]
  });
