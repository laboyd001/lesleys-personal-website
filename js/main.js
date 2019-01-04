console.log("howdy")


// sidenav hamburger toggle==========================
  $(document).ready(function(){
    $('.sidenav').sidenav();
  });
// end sidenav toggle===============================

// header image changer=============================
$(document).ready(function(){
  $('.slider').slider();
});
// end header image changer=========================


// scroll to element================================
function aboutScroll() {
    let elmnt = document.getElementById("about");
    elmnt.scrollIntoView();
  }

function expScroll() {
    let elmnt = document.getElementById("experience");
    elmnt.scrollIntoView();
  }
// end scroll to element
