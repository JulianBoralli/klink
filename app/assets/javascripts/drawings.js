function drawGame(ResponsiveCanvas) {

    var canvasDraw = new ResponsiveCanvas('canvas-draw', {
      backgroundColor : "#fff"
    });
      canvasDraw.setDimensions({width: '98vw', height: '48vw'}, {
      cssOnly: true
      });

    var backgroundImages = $('#drawing-bg-images').children();

    $.each(backgroundImages, function(idx, img) {
        $(img).on('click', function() {
          canvasDraw.setBackgroundImage($(this).attr('src'), 
            canvasDraw.renderAll.bind(canvasDraw), {
            width: canvasDraw.width,
            height: canvasDraw.height,
            originX: 'left',
            originY: 'top'
          });
        });
    });

    var clearDrawing = document.getElementById('clear-drawing-btn');
    var drawingModeEl = document.getElementById('drawing-mode-btn'),
          drawingOptionsEl = document.getElementById('drawing-mode-options'),
          drawingColorEl = document.getElementById('drawing-color'),
          drawingLineWidthEl = document.getElementById('drawing-line-width');
    
        drawingModeEl.onclick = function() {
          canvasDraw.isDrawingMode = !canvasDraw.isDrawingMode;
          if (canvasDraw.isDrawingMode) {
            $('#drawing-mode-btn').fadeOut();
            drawingOptionsEl.style.display = '';
            $('#clear-drawing-btn').fadeIn();
            clearDrawing.onclick = function() {
              canvasDraw.clear();
              canvasDraw.setBackgroundColor('white');
            };
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
        }
      });
    
      drawingColorEl.onchange = function() {
        canvasDraw.freeDrawingBrush.color = drawingColorEl.value;
      };
      drawingLineWidthEl.onchange = function() {
        canvasDraw.freeDrawingBrush.width = parseInt(drawingLineWidthEl.value, 10) || 1;
      };

      if (canvasDraw.freeDrawingBrush) {
        canvasDraw.freeDrawingBrush.color = drawingColorEl.value;
        canvasDraw.freeDrawingBrush.width = parseInt(drawingLineWidthEl.value, 10) || 1;
      }
  
      canvasDraw.renderAll();

};
