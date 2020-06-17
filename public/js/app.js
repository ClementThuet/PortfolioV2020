//caroussel
var angle = 0;
function galleryspin(sign, idSpinner) { 
spinner = document.querySelector("#spinner"+idSpinner);
if (sign) { angle = angle + 45; } else { angle = angle - 45; }
spinner.setAttribute("style","-webkit-transform: rotateY("+ angle +"deg); -moz-transform: rotateY("+ angle +"deg); transform: rotateY("+ angle +"deg);");
}

function isMobileDevice() {
    return (typeof window.orientation !== "undefined") || (navigator.userAgent.indexOf('IEMobile') !== -1);
};
$(document).ready(function() {
    //if($(window).width() < 991 ){
    if(isMobileDevice() ){ 
        var myElement = document.getElementById('spinner3');
        // create a simple instance
        var mc = new Hammer(myElement);
        console.log("this is a mobile device");
        mc.on("panleft panright tap press", function(ev) {
            ev.preventDefault();
            if(ev.type === "panright" || ev.type === "press"){
                galleryspin("-", 3);
            }
            else{
                galleryspin("", 3);
            }
        });
    }
});

//Change css property on scroll 
/*$(document).ready(function() {
    var windowHeight = $(window).height();
    // Transition effect for navbar 
    $(window).scroll(function() {
      // checks if window is scrolled more than 500px, adds/removes solid class
      if($(this).scrollTop() > windowHeight*0.4 && $( window ).width() > 991 ){ 
          $('.navbar').addClass('navbar-solid');
      } else {
          $('.navbar').removeClass('navbar-solid');
      }
    });
});
*/