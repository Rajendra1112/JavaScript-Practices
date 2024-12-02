//select element using querySelector

//by using id name
const mainHeading = document.querySelector("#main-heading");
console.log(mainHeading);

//by using class name
const header = document.querySelector(".header");
console.log(header);

//to select multiple element having same class name.

//NOTE:Here if we only use querySelector instead of querySelectorAll then js will return only
//that element which come first having nav-item class name
const navItem = document.querySelectorAll(".nav-item");
console.log(navItem);

