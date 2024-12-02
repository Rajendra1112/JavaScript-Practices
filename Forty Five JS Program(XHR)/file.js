// XHR Request

const URL = "https://jsonplaceholder.typicode.com/posts";
const xhr = new XMLHttpRequest();
// console.log(xhr);

// step-1
// console.log(xhr.readyState); //to check readyState before open method
xhr.open("GET", URL);
// console.log(xhr.readyState); //to check readyState after open method

//assign function to onreadystatechange property of xhr object
// xhr.onreadystatechange = () => {
//   if (xhr.readyState === 4) {
//     const response = xhr.response;
//     const data = JSON.parse(response); //JSON to JS Object
//     console.log(data);
//   }
// };

//above function execute every time when readyState change and we add if condition so to make it
//more simple we have onload property where we assign function that execute only when readyState=4
xhr.onload = () => {
  const response = xhr.response;
  const data = JSON.parse(response); //JSON to JS Object
  console.log(data);

  //to make XHR request for that post whose id=4

  //sub-step-1
  const id = data[3].id;
  const xhr2 = new XMLHttpRequest();
  const URL2 = `${URL}/${id}`;
  xhr2.open("GET", URL2);
  xhr2.onload = () => {
    console.log(xhr2.response);
    console.log(typeof xhr2.response);
    const data2 = JSON.parse(xhr2.response);
    console.log(data2);
    console.log(typeof data2);
  };

  //sub-step-2
  xhr2.send();
};

// step-2
xhr.send();
