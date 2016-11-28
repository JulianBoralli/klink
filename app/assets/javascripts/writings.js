function writeGame(ResponsiveCanvas) {

  var canvasPlay = new ResponsiveCanvas('canvas-play');

  var canvasPalette = new ResponsiveCanvas('canvas-palette');

  fabric.Object.prototype.hasControls = false;

  canvasPlay.setDimensions({width: '98vw', height: '30vw'}, {
    cssOnly: true
  });

  canvasPalette.setDimensions({width: '98vw', height: '13vw'}, {
    cssOnly: true
  });

  generatePalette();
  boundCanvas();
  wiggleLetter();

function generatePalette() {
  canvasPlay.selection = false;
  canvasPlay.freeDrawingBrush.color = 'blue';
  canvasPlay.freeDrawingBrush.width = 10;
  canvasPalette.renderAll();
  canvasPalette.selectable = false;
  canvasPalette.selection = false;
};

	var letterImages = $('#letter-images').children();
	var percentage = 0.04;

	$.each(letterImages, function(i, el) {

		var letter = new fabric.Image(el, {
      char: String.fromCharCode(65 + i),
		  left: i >= 13 ? ((40 * (i - 9)) + (9 * (i - 10))) : ((40 * (i + 4)) + (10 * (i + 2))),
		  top: i >= 13 ? 64 : 13,
		  width: canvasPalette.width*percentage,
		  height: canvasPalette.width*percentage
		});

    canvasPalette.renderAll();
		letter.lockMovementX = true;
		letter.lockMovementY = true;
		letter.lockScalingX = letter.lockScalingY = true;
		letter.lockRotation = true;

		letter.on('selected', function() {
      console.log(this.char);
      responsiveVoice.speak(this.char);
			if (this.canvas.lowerCanvasEl.id === "canvas-palette") {
				var clone = fabric.util.object.clone(this);
				clone.width = 360;
				clone.height = 385;
        clone.left =  230;
        clone.top = 25;
	    	clone.lockMovementX = true;
				clone.lockMovementY = true;

				clone.animate('height', 420, {
				  onChange: canvasPlay.renderAll.bind(canvasPlay),
				  duration: 1000,
				  easing: fabric.util.ease.easeOutBounce
				});

				clone.animate('width', 200,  {
					onChange: canvasPlay.renderAll.bind(canvasPlay),
					duration: 1000,
					easing: fabric.util.ease.easeOutBounce
				});

        canvasPalette.deactivateAll().renderAll();
        canvasPlay.add(clone);

        trace(clone);
			}
		});
		canvasPalette.add(letter);
		canvasPalette.renderAll();
	});

  var clicks = 0

  $('#green-pencil').on('click', function(event){
    clicks += 1;
  });

  function trace(clone) {
    var traceMode = document.getElementById('green-pencil')
    traceMode.onclick = function() {

    clone.on('selected', function(){
      if (clicks <= 1){
        clone.animate('left', '+=380', { onChange: canvasPlay.renderAll.bind(canvasPlay) });
      }
      responsiveVoice.speak(this.char);
    });
    canvasPlay.isDrawingMode = !canvasPlay.isDrawingMode;
    };
  };

function boundCanvas() {
	canvasPlay.on ("object:moving", function(event) {
		     var el = event.target;

		el.left = el.left < el.getBoundingRectWidth() / 2 ? el.getBoundingRectWidth() / 5 : el.left;
		el.top = el.top < el.getBoundingRectHeight () / 2 ? el.getBoundingRectHeight() / 5 : el.top;

		var right = el.left + el.getBoundingRectWidth() / 2;
		var bottom = el.top + el.getBoundingRectHeight() / 2;

		el.left = right > canvasPlay.width - el.getBoundingRectWidth() / 2 ? canvasPlay.width - el.getBoundingRectWidth() / 1 : el.left;
		el.top = bottom > canvasPlay.height - el.getBoundingRectHeight() / 2 ? canvasPlay.height - el.getBoundingRectHeight() / 1 : el.top;
	});
};

  var clearElement = document.getElementById('clear-img');

  var clearButton = new fabric.Image(clearElement, {
    button: true,
    left: 80,
    top: 20,
    width: canvasPalette.width*(percentage*2.3),
    height: canvasPalette.width*(percentage*2.3)
  });

  clearButton.lockMovementX = true;
  clearButton.lockMovementY = true;
  clearButton.lockScalingX = clearButton.lockScalingY = true;
  clearButton.lockRotation = true;

  clearButton.on('selected', function() {
    canvasPlay.clear();
  });

  var pencilElement = document.getElementById('green-pencil');

  var pencilButton = new fabric.Image(pencilElement, {
    button: true,
    left: 840,
    top: 20,
    width: canvasPalette.width*(percentage*2.3),
    height: canvasPalette.width*(percentage*2.3)
  })

  pencilButton.lockMovementX = true;
  pencilButton.lockMovementY = true;
  pencilButton.lockScalingX = pencilButton.lockScalingY = true;
  pencilButton.lockRotation = true;

	canvasPalette.add(clearButton, pencilButton);

function wiggleLetter(){
	canvasPlay.hoverCursor = 'pointer';
	function animate(e, dir){
	if (e.target) {
		fabric.util.animate({
			startValue: e.target.get('scaleY'),
			endValue: e.target.get('scaleY') + (dir ? 0 : -1 ),
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
			endValue: e.target.get('scaleX') + (dir ?  -1 : 0  ),
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
 };
 canvasPlay.on('mouse:down', function(e) { animate(e, 0); });
 canvasPlay.on('mouse:up', function(e) { animate(e, 0); });
	};
};
