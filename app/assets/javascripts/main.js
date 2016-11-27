$( document ).on('turbolinks:load', function() {

  $(function(){
   if($('body').is('.writegame')){
     writeGame();
   }
 });
 
});
