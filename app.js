$(function(){
  
  var mainHeight = $('.js-header').height();
  $(window).on('scroll', function(){
    $('.js-header').toggleClass('header-active', $(this).scrollTop() > mainHeight);
  });


});
