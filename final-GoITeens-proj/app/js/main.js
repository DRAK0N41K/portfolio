$(document).ready(function() {
var headerHeight = $('.navbar').outerHeight();
  $('.scroll-a').click(function(e) {

      var linkHref = $(this).attr('href');
      $('html, body').animate({
        scrollTop: $(linkHref).offset().top - headerHeight
      }, 400);

    e.preventDefault();
  });

});
