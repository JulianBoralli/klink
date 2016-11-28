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
  canvasPalette.renderAll();
  canvasPalette.selection = false;
  canvasPalette.selectable = false;
  canvasPlay.selection = false;
  canvasPlay.freeDrawingBrush.color = "blue";
  canvasPlay.freeDrawingBrush.width = 10;
};

	var letterImages = $('#letter-images').children();
	var percentage = 0.05;

	$.each(letterImages, function(i, el) {

		var letter = new fabric.Image(el, {
      char: String.fromCharCode(65 + i),
		  left: i >= 13 ? ((55 * (i - 11.1)) + (5 * (i - 10))) : ((50 * (i + 2)) + (10 * (i + 2))),
		  top: i >= 13 ? 70 : 10,
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
        clone.left =  100;
        clone.top = 25;
	    	clone.lockMovementX = true;
				clone.lockMovementY = true;

				clone.animate('height', 520, {
				  onChange: canvasPlay.renderAll.bind(canvasPlay),
				  duration: 1000,
				  easing: fabric.util.ease.easeOutBounce
				});

				clone.animate('width', 300,  {
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

  $('#drawing-mode').on('click', function(event){
    clicks += 1;
  });

  function trace(clone) {
    var traceMode = document.getElementById('drawing-mode')
    traceMode.onclick = function() {

    clone.on('selected', function(){
      if (clicks < 3){
        clone.animate('left', '+=450', { onChange: canvasPlay.renderAll.bind(canvasPlay) });
      }
      // responsiveVoice.speak(this.char);
    })

    canvasPlay.isDrawingMode = !canvasPlay.isDrawingMode;
      if (canvasPlay.isDrawingMode) {
        traceMode.innerHTML = 'Exit Trace';
      }
      else {
        traceMode.innerHTML = 'Trace';
      };
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
    canvasPlay.clear();
  });

	canvasPalette.add(clearButton);

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
