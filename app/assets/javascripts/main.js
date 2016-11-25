$( document ).on('turbolinks:load', function() {
	
	var canvasPlay = new fabric.Canvas('canvas-play');

	var canvasPalette = new fabric.Canvas('canvas-palette');

	generatePalette(canvasPlay, canvasPalette);

	canvasPalette.selectable = true;

});