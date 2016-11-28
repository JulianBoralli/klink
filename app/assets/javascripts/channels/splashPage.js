$( document ).on('turbolinks:load', function() {

  setTimeout(function(){
   document.getElementById('fade').className = 'disappear';
  }, 3000);

});
