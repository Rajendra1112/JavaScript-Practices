//Loops

//getElementsByClassName, getElementsByTagName, querySelectorAll return multiple
//selected element in arraylike object form
//i.e. we have indexing and length features i.e. we can use loops

//HTMLCollection
// const navItems = document.getElementsByTagName("a"); //HTMLCollection
// console.log(navItems);

//using loop to style the elements of navItems
//i)simple for loop
//ii)for of loop
//iii)forEach method

//using simple for loop
// for (let i = 0; i < navItems.length; i++) {
//   console.log(navItems[i]);
//   navItems[i].style.backgroundColor = "white";
//   navItems[i].style.color = "black";
//   navItems[i].style.padding="0.5rem";
//   navItems[i].style.fontWeight="bold";
// }

//using for of loop
// for(let navItem of navItems){
//     console.log(navItem);
//     navItem.style.backgroundColor="white";
//     navItem.style.color = "black";
//     navItem.style.padding="0.5rem";
//     navItem.style.fontWeight="bold";
// }

//NOTE: HTMLCollection doesn't support for each method for iteration

// let navItems = document.getElementsByTagName("a"); //HTMLCollection
// navItems=Array.from(navItems);  //converting array like object intot array
// console.log(typeof navItems);
// console.log(Array.isArray(navItems));
// navItems.forEach((navItem)=>{
//     console.log(navItem);
//     navItem.style.backgroundColor="white";
//     navItem.style.color = "black";
//     navItem.style.padding="0.5rem";
//     navItem.style.fontWeight="bold";
// })


//NodeList
const navItems = document.querySelectorAll("a");
console.log(navItems);
//using loop to style the elements of navItems
//i)simple for loop
//ii)for of loop
//iii)forEach method

//using simple for loop
// for (let i = 0; i < navItems.length; i++) {
//   const navItem = navItems[i];
//   navItem.style.backgroundColor = "white";
//   navItem.style.color = "black";
//   navItem.style.padding = "0.5rem";
//   navItem.style.fontWeight = "bold";
// }

// using for of loop
// for(let navItem of navItems){
//     navItem.style.backgroundColor="white";
//     navItem.style.color = "black";
//     navItem.style.padding="0.5rem";
//     navItem.style.fontWeight="bold";
// }

//using forEach method
navItems.forEach((navItem)=>{
    navItem.style.backgroundColor="white";
    navItem.style.color = "black";
    navItem.style.padding="0.5rem";
    navItem.style.fontWeight="bold";
})