$( document ).on('turbolinks:load', function() {
	  console.log("It works on each visit!")

	// create a wrapper around native canvas element (with id="canvas")
	var canvas = new fabric.Canvas('canvas');
	// part of drawing image on the canvas
	var ctx = canvas.getContext("2d");

	// prevent object from resizing
	fabric.Object.prototype.hasControls = false;

		// CLEAR
	      document.getElementById('clear').addEventListener('click', function() {
        ctx.beginPath();
        ctx.clearRect(0, 0, canvas.width, canvas.height);
      }, false);


  // ability to click on letter multiple times
	$("body").on("click", ".palette", function(e){
		e.preventDefault();
		//ability to find index of images
   	var image = $(".palette").find(e.target);
   	var letterId = image.attr("id");
		// console.log(letterId)
		var letterElement = document.getElementById(letterId)
		// console.log(letterElement)
		var letterImage = new fabric.Image(letterElement, {
			left: 5,
			top: 350
		});

		canvas.add(letterImage);
		console.log(letterImage)
		letterElement.toObject = (function(){
			return {
				letter: letterId,
				left: letterImage.left
			};
		})();

// console.log("something")
// 
	letterImage.on('selected', newAjax);

// console.log(letterImage)

function newAjax(event) {
	
	var letters = canvas._objects;
			letters.toObject = (function(){
			return {
				letter: letterId,
				left: letterImage.left
			};
		})();
	console.log(letters)





	var action = "/letters/show";
	var method = "GET";
	
 	var jsonLetters = JSON.stringify(letters);
	var data = {array: jsonLetters};	
 	// console.log(jsonLetters)
	console.log(data);
	$.ajax({
		url: action,
		method: method,
		data: data,
		dataType: 'json'
	})
	.done(function(response) {
		// console.log(response)
		$('#coordinates').empty();
		$('#coordinates').append(response);
		
	// })
	// .fail(function(error) {
	// 	// console.log(error);
	// 	alert(error.status);
	});
}
});

});
