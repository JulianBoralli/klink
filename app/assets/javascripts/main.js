$( document ).on('turbolinks:load', function() {

   $(function(){
    if($('body').is('.readgame')){

  var canvasPlay = new ResponsiveCanvas('canvas-play');

	var canvasPalette = new ResponsiveCanvas('canvas-palette');

	fabric.Object.prototype.hasControls = false;

	generatePalette(canvasPlay, canvasPalette);

  canvasPlay.setDimensions({width: '98vw', height: '40vw'}, {
    cssOnly: true
  });

  canvasPalette.setDimensions({width: '98vw', height: '13vw'}, {
    cssOnly: true
  });

  }
  });
  // runs mathGame on page load of math#Index
 $(function(){
    if($('body').is('.mathgame')){
      mathGame();
    }
  });



});
