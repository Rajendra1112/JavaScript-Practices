// Promisifying XHR requests and chaining using then method
const URL = "https://jsonplaceholder.typicode.com/posts";

function sendRequest(method, url) {
  return new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest();
    xhr.open(method, url);
    xhr.onload = () => {
      if (xhr.status >= 200 && xhr.status < 300) {
        resolve(xhr.response);
      } else {
        reject(new error("something went wrong"));
      }
    };
    xhr.send();
    xhr.onerror = () => {
      console.log("error in network");
    };
  });
}

sendRequest("GET", URL)
  .then((response) => {
    const data = JSON.parse(response);
    return data; //internally return Promise.resolve(data) yesko matlab Promise return
    //garchar jo resolve huncha return gareko value sanga i.e. data
  })
  .then((newData) => {
    const id = newData[3].id;
    return id; //internally return Promise.resolve(id) yesko matlab Promise return
    //garchar jo resolve huncha return gareko value sanga i.e. id
  })
  .then((valueOfID) => {
    const url2 = `${URL}/${valueOfID}`;
    return sendRequest("GET", url2);
  })
  .then((newResponse) => {
    const data2 = JSON.parse(newResponse);
    console.log(data2);
  })
  .catch((valueOnFailure) => {
    console.log(valueOnFailure);
  });
