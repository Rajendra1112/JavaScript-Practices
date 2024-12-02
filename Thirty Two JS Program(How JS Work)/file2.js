// Example-2 of how JS work
console.log(this);
console.log(window);
console.log(myFunction);
console.log(fullName);
function myFunction(){
    console.log("this is myFunction");
}
var firstName="rajendra";
var lastName="thapa";
var fullName=firstName+" "+lastName;
console.log(fullName);
