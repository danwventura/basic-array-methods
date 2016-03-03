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
  output.innerHTML = "You moved your mouse over the header";
})

