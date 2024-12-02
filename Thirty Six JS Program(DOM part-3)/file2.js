//clone node

//to select element
const ul=document.querySelector(".todo-list");
console.log(ul);

//to create element
const newListItem1=document.createElement("li");

//to add text node(simply a text) to created element
newListItem1.textContent="new todo";

//clone created element and assigned to variable
const newListItem2=newListItem1.cloneNode(true);

//add created element and its clone on the page
ul.append(newListItem1);
ul.prepend(newListItem2);

//example-2
const mainHeading=document.querySelector(".headline");
// console.log(mainHeading);
const newMainHeading=document.createElement("h1");
newMainHeading.textContent="I'm Rajendra";
mainHeading.append(newMainHeading);

//clone node
const newMainHeading2=newMainHeading.cloneNode(true);
mainHeading.prepend(newMainHeading2);

