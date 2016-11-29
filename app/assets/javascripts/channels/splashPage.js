$( document ).on('turbolinks:load', function() {

  setTimeout(function(){
   document.getElementById('fade').className = 'disappear';
 }, 2800);

  setTimeout(function(){
    var fade = $('#banner').fadeIn('slow');
    fade.addClass('small').animate({'margin-top':'-20'}, 1000);
  }, 3500);

});
