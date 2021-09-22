$(document).ready(function(){
  $(".owl-carousel").owlCarousel();
});

var page = document.querySelector("body");
var themeButton = document.querySelector(".themeButton");

themeButton.onclick = function() {
page.classList.toggle("lightTheme");
page.classList.toggle("darkTheme");

if(page.classList.contains("darkTheme") == true){
   themeButton.value ="Светлая тема";
} else {
   themeButton.value ="Темная тема";
}
};