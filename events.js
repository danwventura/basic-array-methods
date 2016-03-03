//Making variables to be used later
var output = document.getElementById("output-target");
var keypress = document.getElementById("keypress-input");
var guineaPig = document.getElementById("guinea-pig")
var colorBtn = document.getElementById("add-color");
var hulkifyBtn = document.getElementById("make-large");
var addBorderBtn = document.getElementById("add-border");
var roundBorder = document.getElementById("add-rounding");
var header = document.getElementById("page-header");
var title = document.getElementById("page-title")
var article = document.getElementsByName("article-section")
//getElementsByName --> [always returns array]


//Adding event listener for click --> "You clicked (section) section"
// article.addEventListener("click", function (){
  // output.innerHTML = ""

// })


//Adding Event Listener to display message when mouse hovers over title.
title.addEventListener("mouseover", function  (){
  output.innerHTML = "You moved your mouse over the header!";
})

//Adding Event Listener to display message when mouse leaves title.
title.addEventListener("mouseleave", function  (){
  output.innerHTML = "You left header!";
})

//Adding Event Listener to change guineapig text color.
colorBtn.addEventListener("click", function (){
  guineaPig.classList.toggle("blue");
})

//Adding Event Listener to change guineapig text to larger font.
hulkifyBtn.addEventListener("click", function(){
  guineaPig.classList.toggle("large");
})

//Adding Event Listener to give guineapig a border.
addBorderBtn.addEventListener("click", function(){
  guineaPig.classList.toggle("border");
})

//Adding Event Listener to change border radius of guineapigs border
roundBorder.addEventListener("click", function(){
  guineaPig.classList.toggle("rounded");
})

