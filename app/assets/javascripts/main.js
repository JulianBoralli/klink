$( document ).on('turbolinks:load', function() {

$(function(){
   if($('body').is('.read-game')){
     readGame();
   }
 });

  // Read
 //  var canvasPlay = new ResponsiveCanvas('canvas-play');

	// var canvasPalette = new ResponsiveCanvas('canvas-palette');

	// fabric.Object.prototype.hasControls = false;

	// generatePalette(canvasPlay, canvasPalette);

 //  canvasPlay.setDimensions({width: '98vw', height: '40vw'}, {
 //    cssOnly: true
 //  });

 //  canvasPalette.setDimensions({width: '98vw', height: '13vw'}, {
 //    cssOnly: true
 //  });

	canvasPalette.selectable = true;


});
