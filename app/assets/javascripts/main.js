$( document ).on('turbolinks:load', function() {

  console.log("Ullo")

  var canvasPlay new ResponsiveCanvas('canvas-play');

	var canvasPalette = new ResponsiveCanvas('canvas-palette');

	generatePalette(canvasPlay, canvasPalette);

  canvasPlay.setDimensions({width: '98vw', height: '60vh'}, {
    cssOnly: true
  });

  canvasPalette.setDimensions({width: '98vw', height: '20vh'}, {
    cssOnly: true
  });

	canvasPalette.selectable = true;

});