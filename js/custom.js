$(function(){
  $(window).scroll(function() {
     if($(window).scrollTop() >= 100) {
       $('#sticky--nav').addClass('shrink');
     }
    else {
      $('#sticky--nav').removeClass('shrink');
    }
  });
});