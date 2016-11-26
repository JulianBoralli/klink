function generatePalette(canvasPlay, canvasPalette) {
	
	var letterImages = $('#letter-images').children();
	var percentage = 0.05;

	$.each(letterImages, function(i, el) { 

		var letter = new fabric.Image(el, {
		  char: String.fromCharCode(65 + i),
		  left: i >= 13 ? ((50 * (i - 11.1)) + (5 * (i - 10))) : ((50 * (i + 2)) + (5 * (i + 2))),
		  top: i >= 13 ? 70 : 10,
		  width: canvasPalette.width*percentage,
		  height: canvasPalette.width*percentage
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
				clone.width = 60;
				clone.height = 85;
	    	clone.lockMovementX = false;
				clone.lockMovementY = false;
	    	canvasPlay.add(clone); 
	    	canvasPalette.deactivateAll().renderAll();
			}
		});

		canvasPalette.add(letter);

	});



// SNAPPING

	var snap = 20;
	var canvasWidth = document.getElementById('canvas-play').width;
	var canvasHeight = document.getElementById('canvas-play').height;

function findNewPos(distX, distY, target, obj) {
	// See whether to focus on X or Y axis
	if(Math.abs(distX) > Math.abs(distY)) {
		if (distX > 0) {
			target.setLeft(obj.getLeft() - target.getWidth());
		} else {
			target.setLeft(obj.getLeft() + obj.getWidth());
		}
	} else {
		if (distY > 0) {
			target.setTop(obj.getTop() - target.getHeight());
		} else {
			target.setTop(obj.getTop() + obj.getHeight());
		}
	}
}

canvasPlay.on('object:moving', function (options) {
	// Sets corner position coordinates based on current angle, width and height
	options.target.setCoords();

	// Don't allow objects off the canvas
	if(options.target.getLeft() < snap) {
		options.target.setLeft(0);
	}

	if(options.target.getTop() < snap) {
		options.target.setTop(0);
	}

	if((options.target.getWidth() + options.target.getLeft()) > (canvasWidth - snap)) {
		options.target.setLeft(canvasWidth - options.target.getWidth());
	}

	if((options.target.getHeight() + options.target.getTop()) > (canvasHeight - snap)) {
		options.target.setTop(canvasHeight - options.target.getHeight());
	}

	// Loop through objects
	canvasPlay.forEachObject(function (obj) {
		if (obj === options.target) return;

		// If objects intersect
		if (options.target.isContainedWithinObject(obj) || options.target.intersectsWithObject(obj) || obj.isContainedWithinObject(options.target)) {

			var distX = ((obj.getLeft() + obj.getWidth()) / 2) - ((options.target.getLeft() + options.target.getWidth()) / 2);
			var distY = ((obj.getTop() + obj.getHeight()) / 2) - ((options.target.getTop() + options.target.getHeight()) / 2);

			// Set new position
			findNewPos(distX, distY, options.target, obj);
		}

		// Snap objects to each other horizontally

		// If bottom points are on same Y axis
		if(Math.abs((options.target.getTop() + options.target.getHeight()) - (obj.getTop() + obj.getHeight())) < snap) {
			// Snap target BL to object BR
			if(Math.abs(options.target.getLeft() - (obj.getLeft() + obj.getWidth())) < snap) {
				options.target.setLeft(obj.getLeft() + obj.getWidth());
				options.target.setTop(obj.getTop() + obj.getHeight() - options.target.getHeight());
			}

			// Snap target BR to object BL
			if(Math.abs((options.target.getLeft() + options.target.getWidth()) - obj.getLeft()) < snap) {
				options.target.setLeft(obj.getLeft() - options.target.getWidth());
				options.target.setTop(obj.getTop() + obj.getHeight() - options.target.getHeight());
			}
		}

		// If top points are on same Y axis
		if(Math.abs(options.target.getTop() - obj.getTop()) < snap) {
			// Snap target TL to object TR
			if(Math.abs(options.target.getLeft() - (obj.getLeft() + obj.getWidth())) < snap) {
				options.target.setLeft(obj.getLeft() + obj.getWidth());
				options.target.setTop(obj.getTop());
			}

			// Snap target TR to object TL
			if(Math.abs((options.target.getLeft() + options.target.getWidth()) - obj.getLeft()) < snap) {
				options.target.setLeft(obj.getLeft() - options.target.getWidth());
				options.target.setTop(obj.getTop());
			}
		}

		// Snap objects to each other vertically

		// If right points are on same X axis
		if(Math.abs((options.target.getLeft() + options.target.getWidth()) - (obj.getLeft() + obj.getWidth())) < snap) {
			// Snap target TR to object BR
			if(Math.abs(options.target.getTop() - (obj.getTop() + obj.getHeight())) < snap) {
				options.target.setLeft(obj.getLeft() + obj.getWidth() - options.target.getWidth());
				options.target.setTop(obj.getTop() + obj.getHeight());
			}

			// Snap target BR to object TR
			if(Math.abs((options.target.getTop() + options.target.getHeight()) - obj.getTop()) < snap) {
				options.target.setLeft(obj.getLeft() + obj.getWidth() - options.target.getWidth());
				options.target.setTop(obj.getTop() - options.target.getHeight());
			}
		}

		// If left points are on same X axis
		if(Math.abs(options.target.getLeft() - obj.getLeft()) < snap) {
			// Snap target TL to object BL
			if(Math.abs(options.target.getTop() - (obj.getTop() + obj.getHeight())) < snap) {
				options.target.setLeft(obj.getLeft());
				options.target.setTop(obj.getTop() + obj.getHeight());
			}

			// Snap target BL to object TL
			if(Math.abs((options.target.getTop() + options.target.getHeight()) - obj.getTop()) < snap) {
				options.target.setLeft(obj.getLeft());
				options.target.setTop(obj.getTop() - options.target.getHeight());
			}
		}
	});

	options.target.setCoords();

	// If objects still overlap

	var outerAreaLeft = null,
	outerAreaTop = null,
	outerAreaRight = null,
	outerAreaBottom = null;

	canvasPlay.forEachObject(function (obj) {
		if (obj === options.target) return;

		if (options.target.isContainedWithinObject(obj) || options.target.intersectsWithObject(obj) || obj.isContainedWithinObject(options.target)) {

			var intersectLeft = null,
			intersectTop = null,
			intersectWidth = null,
			intersectHeight = null,
			intersectSize = null,
			targetLeft = options.target.getLeft(),
			targetRight = targetLeft + options.target.getWidth(),
			targetTop = options.target.getTop(),
			targetBottom = targetTop + options.target.getHeight(),
			objectLeft = obj.getLeft(),
			objectRight = objectLeft + obj.getWidth(),
			objectTop = obj.getTop(),
			objectBottom = objectTop + obj.getHeight();

			// Find intersect information for X axis
			if(targetLeft >= objectLeft && targetLeft <= objectRight) {
				intersectLeft = targetLeft;
				intersectWidth = obj.getWidth() - (intersectLeft - objectLeft);

			} else if(objectLeft >= targetLeft && objectLeft <= targetRight) {
				intersectLeft = objectLeft;
				intersectWidth = options.target.getWidth() - (intersectLeft - targetLeft);
			}

			// Find intersect information for Y axis
			if(targetTop >= objectTop && targetTop <= objectBottom) {
				intersectTop = targetTop;
				intersectHeight = obj.getHeight() - (intersectTop - objectTop);

			} else if(objectTop >= targetTop && objectTop <= targetBottom) {
				intersectTop = objectTop;
				intersectHeight = options.target.getHeight() - (intersectTop - targetTop);
			}

			// Find intersect size (this will be 0 if objects are touching but not overlapping)
			if(intersectWidth > 0 && intersectHeight > 0) {
				intersectSize = intersectWidth * intersectHeight;
			}

			// Set outer snapping area
			if(obj.getLeft() < outerAreaLeft || outerAreaLeft == null) {
				outerAreaLeft = obj.getLeft();
			}

			if(obj.getTop() < outerAreaTop || outerAreaTop == null) {
				outerAreaTop = obj.getTop();
			}

			if((obj.getLeft() + obj.getWidth()) > outerAreaRight || outerAreaRight == null) {
				outerAreaRight = obj.getLeft() + obj.getWidth();
			}

			if((obj.getTop() + obj.getHeight()) > outerAreaBottom || outerAreaBottom == null) {
				outerAreaBottom = obj.getTop() + obj.getHeight();
			}

			// If objects are intersecting, reposition outside all shapes which touch
			if(intersectSize) {
				var distX = (outerAreaRight / 2) - ((options.target.getLeft() + options.target.getWidth()) / 2);
				var distY = (outerAreaBottom / 2) - ((options.target.getTop() + options.target.getHeight()) / 2);

				// Set new position
				findNewPos(distX, distY, options.target, obj);
			}
		}
	});
});

// END SNAPPING


	var searchElement = document.getElementById('search-img');

	var searchButton = new fabric.Image(searchElement, {
	  left: 910,
	  top: 25,
		width: canvasPalette.width*(percentage*1.6),
		height: canvasPalette.width*(percentage*1.6)
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
	  left: 10,
	  top: 25,
		width: canvasPalette.width*(percentage*1.6),
		height: canvasPalette.width*(percentage*1.6)
	});

	clearButton.lockMovementX = true;
	clearButton.lockMovementY = true;
	clearButton.lockScalingX = clearButton.lockScalingY = true;
	clearButton.lockRotation = true;

	clearButton.on('selected', function() {
	  console.log('clear');
    canvasPlay.clear(); 
	});

	var trashCanElement = document.getElementById('trashcan-img');
	var	trashCan = new fabric.Image(trashCanElement, {
		left: 820,
		top: 25,
		width: canvasPalette.width*(percentage*1.6),
		height: canvasPalette.width*(percentage*1.6)
	});
	// trashCan.selectable = false

	trashCan.lockMovementX = true;
	trashCan.lockMovementY = true;
	trashCan.lockUniScaling = true;
	trashCan.lockRotation = true;
	trashCan.on('selected', function(){
		var activeObject = canvasPlay.getActiveObject();
		canvasPlay.remove(activeObject);
		canvasPalette.deactivateAll().renderAll();
	});

	canvasPalette.add(searchButton, clearButton, trashCan);

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

		// $('#coordinates').empty();
		// $('#coordinates').append(response);
		
	})
	.fail(function(error) {
		console.log(error);
		alert(error.status);
	});

};

