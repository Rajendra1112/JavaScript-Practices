//change text of element

//textContent and innerText property 

const mainHeading=document.getElementById("main-heading");
console.log(mainHeading.textContent);   //show all the text of the element
console.log(mainHeading.innerText);     //show only those text whose display property is
//other than none


mainHeading.textContent="Hello World";  //to change text content
console.log(mainHeading.textContent);