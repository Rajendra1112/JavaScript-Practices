//inner HTML

const headline = document.querySelector(".headline");
console.log(headline.innerHTML); //to display innerHTML of div having class name headline

//changing innerHTML of div having class name headline
headline.innerHTML = "<h2>InnerHTML is changed</h2>";
console.log(headline.innerHTML);

//adding more innerHTML elements in headline div
headline.innerHTML += '<button class="btn">Explore More</button>';

//since button element is added as an innerHTML elements for headline div so styling that button
const exploreButton = document.querySelector(".headline .btn");
console.log(exploreButton);
exploreButton.style.border = "2px solid white";
exploreButton.style.borderRadius = "1rem";
exploreButton.style.backgroundColor = "rgb(44, 55, 63)";
exploreButton.style.padding = "1rem";
exploreButton.style.color = "#fff";
exploreButton.style.marginTop = "1rem";
exploreButton.style.fontWeight = "bold";
