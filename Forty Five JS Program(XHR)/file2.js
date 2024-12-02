// Error handling in XHR requests
const URL = "https://jsonplaceholder.typicode.com/post";
const xhr = new XMLHttpRequest();
xhr.open("GET", URL);
xhr.onload = () => {
  //to handle error which is happen due to mistake in client side
  if (xhr.status >= 200 && xhr.status < 300) {
    const response = xhr.response;
    const data = JSON.parse(response); //JSON to JS Object
    console.log(data);
  } else {
    console.log("something is wrong in client side");
  }
};

//to handle newtork error when we make re
xhr.onerror = () => {
  console.log("problem with network");
};
xhr.send();
