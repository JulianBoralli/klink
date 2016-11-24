$( document ).on('turbolinks:load', function() {
	  console.log("It works on each visit!")

	// create a wrapper around native canvas element (with id="canvas")
	var canvas = new fabric.Canvas('canvas');
	var context = canvas.getContext('2d');
	// snap = 20; 

// CLEARING
      document.getElementById('clear').addEventListener('click', function() {
        context.beginPath();
        context.clearRect(0, 0, canvas.width, canvas.height);
      }, false);




	var aElement = document.getElementById('a-img');
	var aInstance = new fabric.Image(aElement, {
	  left: 5,
	  top: 350
	});

	var bElement = document.getElementById('b-img');
	var bInstance = new fabric.Image(bElement, {
	  left: 5,
	  top: 350
	});
	var cElement = document.getElementById('c-img');
	var cInstance = new fabric.Image(cElement, {
	  left: 5,
	  top: 350
	});
	var dElement = document.getElementById('d-img');
	var dInstance = new fabric.Image(dElement, {
	  left: 5,
	  top: 350
	});	
	var eElement = document.getElementById('e-img');
	var eInstance = new fabric.Image(eElement, {
	  left: 5,
	  top: 350
	});
	var fElement = document.getElementById('f-img');
	var fInstance = new fabric.Image(fElement, {
	  left: 5,
	  top: 350
	});
	var gElement = document.getElementById('g-img');
	var gInstance = new fabric.Image(gElement, {
	  left: 5,
	  top: 350
	});
	var hElement = document.getElementById('h-img');
	var hInstance = new fabric.Image(hElement, {
	  left: 5,
	  top: 350
	});
	var iElement = document.getElementById('i-img');
	var iInstance = new fabric.Image(iElement, {
	  left: 5,
	  top: 350
	});
	var jElement = document.getElementById('j-img');
	var jInstance = new fabric.Image(jElement, {
	  left: 5,
	  top: 350
	});
	var kElement = document.getElementById('k-img');
	var kInstance = new fabric.Image(kElement, {
	  left: 5,
	  top: 350
	});
	var lElement = document.getElementById('l-img');
	var lInstance = new fabric.Image(lElement, {
	  left: 5,
	  top: 350
	});
		var mElement = document.getElementById('m-img');
	var mInstance = new fabric.Image(mElement, {
	  left: 5,
	  top: 350
	});
	var nElement = document.getElementById('n-img');
	var nInstance = new fabric.Image(nElement, {
	  left: 5,
	  top: 350
	});
	var oElement = document.getElementById('o-img');
	var oInstance = new fabric.Image(oElement, {
	  left: 5,
	  top: 350
	});
	var pElement = document.getElementById('p-img');
	var pInstance = new fabric.Image(pElement, {
	  left: 5,
	  top: 350
	});
	var qElement = document.getElementById('q-img');
	var qInstance = new fabric.Image(qElement, {
	  left: 5,
	  top: 350
	});
	var rElement = document.getElementById('r-img');
	var rInstance = new fabric.Image(rElement, {
	  left: 5,
	  top: 350
	});
	var sElement = document.getElementById('s-img');
	var sInstance = new fabric.Image(sElement, {
	  left: 5,
	  top: 350
	});
	var tElement = document.getElementById('t-img');
	var tInstance = new fabric.Image(tElement, {
	  left: 5,
	  top: 350
	});
	var uElement = document.getElementById('u-img');
	var uInstance = new fabric.Image(uElement, {
	  left: 5,
	  top: 350
	});
	var vElement = document.getElementById('v-img');
	var vInstance = new fabric.Image(vElement, {
	  left: 5,
	  top: 350
	});
	var wElement = document.getElementById('w-img');
	var wInstance = new fabric.Image(wElement, {
	  left: 5,
	  top: 350
	});
	var xElement = document.getElementById('x-img');
	var xInstance = new fabric.Image(xElement, {
	  left: 5,
	  top: 350
	});
	var yElement = document.getElementById('y-img');
	var yInstance = new fabric.Image(yElement, {
	  left: 5,
	  top: 350
	});
	var zElement = document.getElementById('z-img');
	var zInstance = new fabric.Image(zElement, {
	  left: 5,
	  top: 350
	});

$('#a-img').on('click', function(){
	canvas.add(aInstance);
})
$('#b-img').on('click', function(){
	canvas.add(bInstance);
})
$('#c-img').on('click', function(){
	canvas.add(cInstance);
})
$('#d-img').on('click', function(){
  canvas.add(dInstance);
})
$('#e-img').on('click', function(){
  canvas.add(eInstance);
})
$('#f-img').on('click', function(){
  canvas.add(fInstance);
})
$('#g-img').on('click', function(){
  canvas.add(gInstance);
})
$('#h-img').on('click', function(){
  canvas.add(hInstance);
})
$('#i-img').on('click', function(){
  canvas.add(iInstance);
})
$('#j-img').on('click', function(){
  canvas.add(jInstance);
})
$('#k-img').on('click', function(){
  canvas.add(kInstance);
})
$('#l-img').on('click', function(){
  canvas.add(lInstance);
})
$('#m-img').on('click', function(){
  canvas.add(mInstance);
})
$('#n-img').on('click', function(){
  canvas.add(nInstance);
})
$('#o-img').on('click', function(){
  canvas.add(oInstance);
})
$('#p-img').on('click', function(){
  canvas.add(pInstance);
})
$('#q-img').on('click', function(){
  canvas.add(qInstance);
})
$('#r-img').on('click', function(){
  canvas.add(rInstance);
})
$('#s-img').on('click', function(){
  canvas.add(sInstance);
})
$('#t-img').on('click', function(){
  canvas.add(tInstance);
})
$('#u-img').on('click', function(){
  canvas.add(uInstance);
})
$('#v-img').on('click', function(){
  canvas.add(vInstance);
})
$('#w-img').on('click', function(){
  canvas.add(wInstance);
})
$('#x-img').on('click', function(){
  canvas.add(xInstance);
})
$('#y-img').on('click', function(){
  canvas.add(yInstance);
})
$('#z-img').on('click', function(){
  canvas.add(zInstance);
})


	aInstance.toObject = function () {
		return {
			letter: "A",
			left: this.left
		};
	};

	bInstance.toObject = function () {
		return {
			letter: "B",
			left: this.left
		};
	};

	cInstance.toObject = function () {
		return {
			letter: "C",
			left: this.left
		};
	};

	dInstance.toObject = function () {
		return {
			letter: "D",
			left: this.left
		};
	};

	eInstance.toObject = function () {
		return {
			letter: "E",
			left: this.left
		};
	};

	fInstance.toObject = function () {
		return {
			letter: "F",
			left: this.left
		};
	};
	
	gInstance.toObject = function () {
		return {
			letter: "G",
			left: this.left
		};
	};

	hInstance.toObject = function () {
		return {
			letter: "H",
			left: this.left
		};
	};

	iInstance.toObject = function () {
		return {
			letter: "I",
			left: this.left
		};
	};

	jInstance.toObject = function () {
		return {
			letter: "J",
			left: this.left
		};
	};

	kInstance.toObject = function () {
		return {
			letter: "K",
			left: this.left
		};
	};

	lInstance.toObject = function () {
		return {
			letter: "L",
			left: this.left
		};
	};

	mInstance.toObject = function () {
		return {
			letter: "M",
			left: this.left
		};
	};

	nInstance.toObject = function () {
		return {
			letter: "N",
			left: this.left
		};
	};

	oInstance.toObject = function () {
		return {
			letter: "O",
			left: this.left
		};
	};

	pInstance.toObject = function () {
		return {
			letter: "P",
			left: this.left
		};
	};

	qInstance.toObject = function () {
		return {
			letter: "Q",
			left: this.left
		};
	};

	rInstance.toObject = function () {
		return {
			letter: "R",
			left: this.left
		};
	};

	sInstance.toObject = function () {
		return {
			letter: "S",
			left: this.left
		};
	};

	tInstance.toObject = function () {
		return {
			letter: "T",
			left: this.left
		};
	};

	uInstance.toObject = function () {
		return {
			letter: "U",
			left: this.left
		};
	};

	vInstance.toObject = function () {
		return {
			letter: "V",
			left: this.left
		};
	};

	wInstance.toObject = function () {
		return {
			letter: "W",
			left: this.left
		};
	};

	xInstance.toObject = function () {
		return {
			letter: "X",
			left: this.left
		};
	};

	yInstance.toObject = function () {
		return {
			letter: "Y",
			left: this.left
		};
	};

	zInstance.toObject = function () {
		return {
			letter: "Z",
			left: this.left
		};
	};

fabric.Object.prototype.hasControls = false;


// SNAPPING

// function findNewPos(distX, distY, target, obj) {
// 	// See whether to focus on X or Y axis
// 	if(Math.abs(distX) > Math.abs(distY)) {
// 		if (distX > 0) {
// 			target.setLeft(obj.getLeft() - target.getWidth());
// 		} else {
// 			target.setLeft(obj.getLeft() + obj.getWidth());
// 		}
// 	} else {
// 		if (distY > 0) {
// 			target.setTop(obj.getTop() - target.getHeight());
// 		} else {
// 			target.setTop(obj.getTop() + obj.getHeight());
// 		}
// 	}
// }

// canvas.on('object:moving', function (options) {
// 	// Sets corner position coordinates based on current angle, width and height
// 	options.target.setCoords();

// 	// Don't allow objects off the canvas
// 	if(options.target.getLeft() < snap) {
// 		options.target.setLeft(0);
// 	}

// 	if(options.target.getTop() < snap) {
// 		options.target.setTop(0);
// 	}

// 	if((options.target.getWidth() + options.target.getLeft()) > (canvasWidth - snap)) {
// 		options.target.setLeft(canvasWidth - options.target.getWidth());
// 	}

// 	if((options.target.getHeight() + options.target.getTop()) > (canvasHeight - snap)) {
// 		options.target.setTop(canvasHeight - options.target.getHeight());
// 	}

// 	// Loop through objects
// 	canvas.forEachObject(function (obj) {
// 		if (obj === options.target) return;

// 		// If objects intersect
// 		if (options.target.isContainedWithinObject(obj) || options.target.intersectsWithObject(obj) || obj.isContainedWithinObject(options.target)) {

// 			var distX = ((obj.getLeft() + obj.getWidth()) / 2) - ((options.target.getLeft() + options.target.getWidth()) / 2);
// 			var distY = ((obj.getTop() + obj.getHeight()) / 2) - ((options.target.getTop() + options.target.getHeight()) / 2);

// 			// Set new position
// 			findNewPos(distX, distY, options.target, obj);
// 		}

// 		// Snap objects to each other horizontally

// 		// If bottom points are on same Y axis
// 		if(Math.abs((options.target.getTop() + options.target.getHeight()) - (obj.getTop() + obj.getHeight())) < snap) {
// 			// Snap target BL to object BR
// 			if(Math.abs(options.target.getLeft() - (obj.getLeft() + obj.getWidth())) < snap) {
// 				options.target.setLeft(obj.getLeft() + obj.getWidth());
// 				options.target.setTop(obj.getTop() + obj.getHeight() - options.target.getHeight());
// 			}

// 			// Snap target BR to object BL
// 			if(Math.abs((options.target.getLeft() + options.target.getWidth()) - obj.getLeft()) < snap) {
// 				options.target.setLeft(obj.getLeft() - options.target.getWidth());
// 				options.target.setTop(obj.getTop() + obj.getHeight() - options.target.getHeight());
// 			}
// 		}

// 		// If top points are on same Y axis
// 		if(Math.abs(options.target.getTop() - obj.getTop()) < snap) {
// 			// Snap target TL to object TR
// 			if(Math.abs(options.target.getLeft() - (obj.getLeft() + obj.getWidth())) < snap) {
// 				options.target.setLeft(obj.getLeft() + obj.getWidth());
// 				options.target.setTop(obj.getTop());
// 			}

// 			// Snap target TR to object TL
// 			if(Math.abs((options.target.getLeft() + options.target.getWidth()) - obj.getLeft()) < snap) {
// 				options.target.setLeft(obj.getLeft() - options.target.getWidth());
// 				options.target.setTop(obj.getTop());
// 			}
// 		}

// 		// Snap objects to each other vertically

// 		// If right points are on same X axis
// 		if(Math.abs((options.target.getLeft() + options.target.getWidth()) - (obj.getLeft() + obj.getWidth())) < snap) {
// 			// Snap target TR to object BR
// 			if(Math.abs(options.target.getTop() - (obj.getTop() + obj.getHeight())) < snap) {
// 				options.target.setLeft(obj.getLeft() + obj.getWidth() - options.target.getWidth());
// 				options.target.setTop(obj.getTop() + obj.getHeight());
// 			}

// 			// Snap target BR to object TR
// 			if(Math.abs((options.target.getTop() + options.target.getHeight()) - obj.getTop()) < snap) {
// 				options.target.setLeft(obj.getLeft() + obj.getWidth() - options.target.getWidth());
// 				options.target.setTop(obj.getTop() - options.target.getHeight());
// 			}
// 		}

// 		// If left points are on same X axis
// 		if(Math.abs(options.target.getLeft() - obj.getLeft()) < snap) {
// 			// Snap target TL to object BL
// 			if(Math.abs(options.target.getTop() - (obj.getTop() + obj.getHeight())) < snap) {
// 				options.target.setLeft(obj.getLeft());
// 				options.target.setTop(obj.getTop() + obj.getHeight());
// 			}

// 			// Snap target BL to object TL
// 			if(Math.abs((options.target.getTop() + options.target.getHeight()) - obj.getTop()) < snap) {
// 				options.target.setLeft(obj.getLeft());
// 				options.target.setTop(obj.getTop() - options.target.getHeight());
// 			}
// 		}
// 	});

// 	options.target.setCoords();

// 	// If objects still overlap

// 	var outerAreaLeft = null,
// 	outerAreaTop = null,
// 	outerAreaRight = null,
// 	outerAreaBottom = null;

// 	canvas.forEachObject(function (obj) {
// 		if (obj === options.target) return;

// 		if (options.target.isContainedWithinObject(obj) || options.target.intersectsWithObject(obj) || obj.isContainedWithinObject(options.target)) {

// 			var intersectLeft = null,
// 			intersectTop = null,
// 			intersectWidth = null,
// 			intersectHeight = null,
// 			intersectSize = null,
// 			targetLeft = options.target.getLeft(),
// 			targetRight = targetLeft + options.target.getWidth(),
// 			targetTop = options.target.getTop(),
// 			targetBottom = targetTop + options.target.getHeight(),
// 			objectLeft = obj.getLeft(),
// 			objectRight = objectLeft + obj.getWidth(),
// 			objectTop = obj.getTop(),
// 			objectBottom = objectTop + obj.getHeight();

// 			// Find intersect information for X axis
// 			if(targetLeft >= objectLeft && targetLeft <= objectRight) {
// 				intersectLeft = targetLeft;
// 				intersectWidth = obj.getWidth() - (intersectLeft - objectLeft);

// 			} else if(objectLeft >= targetLeft && objectLeft <= targetRight) {
// 				intersectLeft = objectLeft;
// 				intersectWidth = options.target.getWidth() - (intersectLeft - targetLeft);
// 			}

// 			// Find intersect information for Y axis
// 			if(targetTop >= objectTop && targetTop <= objectBottom) {
// 				intersectTop = targetTop;
// 				intersectHeight = obj.getHeight() - (intersectTop - objectTop);

// 			} else if(objectTop >= targetTop && objectTop <= targetBottom) {
// 				intersectTop = objectTop;
// 				intersectHeight = options.target.getHeight() - (intersectTop - targetTop);
// 			}

// 			// Find intersect size (this will be 0 if objects are touching but not overlapping)
// 			if(intersectWidth > 0 && intersectHeight > 0) {
// 				intersectSize = intersectWidth * intersectHeight;
// 			}

// 			// Set outer snapping area
// 			if(obj.getLeft() < outerAreaLeft || outerAreaLeft == null) {
// 				outerAreaLeft = obj.getLeft();
// 			}

// 			if(obj.getTop() < outerAreaTop || outerAreaTop == null) {
// 				outerAreaTop = obj.getTop();
// 			}

// 			if((obj.getLeft() + obj.getWidth()) > outerAreaRight || outerAreaRight == null) {
// 				outerAreaRight = obj.getLeft() + obj.getWidth();
// 			}

// 			if((obj.getTop() + obj.getHeight()) > outerAreaBottom || outerAreaBottom == null) {
// 				outerAreaBottom = obj.getTop() + obj.getHeight();
// 			}

// 			// If objects are intersecting, reposition outside all shapes which touch
// 			if(intersectSize) {
// 				var distX = (outerAreaRight / 2) - ((options.target.getLeft() + options.target.getWidth()) / 2);
// 				var distY = (outerAreaBottom / 2) - ((options.target.getTop() + options.target.getHeight()) / 2);

// 				// Set new position
// 				findNewPos(distX, distY, options.target, obj);
// 			}
// 		}
// 	});
// });










	aInstance.on('selected', newAjax);
	bInstance.on('selected', newAjax);
	cInstance.on('selected', newAjax);
	dInstance.on('selected', newAjax);
	eInstance.on('selected', newAjax);
	fInstance.on('selected', newAjax);
	gInstance.on('selected', newAjax);
	hInstance.on('selected', newAjax);
	iInstance.on('selected', newAjax);
	jInstance.on('selected', newAjax);
	kInstance.on('selected', newAjax);
	lInstance.on('selected', newAjax);
	mInstance.on('selected', newAjax);
	nInstance.on('selected', newAjax);
	oInstance.on('selected', newAjax);
	pInstance.on('selected', newAjax);
	qInstance.on('selected', newAjax);
	rInstance.on('selected', newAjax);
	sInstance.on('selected', newAjax);
	tInstance.on('selected', newAjax);
	uInstance.on('selected', newAjax);
	vInstance.on('selected', newAjax);
	wInstance.on('selected', newAjax);
	xInstance.on('selected', newAjax);
	yInstance.on('selected', newAjax);
	zInstance.on('selected', newAjax);


function newAjax(event) {
	

	var letters = canvas._objects;

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
		$('#coordinates').empty();
		$('#coordinates').append(response);
		
	})
	.fail(function(error) {
		console.log(error);
		alert(error.status);
	});

};


});