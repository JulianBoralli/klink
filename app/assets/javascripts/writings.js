function writeGame(ResponsiveCanvas) {

  // Load Mobile Text2Speech feature
  document.addEventListener("click", responsiveVoice.clickEvent);

  var canvasPlay = new ResponsiveCanvas('canvas-play');
  var canvasPalette = new ResponsiveCanvas('canvas-palette');

  fabric.Object.prototype.hasControls = false;

  canvasPlay.setDimensions({width: '98vw', height: '30vw'}, {
    cssOnly: true
  });

  canvasPalette.setDimensions({width: '98vw', height: '13vw'}, {
    cssOnly: true
  });

  canvasPlay.selection = false;
  canvasPalette.selectable = false;
  canvasPalette.selection = false;

  generatePalette();
  boundCanvas();
  wiggleLetter();
  createBroom();
  canvasPalette.renderAll();

  function createBroom(){
    var broomElement = document.getElementById('clear-img');

		var broom = new fabric.Image(broomElement, {
		  button: true,
		  left: 80,
		  top: 20,
		  width: 80,
		  height: 100
		});

		broom.lockMovementX = true;
		broom.lockMovementY = true;
		broom.lockScalingX = broom.lockScalingY = true;
		broom.lockRotation = true;

		broom.on('selected', function() {
      animateBroom();
      setTimeout(function() {
        canvasPlay.clear();
      }, 1600);
	});
		canvasPalette.add(broom);
  };

function moveBroom(broom) {
		broom.bringToFront();

		setTimeout(function() {
			console.log('timeout', broom);
			broom.animate('left', -250, {
			  onChange: canvasPlay.renderAll.bind(canvasPlay),
			  duration: 1000,
			  onComplete: function() { canvasPlay.remove(broom); }
			});
		}, 1000);

		setTimeout(function() {
			var audio = new Audio('audio/Swish.m4a');
			audio.play();
		}, 1500);
	};


	function animateBroom() {

		var clearElement = document.getElementById('clear-img');

		var broom = new fabric.Image(clearElement, {
		  left: 1000,
		  top: 0,
			width: 250,
			height: 500
		});

		broom.lockMovementX = true;
		broom.lockMovementY = true;
		broom.lockScalingX = broom.lockScalingY = true;
		broom.lockRotation = true;

		canvasPlay.add(broom);
		canvasPlay.renderAll();

		moveBroom(broom);

	};

  function trace(clone){
    var percentage = 0.04
    var greenPencilElement = document.getElementById('green-pencil');

    var greenPencilButton = new fabric.Image(greenPencilElement, {
      left: 850,
      top: 10,
      width: canvasPalette.width*(percentage*1.3),
      height: canvasPalette.width*(percentage*1.3)
    })

    greenPencilButton.lockMovementX = true;
    greenPencilButton.lockMovementY = true;
    greenPencilButton.lockScalingX = greenPencilButton.lockScalingY = true;
    greenPencilButton.lockRotation = true;

    var redPencilElement = document.getElementById('red-pencil');

    var redPencilButton = new fabric.Image(redPencilElement, {
      left: 850,
      top: 65,
      width: canvasPalette.width*(percentage*1.3),
      height: canvasPalette.width*(percentage*1.3)
    })

    redPencilButton.lockMovementX = true;
    redPencilButton.lockMovementY = true;
    redPencilButton.lockScalingX = redPencilButton.lockScalingY = true;
    redPencilButton.lockRotation = true;

    canvasPalette.add(greenPencilButton, redPencilButton);

    greenPencilButton.on('selected', function(){
      canvasPlay.isDrawingMode = true;
      canvasPlay.freeDrawingBrush.color = 'red';
      canvasPlay.freeDrawingBrush.width = 10;
    });
    redPencilButton.on('selected', function(){
      canvasPlay.isDrawingMode = false;
      clone.animate('left', '+=380', { onChange: canvasPlay.renderAll.bind(canvasPlay) });
    });
    responsiveVoice.speak(this.char);
  };

function generatePalette() {

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
        clone.top = 0;
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
	});

  setTimeout(function() {
    canvasPalette.renderAll();
  }, 500);

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

  canvasPlay.on('selected', function(){
    responsiveVoice.speak(this.char);
  });
};
