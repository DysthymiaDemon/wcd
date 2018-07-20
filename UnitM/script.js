/* 
   Revisions Bookstore and Cafe 
   Filename: script.js

   Author:   Ameen Khan
   Date:     19/07/2018
   HTML5 and CSS3 Illustrated Unit M, Visual Workshop
 */
/* create variables */
var smallbutton = document.querySelector(".smaller-size");
var applyall = document.querySelector("html");

function fontsmaller() {
  applyall.className = "smaller-size";
}

smallbutton.addEventListener("click",fontsmaller);