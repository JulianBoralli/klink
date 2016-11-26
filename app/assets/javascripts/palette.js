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
		  // Trigger API call for text2Speech individual letter
			if (this.canvas.lowerCanvasEl.id === "canvas-palette") {
				var clone = fabric.util.object.clone(this);
	    	clone.lockMovementX = false;
				clone.lockMovementY = false;
	    	canvasPlay.add(clone);
			}
		});

		canvasPalette.add(letter);

	});

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
	  console.log('search');
	  // Ajax json data of all letters inside canvasPlay [{}, {}]
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
		// function to call the APIs with response
		$("#image-result").append("<img src='" +response+ "'/>");
		// $('#coordinates').empty();
		// $('#coordinates').append(response);

	})
	.fail(function(error) {
		console.log(error);
		alert(error.status);
	});

};

