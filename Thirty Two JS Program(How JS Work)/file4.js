// Example-2 of how JS work
let foo="foo";
console.log(foo);
function getFullName(firstName,lastName){
    console.log(arguments);
    let myVar="var inside function";
    console.log(myVar);
    fullName=firstName+" "+lastName;
    return fullName;
}
const personName=getFullName("rajendra","thapa");
console.log(personName);