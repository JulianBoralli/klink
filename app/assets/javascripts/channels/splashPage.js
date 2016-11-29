$( document ).on('turbolinks:load', function() {

  $('#game-logo').hide();
  setTimeout(function(){
    document.getElementById('fade').className = 'disappear';
    $('#fade').hide();
    var fade = $('#banner').fadeIn('slow')
    fade.addClass('small').animate({'margin-top':'0'})
  }, 2200);

  setTimeout(function(){
    $('#game-logo').fadeIn();
  }, 5000)

});
