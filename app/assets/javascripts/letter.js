function generateAlphabet(canvas) {


	for (var i = 0; i < 26; i++) {


		var letter = new fabric.Rect({
		  

		  left: i >= 13 ? ((50 * (i - 13)) + (5 * (i - 13))) : ((50 * i) + (5 * i)),
		  top: i >= 13 ? 70 : 10,
		  fill: 'red',
		  width: 50,
		  height: 50
		});

		letter.toObject = function () {
			return {
				letter: String.fromCharCode(65 + i),
				left: this.left
			};
		};
		
		canvas.add(letter);

	};

};