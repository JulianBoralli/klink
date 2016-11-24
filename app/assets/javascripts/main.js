$( document ).on('turbolinks:load', function() {
	  console.log("It works on each visit!")

	// create a wrapper around native canvas element (with id="canvas")
	var canvas = new fabric.Canvas('canvas');
	var context = canvas.getContext('2d');
	// snap = 20; 


// CLEARING
      document.getElementById('clear').addEventListener('click', function() {
        context.clearRect(0, 0, canvas.width, canvas.height);
        context.beginPath();
      }, false);


	var aElement = document.getElementById('a-img');
	var bElement = document.getElementById('b-img');
	var cElement = document.getElementById('c-img');
	var dElement = document.getElementById('d-img');
	var eElement = document.getElementById('e-img');
	var fElement = document.getElementById('f-img');
	var gElement = document.getElementById('g-img');
	var hElement = document.getElementById('h-img');
	var iElement = document.getElementById('i-img');
	var jElement = document.getElementById('j-img');
	var kElement = document.getElementById('k-img');
	var lElement = document.getElementById('l-img');
	var mElement = document.getElementById('m-img');
	var nElement = document.getElementById('n-img');
	var oElement = document.getElementById('o-img');
	var pElement = document.getElementById('p-img');
	var qElement = document.getElementById('q-img');
	var rElement = document.getElementById('r-img');
	var sElement = document.getElementById('s-img');
	var tElement = document.getElementById('t-img');
	var uElement = document.getElementById('u-img');
	var vElement = document.getElementById('v-img');
	var wElement = document.getElementById('w-img');
	var xElement = document.getElementById('x-img');
	var yElement = document.getElementById('y-img');
	var zElement = document.getElementById('z-img');


var aInstance = $('#a-img').on('click', function(){
	context.drawImage(aElement, 10, 10, 60, 60);
})
var bInstance = $('#b-img').on('click', function(){
	context.drawImage(bElement, 10, 10, 60, 60);
})
var cInstance = $('#c-img').on('click', function(){
	context.drawImage(cElement, 10, 10, 60, 60);
})
var dInstance = $('#d-img').on('click', function(){
  context.drawImage(dElement, 10, 10, 60, 60);
})
var eInstance = $('#e-img').on('click', function(){
  context.drawImage(eElement, 10, 10, 60, 60);
})
var fInstance = $('#f-img').on('click', function(){
  context.drawImage(fElement, 10, 10, 60, 60);
})
var gInstance = $('#g-img').on('click', function(){
  context.drawImage(gElement, 10, 10, 60, 60);
})
var hInstance = $('#h-img').on('click', function(){
  context.drawImage(hElement, 10, 10, 60, 60);
})
var iInstance = $('#i-img').on('click', function(){
  context.drawImage(iElement, 10, 10, 60, 60);
})
var jInstance = $('#j-img').on('click', function(){
  context.drawImage(jElement, 10, 10, 60, 60);
})
var kInstance = $('#k-img').on('click', function(){
  context.drawImage(kElement, 10, 10, 60, 60);
})
var lInstance = $('#l-img').on('click', function(){
  context.drawImage(lElement, 10, 10, 60, 60);
})
var mInstance = $('#m-img').on('click', function(){
  context.drawImage(mElement, 10, 10, 60, 60);
})
var nInstance = $('#n-img').on('click', function(){
  context.drawImage(nElement, 10, 10, 60, 60);
})
var oInstance = $('#o-img').on('click', function(){
  context.drawImage(oElement, 10, 10, 60, 60);
})
var pInstance = $('#p-img').on('click', function(){
  context.drawImage(pElement, 10, 10, 60, 60);
})
var qInstance = $('#q-img').on('click', function(){
  context.drawImage(qElement, 10, 10, 60, 60);
})
var rInstance = $('#r-img').on('click', function(){
  context.drawImage(rElement, 10, 10, 60, 60);
})
var sInstance = $('#s-img').on('click', function(){
  context.drawImage(sElement, 10, 10, 60, 60);
})
var tInstance = $('#t-img').on('click', function(){
  context.drawImage(tElement, 10, 10, 60, 60);
})
var uInstance = $('#u-img').on('click', function(){
  context.drawImage(uElement, 10, 10, 60, 60);
})
var vInstance = $('#v-img').on('click', function(){
  context.drawImage(vElement, 10, 10, 60, 60);
})
var wInstance = $('#w-img').on('click', function(){
  context.drawImage(wElement, 10, 10, 60, 60);
})
var xInstance = $('#x-img').on('click', function(){
  context.drawImage(xElement, 10, 10, 60, 60);
})
var yInstance = $('#y-img').on('click', function(){
  context.drawImage(yElement, 10, 10, 60, 60);
})
var zInstance = $('#z-img').on('click', function(){
  context.drawImage(zElement, 10, 10, 60, 60);
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