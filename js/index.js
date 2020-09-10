$(document).ready(function() {
  $(window).scroll(function() {
    if ($(document).scrollTop() > 10) {
      $("#seccion1") .fadeIn(3000);
      $("#seccion2") .fadeIn(3000);
    }
    if ($(document).scrollTop() > 120) {
      $("#vector") .fadeIn(500);
    }
  });
});
