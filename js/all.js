$(document).ready(function() {
  $('.header .openlist').on('click',  function(e){
     e.preventDefault();
     $('.header').toggleClass('open');
 });
 $('.aside .openlist').on('click',  function(e){
  e.preventDefault();
  $('.aside').toggleClass('open');
});
});