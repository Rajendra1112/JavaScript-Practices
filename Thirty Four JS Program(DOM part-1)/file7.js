//selecting multiple elements by using getElementByClassName() method
const navItems = document.getElementsByClassName("nav-item"); //return HTMLCollection which
//is array like object
console.log(navItems);

//navItems is array like object i.e. it satisfied length property,can access through index

console.log(navItems[0]);
console.log(navItems[2]);

//selecting multiple elements by using querySelectorAll() method
const menuItems = document.querySelectorAll(".nav-item"); //return NodeList which is array
//like object
console.log(menuItems);

//menuItems is array like object i.e. it satisfied length property,can access through index
console.log(menuItems[1]);
