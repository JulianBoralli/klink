function splash() {
  var audio = new Audio('audio/type.wav');
  $(audio).prop("currentTime", 1);
  audio.play();

  $('#game-logo').hide();

  setTimeout(function(){
    $('#fade').fadeTo(0).hide();
    var fade = $('#banner').fadeIn('slow')
    fade.addClass('small').animate({'margin-top':'0'})
    var swoosh = new Audio('audio/swoosh.wav');
    swoosh.play();
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

  $('.game-logo').on('click', function(){
    $(this).addClass('animated tada')
      setTimeout(function(){
        $('#banner').removeClass('animated tada')
    }, 300)
  });

};
