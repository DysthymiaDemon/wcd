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

function fontsmaller(){
  applyall.className = "smaller-size";
}
function fontdefault(){
  applyall.className = "default-size";
}
function fontbigger(){
  applyall.className = "larger-size";
}
function idlesmall(){
  smallbutton.className = "selected-button smaller-size";
}
function hoversmall(){
  smallbutton.className = "selected-button smaller-size whiteout";
}
function idlemiddle(){
  defaultbutton.className = "selected-button";
}
function hovermiddle(){
  defaultbutton.className = "selected-button whiteout";
}
function idlelarge(){
  largebutton.className = "selected-button larger-size";
}
function hoverlarge(){
  largebutton.className = "selected-button whiteout";
}

smallbutton.addEventListener("click",fontsmaller);
defaultbutton.addEventListener("click",fontdefault);
largebutton.addEventListener("click",fontbigger);
smallbutton.addEventListener("mouseover",hoversmall);
smallbutton.addEventListener("mouseout",idlesmall);
defaultbutton.addEventListener("mouseover", hovermiddle);
defaultbutton.addEventListener("mouseout",idlemiddle);
largebutton.addEventListener("mouseover",hoverlarge);
largebutton.addEventListener("mouseout",idlelarge);