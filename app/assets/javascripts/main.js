$( document ).on('turbolinks:load', function() {
	  console.log("It works on each visit!")

	// create a wrapper around native canvas element (with id="c")
	var canvas = new fabric.Canvas('canvas');

	var imgElement = document.getElementById('a-img');
	var imgInstance = new fabric.Image(imgElement, {
	  left: 5,
	  top: 350
	});

$('#a-img').on('click', function(){
  canvas.add(imgInstance);
})

	// create a rectangle object
	var a = new fabric.Rect({
	  left: 100,
	  top: 100,
	  fill: 'red',
	  width: 20,
	  height: 20
	});

	rectA.toObject = function () {
		return {
			letter: "A",
			left: this.left
		};
	};

	// create a rectangle object
	var rectB = new fabric.Rect({
	  left: 200,
	  top: 200,
	  fill: 'green',
	  width: 20,
	  height: 20
	});

	rectB.toObject = function () {
		return {
			letter: "B",
			left: this.left
		};
	};
	
	// "add" rectangle onto canvas
	canvas.add(rectA, rectB);

	rectA.on('selected', newAjax);


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