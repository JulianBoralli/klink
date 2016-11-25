$( document ).on('turbolinks:load', function() {

	var canvasPlay = new fabric.Canvas('canvas-play');

	var canvasPalette = new fabric.Canvas('canvas-palette');

	fabric.Object.prototype.hasControls = false;

	generatePalette(canvasPlay, canvasPalette);

	canvasPalette.selectable = true;

});
