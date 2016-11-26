$( document ).on('turbolinks:load', function() {

    var canvasDraw = new fabric.Canvas('canvas-draw');
    var drawingModeEl = document.getElementById('drawing-mode-btn'),
          drawingOptionsEl = document.getElementById('drawing-mode-options'),
          drawingColorEl = document.getElementById('drawing-color'),
          drawingLineWidthEl = document.getElementById('drawing-line-width'),
          drawingShadowWidth = document.getElementById('drawing-shadow-width');
    
        drawingModeEl.onclick = function() {
          canvasDraw.isDrawingMode = !canvasDraw.isDrawingMode;
          if (canvasDraw.isDrawingMode) {
            drawingModeEl.innerHTML = 'stop drawing';
            drawingOptionsEl.style.display = '';
          }
          else {
            drawingModeEl.innerHTML = 'Draw!';
            drawingOptionsEl.style.display = '';
          }
        };
    
      canvasDraw.on('path:created', function() {
        updateComplexity();
      });
    
      document.getElementById('drawing-mode-selector').addEventListener('change', function() {
         canvasDraw.freeDrawingBrush = new fabric[this.value + 'Brush'](canvasDraw);
         
        if (canvasDraw.freeDrawingBrush) {
          canvasDraw.freeDrawingBrush.color = drawingColorEl.value;
          canvasDraw.freeDrawingBrush.width = parseInt(drawingLineWidthEl.value, 10) || 1;
          canvasDraw.freeDrawingBrush.shadowBlur = parseInt(drawingShadowWidth.value, 10) || 0;
        }
      });
    
      drawingColorEl.onchange = function() {
        canvasDraw.freeDrawingBrush.color = drawingColorEl.value;
      };
      drawingLineWidthEl.onchange = function() {
        canvasDraw.freeDrawingBrush.width = parseInt(drawingLineWidthEl.value, 10) || 1;
      };
      drawingShadowWidth.onchange = function() {
        canvasDraw.freeDrawingBrush.shadowBlur = parseInt(drawingShadowWidth.value, 10) || 0;
      };
    
      if (canvasDraw.freeDrawingBrush) {
        canvasDraw.freeDrawingBrush.color = drawingColorEl.value;
        canvasDraw.freeDrawingBrush.width = parseInt(drawingLineWidthEl.value, 10) || 1;
        canvasDraw.freeDrawingBrush.shadowBlur = 0;
      }
    
      document.getElementById('canvas-background-picker').addEventListener('change', function() {
        canvasDraw.backgroundColor = this.value;
        canvasDraw.renderAll();
      });

});