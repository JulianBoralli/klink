$( document ).on('turbolinks:load', function() {


  // Read
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

	canvasPalette.selectable = true;


  // Draw
  // var canvasDraw = new ResponsiveCanvas('canvas-draw', {
  //   isDrawingMode: true
  // });

  // generateDrawing(canvasDraw);

  // canvasDraw.setDimensions({width: '98vw', height: '40vw'}, {
  // cssOnly: true
  // });

});
