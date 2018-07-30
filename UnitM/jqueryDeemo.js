//select by id
$("#ameen").hide();
//select by tag
$("textarea").css("background-color", "red");
//select by class
$("bg").hide();
//select by attribute
$("[for]").hide();
//select the first input element
$("input:first").hide();
//ad event listener to the button
//()=> shortcut for function
$("#mybutton").on("click", ()=>{
    $("textarea").fadeToggle();
});