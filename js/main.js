
// header image changer=============================
$(document).ready(function(){
  $('.slider').slider();
});
// end header image changer=========================

/* NAVIGATION
===================================================*/ 

// sidenav hamburger toggle==========================
$(document).ready(function(){
  $('.sidenav').sidenav();
});
// end sidenav toggle===============================

// Scroll Into View=================================
const scrollElmnt = ((position) => {
  let elmnt = document.getElementById(position)
  elmnt.scrollIntoView({
    behavior: 'smooth',
    block:'start'
  });   

})
// End Scroll into View=============================



