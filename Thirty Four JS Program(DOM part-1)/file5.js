//changing style of element using style property

//accessing element
const navItems=document.querySelector(".nav-items");
console.log(navItems);
console.dir(navItems);

//to check type of navItems variable as it is assigned with return object
console.log(typeof navItems);

//since navItems is an object and it contains style object which also acts as property for 
//navItems object
console.log(navItems.style);

//to style the element
navItems.style.backgroundColor="gray";
navItems.style.padding="10px";
navItems.style.fontWeight="bold";

// Conclusion: methods used to select elements return element in object form.
//that return object contains lots of properties like textContent,onClick,style 
//which itself are an objects and this object also conatains properties
//e.g. padding,margin which are the properties of style object