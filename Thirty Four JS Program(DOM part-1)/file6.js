//getAttribute and setAttribute

//Example-1
//select input element whose id is userName from div whose class is form-group 
const userName=document.querySelector(".form-group input");
console.log(userName);

//to access attribute value of selected element
console.log(userName.getAttribute("type"));
console.log(userName.getAttribute("id"));


//to change value of id attribute of selected element
userName.setAttribute("id","personName");
console.log(userName.getAttribute("id"));

//Example-2
//select first label element from div whose class is from-group and change for attribute value
const labelForUsername=document.querySelector(".form-group label");
console.log(labelForUsername);
console.log(labelForUsername.getAttribute("for"));
labelForUsername.setAttribute("for","personName");
console.log(labelForUsername.getAttribute("for"));

