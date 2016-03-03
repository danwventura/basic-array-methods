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

console.log(output);

//Adding event listener for click --> "You clicked (section) section"
// article.addEventListener("click", function ())