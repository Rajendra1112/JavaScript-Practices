//static list vs live list

//when we select elements using querySelectorAll it gives static list
//when we select elements using getElementsBySomething it gives live list

//############# static list #############
//using querySelectorAll
const listItems=document.querySelectorAll(".unordered-list-1 li");
console.log(listItems);

//create new list item
const sixthListItem=document.createElement("li");
sixthListItem.textContent="item 6";

//selecting ul element
const ul=document.querySelector(".unordered-list-1");
console.log(ul);

//adding the created new list item inside ul
ul.append(sixthListItem);
console.log("after adding new li element",listItems);

//here there are six li elements but in NodeList array like object return by querySelectorAll
//we get only five li elements so it becomes static list


//############# static list #############
//using getElementsBySomething

//first selecting ul element from document
const unorderedList2=document.querySelector(".unordered-list-2");
console.log(unorderedList2);

//then selecting all li elements from ul element
const todoListItems=unorderedList2.getElementsByTagName("li");
console.log(todoListItems);

//creating new li element
const newLiItems=document.createElement("li");
newLiItems.textContent="todo 6";

//adding new created li element inside the ul element
unorderedList2.append(newLiItems);
console.log("after adding new li element",todoListItems);

//get dimension of element
//getBoundingClientRect() method is used

const box=document.querySelector(".container");
const info=box.getBoundingClientRect();
console.log(info);

//to get specific dimension of selected element then we use dimension name after the method
const heightInfo=box.getBoundingClientRect().height;
console.log(heightInfo);

