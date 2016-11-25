$( document ).on('turbolinks:load', function() {
	
	var canvas = new fabric.Canvas('canvas');

	generateAlphabet(canvas);

});