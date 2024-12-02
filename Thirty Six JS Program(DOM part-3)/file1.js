// ############### innerHTML to add new html element ############### 

//first select the element and then perform operation
// const todoList = document.querySelector(".todo-list");

//only for checking whether element is selected or not
// console.log(todoList.innerHTML);

//adding element using innerHTML property
// todoList.innerHTML+="<li>todo 2</li>";
// todoList.innerHTML+="<li>todo 3</li>";
// todoList.innerHTML+="<li>todo 4</li>";

// when we should use and when we shouldn't never use for adding new element
//only use when you need to change whole innerHTML of any html element

//like in the above case we can use innerHTML for changing whole innerHTML
// todoList.innerHTML = "<li>New Todo</li>"; //here whole innerHTML got changed


// ############### create element and add that element in the page ###############
//widely used method for creating element and adding element in page
//document.creatElement("elementName")
//append
//prepend
//after
//before


//firt need to select the element like we are going to insert li element inside ul whose class
// is todo-list so select todo-list ul first then perform operation

//only for checking whether element is selected or not
const todoList=document.querySelector(".todo-list");

//only for checking whether element is selected or not
console.log(todoList);

//create html elements
const newListItem2=document.createElement("li");
const newListItem3=document.createElement("li");
const newListItem4=document.createElement("li");
const newListItem5=document.createElement("li");

//adding text inside created elements
newListItem2.textContent="todo 2";
newListItem3.textContent="todo 3";
newListItem4.textContent="todo 4";
newListItem5.textContent="todo 5";



//Now, adding the created element inside ul or before ul or after ul

//inside ul but after those inner HTML elements which are already present
todoList.append(newListItem2);

//inside ul but before those inner HTML elements which are already present
todoList.prepend(newListItem3);

//outside the ul => just before begin of ul element
todoList.before(newListItem4);

//outside the ul => just after the end of ul element
todoList.after(newListItem5);


// ############### to remove the child node of selected node ###############
todoList.removeChild(newListItem3);


// ############### another way to add new element in the page ###############
todoList.insertAdjacentHTML("afterend","<li>teach student</li>");
todoList.insertAdjacentHTML("beforebegin","<li>teach student</li>");

