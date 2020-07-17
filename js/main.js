// --------------------------------------------------
// Navigation Toggle
// --------------------------------------------------
(function($){
  $(".nav-toggle").click(function(e){
    e.preventDefault();
    $(".nav-toggle").toggleClass("active");
    $(".nav-menu").toggleClass("active");
    $(".nav-overlay").toggleClass("active");
  })
  $(".nav-overlay").click(function(e){
    e.preventDefault();
    $(".nav-toggle").toggleClass("active");
    $(".nav-menu").toggleClass("active");
    $(".nav-overlay").toggleClass("active");
  })
  $(".nav-menu li a").click(function() {
    $(".nav-toggle").removeClass("active");
    $(".nav-menu").removeClass("active");
    $(".nav-overlay").removeClass("active");
  });
})(jQuery);





