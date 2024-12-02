// event
// three ways to link event


// i) by using element's attribute inside the index page
// <button class="btn btn-headline" onclick="console.log('you clicked me');">Learn More</button>


// ii)by using property of selected element (which is treated as object)
// const btn=document.querySelector(".btn-headline");
// btn.onclick=function(){
//     console.log("you clicked me");
// }


// iii)by using addEventListener method
//syntax: .addEventListener("eventName",callbackFunction)

const btn=document.querySelector(".btn-headline");
//simple function
// function clickMe(){
//     console.log("clicked successfully !!!");
// }
// btn.addEventListener("click",clickMe);


//anonymous function
// btn.addEventListener("click",function(){
//     console.log("clicked successfully !!!");
// })

//way-3 arrow function
// btn.addEventListener("click",()=>{
//     console.log("clicked successfully");
// })


//this keyword inside eventListener callback
btn.addEventListener("click",function(){
    console.log("learn more button clicked successfully");
    console.log("value of this:",this);
})