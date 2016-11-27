$( document ).on('turbolinks:load', function() {

  $(function(){
   if($('body').is('.writegame')){
     writeGame(createResponsiveCanvas());
   }
 });

  $(function(){
   if($('body').is('.read-game')){
    readGame(createResponsiveCanvas());
   }
 });

});
