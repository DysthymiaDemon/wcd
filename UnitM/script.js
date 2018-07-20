/* 
   Revisions Bookstore and Cafe 
   Filename: script.js

   Author:   Ameen Khan
   Date:     19/07/2018
   HTML5 and CSS3 Illustrated Unit M, Visual Workshop
 */
console.log("script.js now running...");
/* create variables */
var smallbutton = document.querySelector(".smaller-size");
var largebutton = document.querySelector(".larger-size");
var defaultbutton = document.querySelector(".selected-button");
var applyall = document.querySelector("html");

function fontsmaller() {
  applyall.className = "smaller-size";
}
function fontdefault() {
  applyall.className = "selected-button";
}
function fontbigger() {
  applyall.className = "larger-size";
}

smallbutton.addEventListener("click",fontsmaller);
largebutton.addEventListener("click",fontbigger);
defaultbutton.addEventListener("click",fontdefault);