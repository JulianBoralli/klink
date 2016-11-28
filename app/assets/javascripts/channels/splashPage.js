$( document ).on('turbolinks:load', function() {

  setTimeout(function(){
   document.getElementById('fade').className = 'disappear';
  }, 3000);

  setTimeout(function(){
    $('#banner').fadeIn('slow');
  }, 3600);

});
