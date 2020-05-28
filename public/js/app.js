//caroussel
var angle = 0;
function galleryspin(sign) { 
spinner = document.querySelector("#spinner");
if (!sign) { angle = angle + 45; } else { angle = angle - 45; }
spinner.setAttribute("style","-webkit-transform: rotateY("+ angle +"deg); -moz-transform: rotateY("+ angle +"deg); transform: rotateY("+ angle +"deg);");
}

//navbar sticky
$(document).ready(function() {
    var windowHeight = $(window).height();
    // Transition effect for navbar 
    $(window).scroll(function() {
      // checks if window is scrolled more than 500px, adds/removes solid class
      if($(this).scrollTop() > windowHeight*0.4) { 
          $('.navbar').addClass('navbar-solid');
      } else {
          $('.navbar').removeClass('navbar-solid');
      }
    });
});