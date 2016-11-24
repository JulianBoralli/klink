$( document ).on('turbolinks:load', function() {
	  console.log("It works on each visit!")

	// create a wrapper around native canvas element (with id="canvas")
	var canvas = new fabric.Canvas('canvas');
	// part of drawing image on the canvas
	var ctx = canvas.getContext("2d");

	// prevent object from resizing
	fabric.Object.prototype.hasControls = false;


  // ability to click on letter multiple times
	$("body").on("click", "img", function(e){
		e.preventDefault();
		var letterImage = new fabric.Image(e.target);
		canvas.add(letterImage);

	// ability to find index of images
   	var image = $(".palette").find(e.target);
   	var letterId = image.attr("id");
   	var imageGrab = document.getElementById(letterId)


		var returnLetterAsObject = letterImage.toObject = (function(){
			return {
				letter: letterId,
				left: letterImage.left
			};
		})();
		console.log(returnLetterAsObject)
	});




// letterImage.on('selected', newAjax);
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
