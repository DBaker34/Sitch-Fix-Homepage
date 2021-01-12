const hamburger = document.getElementById("hamburger");
const dropDown = document.getElementById("dropdown-content");

hamburger.addEventListener("click", function(){
    dropDown.classList.toggle("fullhide");
});