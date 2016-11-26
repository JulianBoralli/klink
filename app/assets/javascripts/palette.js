function generatePalette(canvasPlay, canvasPalette) {

	var letterImages = $('#letter-images').children();

	$.each(letterImages, function(i, el) {

		var letter = new fabric.Image(el, {
		  char: String.fromCharCode(65 + i),
		  left: i >= 13 ? ((50 * (i - 13)) + (5 * (i - 13))) : ((50 * i) + (5 * i)),
		  top: i >= 13 ? 70 : 10,
		  width: 50,
		  height: 50
		});

		letter.lockMovementX = true;
		letter.lockMovementY = true;
		letter.lockScalingX = letter.lockScalingY = true;
		letter.lockRotation = true;

		letter.toObject = function () {
			return {
				letter: String.fromCharCode(65 + i),
				left: this.left
			};
		};

		letter.on('selected', function() {
		  console.log(this.char);

			if (this.canvas.lowerCanvasEl.id === "canvas-palette") {
				var clone = fabric.util.object.clone(this);
	    	clone.lockMovementX = false;
				clone.lockMovementY = false;
	    	canvasPlay.add(clone);

				// animation on adding the block
				clone.animate('height', 100,  {
				  onChange: canvasPlay.renderAll.bind(canvasPlay),
				  duration: 800,
				  easing: fabric.util.ease.easeOutBounce
				});

				clone.animate('width', 100,  {
					onChange: canvasPlay.renderAll.bind(canvasPlay),
					duration: 800,
					easing: fabric.util.ease.easeOutQuad
				});

				canvasPalette.deactivateAll().renderAll();
			};
		});

		canvasPalette.add(letter);

	});

	// to bound the canvas so the elements won't disappear
	canvasPlay.on ("object:moving", function (event) {
		var el = event.target;

		el.left = el.left < el.getBoundingRectWidth() / 2 ? el.getBoundingRectWidth() / 6 : el.left;
		el.top = el.top < el.getBoundingRectHeight () / 2 ? el.getBoundingRectHeight() / 6 : el.top;

		var right = el.left + el.getBoundingRectWidth() / 2;
		var bottom = el.top + el.getBoundingRectHeight() / 2;

		el.left = right > canvasPlay.width - el.getBoundingRectWidth() / 2 ? canvasPlay.width - el.getBoundingRectWidth() / 1 : el.left;
		el.top = bottom > canvasPlay.height - el.getBoundingRectHeight() / 2 ? canvasPlay.height - el.getBoundingRectHeight() / 1 : el.top;
	});

	// active object has red border
	// overlapping changes opacity
	canvasPlay.on({
	'object:moving': onChange,
	'object:scaling': onChange,
	'object:rotating': onChange,
	'object:selected': borders
});

function borders(object){
	var activeObject = object.target;
	activeObject.set({'borderColor': 'red'});
};

function onChange(options) {
	options.target.setCoords();
	canvasPlay.forEachObject(function(obj) {
		if (obj === options.target) return;
		obj.setOpacity(options.target.intersectsWithObject(obj) ? 0.4 : 1);
	});
}


	var searchElement = document.getElementById('search-img');

	var searchButton = new fabric.Image(searchElement, {
	  left: 950,
	  top: 10,
	  width: 100,
	  height: 100
	});

	searchButton.lockMovementX = true;
	searchButton.lockMovementY = true;
	searchButton.lockScalingX = searchButton.lockScalingY = true;
	searchButton.lockRotation = true;

	searchButton.on('selected', function() {
	  console.log('clear');
    searchAjax(event, canvasPlay);
	});

	var clearElement = document.getElementById('clear-img');

	var clearButton = new fabric.Image(clearElement, {
	  left: 1200,
	  top: 10,
	  width: 100,
	  height: 100
	});

	clearButton.lockMovementX = true;
	clearButton.lockMovementY = true;
	clearButton.lockScalingX = clearButton.lockScalingY = true;
	clearButton.lockRotation = true;

	clearButton.on('selected', function() {
	  console.log('clear');
    canvasPlay.clear();
	});


	canvasPalette.add(searchButton, clearButton);

	canvasPalette.selection = false;


	// trash can to delete single character
	var trashCanElement = document.getElementById('trashcan-img');
	var	trashCan = new fabric.Image(trashCanElement, {
		left: 1320,
		top: 10,
		width: 100,
		height: 100
	});
	canvasPalette.add(trashCan);

	trashCan.lockMovementX = true;
	trashCan.lockMovementY = true;
	trashCan.lockUniScaling = true;
	trashCan.lockRotation = true;
	trashCan.on('selected', function(){
		var activeObject = canvasPlay.getActiveObject();
		canvasPlay.remove(activeObject);
		canvasPalette.deactivateAll().renderAll();
	});

};


function searchAjax(event, canvasPlay) {
	console.log(canvasPlay);

	var letters = canvasPlay._objects;

	var action = "/letters/show";
	var method = "GET";

 	var jsonLetters = JSON.stringify(letters);
	var data = {array: jsonLetters};
	console.log(data);
	$.ajax({
		url: action,
		method: method,
		data: data,
		dataType: 'json'
	})
	.done(function(response) {
		console.log(response)
		// $('#coordinates').empty();
		// $('#coordinates').append(response);

	})
	.fail(function(error) {
		console.log(error);
		alert(error.status);
	});

};
