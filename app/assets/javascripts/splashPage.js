$( document ).on('turbolinks:load', function() {

  $('#game-logo').hide();

  setTimeout(function(){
    $('#fade').fadeTo(0).hide();
    var fade = $('#banner').fadeIn('slow')
    fade.addClass('small').animate({'margin-top':'0'})
  }, 2400);

  setTimeout(function(){
    $('#game-logo').fadeIn();
  }, 5000)

  $('#banner').on('click', function(){
    $(this).addClass('animated rubberBand')
      setTimeout(function(){
        $('#banner').removeClass('animated rubberBand')
    }, 300)
  });



});
