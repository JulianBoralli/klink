function generateDrawing() {

  fabric.Object.prototype.transparentCorners = false;

  var drawingModeEl = $('drawing-mode'),
      drawingOptionsEl = $('drawing-mode-options'),
      drawingColorEl = $('drawing-color'),
      drawingShadowColorEl = $('drawing-shadow-color'),
      drawingLineWidthEl = $('drawing-line-width'),
      drawingShadowWidth = $('drawing-shadow-width'),
      drawingShadowOffset = $('drawing-shadow-offset'),
      clearEl = $('clear-canvas');

  clearEl.onclick = function() { canvas.clear() };

  drawingModeEl.onclick = function() {
    canvasDraw.isDrawingMode = !canvasDraw.isDrawingMode;
    if (canvasDraw.isDrawingMode) {
      drawingModeEl.innerHTML = 'Cancel drawing mode';
      drawingOptionsEl.style.display = '';
    }
    else {
      drawingModeEl.innerHTML = 'Enter drawing mode';
      drawingOptionsEl.style.display = 'none';
    }
  };

  if (fabric.PatternBrush) {
    var vLinePatternBrush = new fabric.PatternBrush(canvasDraw);
    vLinePatternBrush.getPatternSrc = function() {

      var patternCanvas = fabric.document.createElement('canvasDraw');
      patternCanvas.width = patternCanvas.height = 10;
      var ctx = patternCanvas.getContext('2d');

      ctx.strokeStyle = this.color;
      ctx.lineWidth = 5;
      ctx.beginPath();
      ctx.moveTo(0, 5);
      ctx.lineTo(10, 5);
      ctx.closePath();
      ctx.stroke();

      return patternCanvas;
    };

    var hLinePatternBrush = new fabric.PatternBrush(canvasDraw);
    hLinePatternBrush.getPatternSrc = function() {

      var patternCanvas = fabric.document.createElement('canvasDraw');
      patternCanvas.width = patternCanvas.height = 10;
      var ctx = patternCanvas.getContext('2d');

      ctx.strokeStyle = this.color;
      ctx.lineWidth = 5;
      ctx.beginPath();
      ctx.moveTo(5, 0);
      ctx.lineTo(5, 10);
      ctx.closePath();
      ctx.stroke();

      return patternCanvas;
    };

    var squarePatternBrush = new fabric.PatternBrush(canvasDraw);
    squarePatternBrush.getPatternSrc = function() {

      var squareWidth = 10, squareDistance = 2;

      var patternCanvas = fabric.document.createElement('canvasDraw');
      patternCanvas.width = patternCanvas.height = squareWidth + squareDistance;
      var ctx = patternCanvas.getContext('2d');

      ctx.fillStyle = this.color;
      ctx.fillRect(0, 0, squareWidth, squareWidth);

      return patternCanvas;
    };

    var diamondPatternBrush = new fabric.PatternBrush(canvasDraw);
    diamondPatternBrush.getPatternSrc = function() {

      var squareWidth = 10, squareDistance = 5;
      var patternCanvas = fabric.document.createElement('canvasDraw');
      var rect = new fabric.Rect({
        width: squareWidth,
        height: squareWidth,
        angle: 45,
        fill: this.color
      });

      var canvasWidth = rect.getBoundingRectWidth();

      patternCanvas.width = patternCanvas.height = canvasWidth + squareDistance;
      rect.set({ left: canvasWidth / 2, top: canvasWidth / 2 });

      var ctx = patternCanvas.getContext('2d');
      rect.render(ctx);

      return patternCanvas;
    };

    var img = new Image();
    img.src = '../assets/honey_im_subtle.png';

    var texturePatternBrush = new fabric.PatternBrush(canvasDraw);
    texturePatternBrush.source = img;
  }

  $('drawing-mode-selector').onchange = function() {

    if (this.value === 'hline') {
      canvasDraw.freeDrawingBrush = vLinePatternBrush;
    }
    else if (this.value === 'vline') {
      canvasDraw.freeDrawingBrush = hLinePatternBrush;
    }
    else if (this.value === 'square') {
      canvasDraw.freeDrawingBrush = squarePatternBrush;
    }
    else if (this.value === 'diamond') {
      canvasDraw.freeDrawingBrush = diamondPatternBrush;
    }
    else if (this.value === 'texture') {
      canvasDraw.freeDrawingBrush = texturePatternBrush;
    }
    else {
      canvasDraw.freeDrawingBrush = new fabric[this.value + 'Brush'](canvasDraw);
    }

    if (canvasDraw.freeDrawingBrush) {
      canvasDraw.freeDrawingBrush.color = drawingColorEl.value;
      canvasDraw.freeDrawingBrush.width = parseInt(drawingLineWidthEl.value, 10) || 1;
    }
  };

  drawingColorEl.onchange = function() {
    canvasDraw.freeDrawingBrush.color = this.value;
  };
  drawingLineWidthEl.onchange = function() {
    canvasDraw.freeDrawingBrush.width = parseInt(this.value, 10) || 1;
    this.previousSibling.innerHTML = this.value;
  };

  if (canvasDraw.freeDrawingBrush) {
    canvasDraw.freeDrawingBrush.color = drawingColorEl.value;
    canvasDraw.freeDrawingBrush.width = parseInt(drawingLineWidthEl.value, 10) || 1;
  }
};