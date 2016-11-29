function home(){
  $('#home-banner').on('click', function(){
    $(this).addClass('animated rubberBand')
      setTimeout(function(){
        $('#home-banner').removeClass('animated rubberBand')
    }, 300)
  });

  $('.hgame-logo').on('click', function(){
    $(this).addClass('animated tada')
      setTimeout(function(){
        $('.hgame-logo').removeClass('animated tada')
    }, 300)
  });
};
