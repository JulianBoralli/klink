function readGame(ResponsiveCanvas) {

	// Load Mobile Text2Speech feature
	document.addEventListener("click", responsiveVoice.clickEvent);

	// Create Canvas
	var canvasPlay = new ResponsiveCanvas('canvas-play');
  var canvasPalette = new ResponsiveCanvas('canvas-palette');

  canvasPlay.setDimensions({width: '98vw', height: '40vw'}, {
    cssOnly: true
  });

  canvasPalette.setDimensions({width: '98vw', height: '13vw'}, {
    cssOnly: true
  });

	// Disable Object Controls
  fabric.Object.prototype.hasControls = false;

  // Enable Selectable
  canvasPalette.selectable = true;

  // Disable Multiple Selection
	canvasPalette.selection = false;
	canvasPlay.selection = true;

	// Draw Palette
	generatePalette();

	// Create Red Obj border when selected
	// redObjectBorder();

	// Bound Canvas Border so objects don't disappear
	boundCanvas();

	// Configure Snapping and Intersecting
	configureSnapIntersect();

	// Wiggle Letter Effect
	wiggleLetter();

	// Create puppy and broom
	// createPuppy();
	// createBroom();



	function createPuppy() {

		var puppyElement = document.getElementById('puppy-img');

		var puppy = new fabric.Image(puppyElement, {
		  button: true,
		  left: 900,
		  top: 450,
		  width: 80,
		  height: 100
		});

		puppy.lockMovementX = true;
		puppy.lockMovementY = true;
		puppy.lockScalingX = puppy.lockScalingY = true;
		puppy.lockRotation = true;

		canvasPlay.add(puppy);
	};

	function createBroom() {

		var broomElement = document.getElementById('clear-img');

		var broom = new fabric.Image(broomElement, {
		  button: true,
		  left: 10,
		  top: 450,
		  width: 80,
		  height: 100
		});

		broom.lockMovementX = true;
		broom.lockMovementY = true;
		broom.lockScalingX = broom.lockScalingY = true;
		broom.lockRotation = true;

		broom.on('selected', function() {
		  console.log('clear');

	    var activeObject = canvasPlay.getActiveObject(),
    			activeGroup = canvasPlay.getActiveGroup();


	    if (activeObject && !activeObject.button) {

        canvasPlay.remove(activeObject);
	    }
	    else if (activeGroup) {
        var objectsInGroup = activeGroup.getObjects();
        canvasPlay.discardActiveGroup();
        objectsInGroup.forEach(function(object) {
        	if (!object.button)	{
        		canvasPlay.remove(object);
      		}
        });
	    }
		});

		canvasPlay.add(broom);
	};

	function configureSnapIntersect() {

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
		};

		canvasPlay.on('object:moving', function (options) {

			options.target.setCoords();

			canvasPlay.forEachObject(function (obj) {
				if (obj === options.target) return;

				// If objects intersect
				if (options.target.isContainedWithinObject(obj) || options.target.intersectsWithObject(obj) || obj.isContainedWithinObject(options.target)) {
					var distX = ((obj.getLeft() + obj.getWidth()) / 2) - ((options.target.getLeft() + options.target.getWidth()) / 2);
					var distY = ((obj.getTop() + obj.getHeight()) / 2) - ((options.target.getTop() + options.target.getHeight()) / 2);
					// Set new position
					findNewPos(distX, distY, options.target, obj);
				}

				// SNAPPING

				// if bottom points are on same Y axis
				if(Math.abs((options.target.getTop() + options.target.getHeight()) - (obj.getTop() + obj.getHeight())) < snap) {
					// target bottom left to object bottom right
					if(Math.abs(options.target.getLeft() - (obj.getLeft() + obj.getWidth())) < snap) {
						options.target.setLeft(obj.getLeft() + obj.getWidth());
						options.target.setTop(obj.getTop() + obj.getHeight() - options.target.getHeight());
					}
					// target bottom right to object bottom left
					if(Math.abs((options.target.getLeft() + options.target.getWidth()) - obj.getLeft()) < snap) {
						options.target.setLeft(obj.getLeft() - options.target.getWidth());
						options.target.setTop(obj.getTop() + obj.getHeight() - options.target.getHeight());
					}
				}

				// if top points are on same Y axis
				if(Math.abs(options.target.getTop() - obj.getTop()) < snap) {
					// target top left to object top right
					if(Math.abs(options.target.getLeft() - (obj.getLeft() + obj.getWidth())) < snap) {
						options.target.setLeft(obj.getLeft() + obj.getWidth());
						options.target.setTop(obj.getTop());
					}
					// target top right to object top left
					if(Math.abs((options.target.getLeft() + options.target.getWidth()) - obj.getLeft()) < snap) {
						options.target.setLeft(obj.getLeft() - options.target.getWidth());
						options.target.setTop(obj.getTop());
					}
				}
			});

			options.target.setCoords();

			// INTERSECTING

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

					// find intersect info for X axis
					if(targetLeft >= objectLeft && targetLeft <= objectRight) {
						intersectLeft = targetLeft;
						intersectWidth = obj.getWidth() - (intersectLeft - objectLeft);
					} else if(objectLeft >= targetLeft && objectLeft <= targetRight) {
						intersectLeft = objectLeft;
						intersectWidth = options.target.getWidth() - (intersectLeft - targetLeft);
					};

					// find intersect infofor Y axis
					if(targetTop >= objectTop && targetTop <= objectBottom) {
						intersectTop = targetTop;
						intersectHeight = obj.getHeight() - (intersectTop - objectTop);
					} else if(objectTop >= targetTop && objectTop <= targetBottom) {
						intersectTop = objectTop;
						intersectHeight = options.target.getHeight() - (intersectTop - targetTop);
					}

					// find intersect size (0 if objs are touching but not overlapping)
					if(intersectWidth > 0 && intersectHeight > 0) {
						intersectSize = intersectWidth * intersectHeight;
					}

					// set outer snapping area
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

					// reposition intersecting objs
					if(intersectSize) {
						var distX = (outerAreaRight / 2) - ((options.target.getLeft() + options.target.getWidth()) / 2);
						var distY = (outerAreaBottom / 2) - ((options.target.getTop() + options.target.getHeight()) / 2);

						findNewPos(distX, distY, options.target, obj);
					}
				}
			});
		});
	};


	function boundCanvas() {

		canvasPlay.on ("object:moving", function (event) {
			var el = event.target;

			el.left = el.left < el.getBoundingRectWidth() / 2 ? el.getBoundingRectWidth() / 6 : el.left;
			el.top = el.top < el.getBoundingRectHeight () / 2 ? el.getBoundingRectHeight() / 6 : el.top;

			var right = el.left + el.getBoundingRectWidth() / 2;
			var bottom = el.top + el.getBoundingRectHeight() / 2;

			el.left = right > canvasPlay.width - el.getBoundingRectWidth() / 2 ? canvasPlay.width - el.getBoundingRectWidth() / 1 : el.left;
			el.top = bottom > canvasPlay.height - el.getBoundingRectHeight() / 2 ? canvasPlay.height - el.getBoundingRectHeight() / 1 : el.top;
		});
	};

  function redObjectBorder() {

		canvasPlay.on({'object:selected': borders});

		function borders(object) {
			var activeObject = object.target;
			activeObject.set({'borderColor': 'red'});
		};
  };


	function generatePalette() {

		var letterImages = $('#letter-images').children();
		var percentage = 0.05;
		canvasPalette.renderAll();


		// Creates Letters
		$.each(letterImages, function(i, el) {

			var letter = new fabric.Image(el, {
			  char: String.fromCharCode(65 + i),
			  left: i >= 13 ? (30 + (50 * (i - 11.1)) + (5 * (i - 10))) : (30 + (50 * (i + 2)) + (5 * (i + 2))),
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


				if (this.canvas.lowerCanvasEl.id === "canvas-palette") {
					var clone = fabric.util.object.clone(this);
					responsiveVoice.speak(this.char);
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
		    	canvasPalette.discardActiveObject();
		    	// canvasPalette.deactivateAll().renderAll();

				}
			});

			canvasPalette.add(letter);
			canvasPalette.renderAll();
		});


		// Creates Search Button
		var searchElement = document.getElementById('search-img');

		var searchButton = new fabric.Image(searchElement, {
		  left: 910,
		  top: 25,
			width: canvasPalette.width*(percentage*1.6),
			height: canvasPalette.width*(percentage*2)
		});

		searchButton.lockMovementX = true;
		searchButton.lockMovementY = true;
		searchButton.lockScalingX = searchButton.lockScalingY = true;
		searchButton.lockRotation = true;

		searchButton.on('selected', function() {
		  console.log('search');

	    searchAjax(event, canvasPlay);
	    canvasPalette.discardActiveObject();
			canvasPalette.renderAll();
			canvasPlay.renderAll();
		});


		// Creates Clear Button
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

		  animateBroom();

		  setTimeout(function() { 
				clearPlayCanvas();
			}, 1500);
	    
		});

		canvasPalette.add(searchButton, clearButton);
		setTimeout(function() { 
			canvasPalette.renderAll();
		}, 500);
		
		// canvasPalette.setActiveObject(searchButton);
	};


	function clearPlayCanvas() {

		var activeObject = canvasPlay.getActiveObject(),
  			activeGroup = canvasPlay.getActiveGroup();

    if (activeObject && !activeObject.button) {

      canvasPlay.remove(activeObject);
    }
    else if (activeGroup) {
      var objectsInGroup = activeGroup.getObjects();
      canvasPlay.discardActiveGroup();
      objectsInGroup.forEach(function(object) {
      	if (!object.button)	{
      		canvasPlay.remove(object);
    		}
      });
    }
    canvasPalette.discardActiveObject();
		canvasPalette.renderAll();		
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

		// // canvasPlay.remove(broom);
		// canvasPlay.renderAll();
	};

	function wiggleLetter() {
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
		};

		canvasPlay.on('mouse:down', function(e) { animate(e); });
		canvasPlay.on('mouse:up', function(e) { animate(e); });
	};


	function searchAjax(event, canvasPlay) {
		console.log(canvasPlay);

		var activeGroup = canvasPlay.getActiveGroup();
		if (activeGroup) {
      var objectsInGroup = activeGroup.getObjects();
      var letters = objectsInGroup.filter(function(el) { return el.char !== undefined });
    } else {
    	var letters = canvasPlay._objects.filter(function(el) { return el.char !== undefined });
    }

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
			if (response[0] === response[1] || response[1] === "whoopsies") {
				var textSpeak = JSON.stringify(response[1])
				responsiveVoice.speak(textSpeak, "UK English Female");
				return
			}

			console.log('response:', response)
			var textSpeak = JSON.stringify(response[1])
			// function to call the APIs with response
		
			responsiveVoice.speak(textSpeak, "UK English Female");

			$("#image-result").append("<img src=" + "\"" + response[0] + "\"" + "id=" + textSpeak + " />");

			var stickerElement = document.getElementById(response[1]);


			addSticker(stickerElement, canvasPlay);


			// canvasPlay.setActiveObject((canvasPlay.getObjects()[canvasPlay.getObjects().length - 1]));
			// canvasPlay.renderAll();
		})
		.fail(function(error) {
			console.log(error);
			responsiveVoice.speak("Oh no!", "UK English Female");
			// alert(error.status);
		});
	};


	function addSticker(stickerElement, canvasPlay) {

		var sticker = new fabric.Image(stickerElement, {
		  left: 750,
      top: Math.floor((Math.random() * 500) + 1),
			width: 100,
			height: 100
		});


		sticker.hasControls = true;

		canvasPlay.add(sticker);

		function sleep(ms, callback) {
	  	ms = ms || 0;
	  	setTimeout(callback, ms);
		}
		sleep(1000, function() {
  		console.log('sleeping');
	 	});

		setTimeout(function() { 
			canvasPlay.renderAll();
		}, 500);
		
	};

};
