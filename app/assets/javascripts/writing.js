function generatePalette(canvasPlay, canvasPalette) {
	canvasPlay.isDrawingMode = true;
	canvasPlay.freeDrawingBrush.color = "purple"
	canvasPlay.freeDrawingBrush.width = 10

	var letterImages = $('#letter-images').children();
	var percentage = 0.05;
	canvasPalette.renderAll();

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


				// animation on adding the block
				clone.animate('height', 100, {
				  onChange: canvasPlay.renderAll.bind(canvasPlay),
				  duration: 1000,
				  easing: fabric.util.ease.easeOutBounce
				});

				clone.animate('width', 75,  {
					onChange: canvasPlay.renderAll.bind(canvasPlay),
					duration: 1000,
					easing: fabric.util.ease.easeOutBounce
				});
	    	canvasPlay.add(clone);
	    	canvasPalette.deactivateAll().renderAll();
			}
		});

		canvasPalette.add(letter);
		canvasPalette.renderAll();

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
	canvasPlay.on({
	'object:selected': borders
});

function borders(object){
	var activeObject = object.target;
	activeObject.set({'borderColor': 'red'});
};


	var trashCanElement = document.getElementById('trashcan-img');
	var	trashCan = new fabric.Image(trashCanElement, {
		left: 820,
		top: 25,
		width: canvasPalette.width*(percentage*1.6),
		height: canvasPalette.width*(percentage*1.6)


	});

	trashCan.lockMovementX = true;
	trashCan.lockMovementY = true;
	trashCan.lockUniScaling = true;
	trashCan.lockRotation = true;
	trashCan.on('selected', function(){
		var activeObject = canvasPlay.getActiveObject();
		canvasPlay.remove(activeObject);
		canvasPalette.deactivateAll().renderAll();
	});

	canvasPalette.add(trashCan);


// letter wiggle
	canvasPlay.hoverCursor = 'pointer';
	function animate(e, dir) {
	if (e.target) {
		fabric.util.animate({
			startValue: e.target.get('scaleY'),
			endValue: e.target.get('scaleY') + (dir ? 0 : -3 ),
			duration: 100,
			onChange: function(value) {
				e.target.setAngle(value);
				canvasPlay.renderAll();
			},
			onComplete: function() {
				e.target.setCoords();
			}
		});
		fabric.util.animate({
			startValue: e.target.get('scaleX'),
			endValue: e.target.get('scaleX') + (dir ?  3 : 0  ),
			duration: 100,
			onChange: function(value) {
				e.target.scale(value);
				canvasPlay.renderAll();
			},
			onComplete: function() {
				e.target.setCoords();
			}
		});
		}
	}
	canvasPlay.on('mouse:down', function(e) { animate(e); });
	canvasPlay.on('mouse:up', function(e) { animate(e); });
	canvasPalette.selection = false;
	canvasPlay.selection = false;

};
