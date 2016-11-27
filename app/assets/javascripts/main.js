$( document ).on('turbolinks:load', function() {

  $(function(){
    if($('body').is('.read-game')){
      readGame();
    }
  });

  $(function(){
    if($('body').is('.draw-game')){
      drawGame();
    }
  });

});
