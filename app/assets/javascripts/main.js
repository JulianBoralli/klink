$( document ).on('turbolinks:load', function() {
	  console.log("It works on each visit!")

	// create a wrapper around native canvas element (with id="canvas")
	var canvas = new fabric.Canvas('canvas');
	// prevent object from resizing
	fabric.Object.prototype.hasControls = false;

	var aElement = document.getElementById('a-img');
	var aInstance = new fabric.Image(aElement, {
	  left: 5,
	  top: 350


	// create a rectangle object
	// var rectA = new fabric.Rect({
	//   left: 100,
	//   top: 100,
	//   fill: 'red',
	//   width: 20,
	//   height: 20
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
			letter: "B",
			left: this.left
		};
	};

	dInstance.toObject = function () {
		return {
			letter: "B",
			left: this.left
		};
	};

// 	rectB.toObject = function () {
// 		return {
// 			letter: "B",
// 			left: this.left
// 		};
// 	};
	

	aInstance.on('selected', newAjax);


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