$( document ).on('turbolinks:load', function() {

  setTimeout(function(){
   document.getElementById('fade').className = 'disappear';
   $('#fade').hide();

   var fade = $('#banner').fadeIn('slow');
   fade.addClass('small').animate({'margin-top':'-30'});

   
 }, 2800);

});
