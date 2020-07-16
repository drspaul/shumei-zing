$(document).ready(function($){
   $(".navbar-toggle").click(function(e){
      e.preventDefault();
      $(".navbar-toggle").toggleClass("active");
      $(".main-nav").toggleClass("active");
    })
});



//menu toggle
(function($){
    $('.nav-toggle').click(function(e){
        e.preventDefault();
        $('.nav-toggle').toggleClass('active');
        $('.nav-menu').toggleClass('active');
        $('.nav-overlay').toggleClass('active');
    })
    $('.nav-overlay').click(function(e){
        e.preventDefault();
        $('.nav-toggle').toggleClass('active');
        $('.nav-menu').toggleClass('active');
        $('.nav-overlay').toggleClass('active');
    })
})(jQuery);