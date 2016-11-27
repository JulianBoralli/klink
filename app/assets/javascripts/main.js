$( document ).on('turbolinks:load', function() {


  $(function(){
   if($('body').is('.read-game')){
    readGame(createResponsiveCanvas());
   }
 });



});
