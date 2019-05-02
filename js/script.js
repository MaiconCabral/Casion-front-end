$(function () { 

    $(".formDate").mask("99/99/9999", {placeholder: " "});
    $(".formTelefone").mask("(99) 99999-999?9");
    $(".formCPF").mask("999.999.999-99");
    $(".formRG").mask("99.999.999-9");
    $(".formCEP").mask("99999-999");



  //Menu Mobile-3
  $('.mobile-nav-button').on('click', function() {
    //alert("oiiii")
   // Toggles a class on the menu button to transform the burger menu into a cross
   $( ".mobile-nav-button .mobile-nav-button__line:nth-of-type(1)" ).toggleClass( "mobile-nav-button__line--1");
   $( ".mobile-nav-button .mobile-nav-button__line:nth-of-type(2)" ).toggleClass( "mobile-nav-button__line--2");  
   $( ".mobile-nav-button .mobile-nav-button__line:nth-of-type(3)" ).toggleClass( "mobile-nav-button__line--3");  
   
   // Toggles a class that slides the menu into view on the screen
   $('.mobile-menu-three').toggleClass('mobile-menu--open');
   return false;
 });

});    
