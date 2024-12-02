//classList property

//to determine the available classes of the selected element or JS object
const box=document.querySelector(".section-todo");
console.log(box.classList);

//to add new class name on the selected element
box.classList.add("bg-dark");
console.log(box.classList);

// to remove class name from the selected element or JS Object
box.classList.remove("bg-dark");
console.log(box.classList);

//to check whether mention class name is present or not in selected element
console.log(box.classList.contains("container"));


