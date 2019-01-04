console.log("howdy")


// sidenav hamburger toggle==========================

  $(document).ready(function(){
    $('.sidenav').sidenav();
  });

// end sidenav toggle===============================

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
