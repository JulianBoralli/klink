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
            $('#drawing-mode-btn').addClass('animated rubberBand').fadeOut();
            drawingOptionsEl.style.display = '';
            $('#undo-btn').addClass('animated pulse').fadeIn();
            $('#redo-btn').addClass('animated pulse').fadeIn();
            $('#clear-drawing-btn').addClass('animated pulse').fadeIn();
            clearDrawing.onclick = function() {
              canvasDraw.clear();
              canvasDraw.setBackgroundColor('white');
            };
          };
        };

      canvasDraw.on('path:created', function() {
        updateComplexity();
      });

      // Undo & Redo Opts
      var undoButton = document.getElementById('undo-btn');
      var redoButton = document.getElementById('redo-btn');

      canvasDraw.on('object:added',function() {
        if(!isRedoing) {
          h = [];
        };
        isRedoing = false;
      });

      var isRedoing = false;
      var h = [];

      $(undoButton).on('click', function() {
        if(canvasDraw._objects.length>0) {
          h.push(canvasDraw._objects.pop());
          canvasDraw.renderAll();
        };
      });

      $(redoButton).on('click', function() {
        if(h.length>0) {
          isRedoing = true;
          canvasDraw.add(h.pop());
        };
      });
      // end undo/redo

      document.getElementById('drawing-mode-selector').addEventListener('change', function() {
         canvasDraw.freeDrawingBrush = new fabric[this.value + 'Brush'](canvasDraw);

        if (canvasDraw.freeDrawingBrush) {
          canvasDraw.freeDrawingBrush.color = drawingColorEl.value;
          canvasDraw.freeDrawingBrush.width = parseInt(drawingLineWidthEl.value, 10) || 1;
        };
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
      };

      canvasDraw.renderAll();

};
