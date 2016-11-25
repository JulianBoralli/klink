$( document ).on('turbolinks:load', function() {
	
	var canvasPlay = new fabric.Canvas('canvas-play');

	var canvasPalette = new fabric.Canvas('canvas-palette');

	generatePalette(canvasPalette);

	canvasPalette.selection = false;
	canvasPalette.item(0).selectable = false;

});