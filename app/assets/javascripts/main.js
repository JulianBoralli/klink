$( document ).on('turbolinks:load', function() {
   

   // extract into responsiveCanvas file
  var ResponsiveCanvas = fabric.util.createClass(fabric.Canvas, {
    getPointer: function () {
        this.calcOffset();
        return this.callSuper('getPointer');
    },
    setWidth: function (value, options) {
      return this.setDimensions({ width: value }, options);
    },

    setHeight: function (value, options) {
      return this.setDimensions({ height: value }, options);
    },

    setDimensions: function (dimensions, options) {
      var cssValue;

      options = options || {};

      for (var prop in dimensions) {
        cssValue = dimensions[prop];

        !options.cssOnly ? (this._setBackstoreDimension(prop, dimensions[prop]), cssValue += 'px') : '';
        !options.backstoreOnly ? this._setCssDimension(prop, cssValue) : '';
      }

      !options.cssOnly ? this.renderAll() : '';
      this.calcOffset();

      return this;
    },

    _setBackstoreDimension: function (prop, value) {
      this.lowerCanvasEl[prop] = value;

      if (this.upperCanvasEl) {
        this.upperCanvasEl[prop] = value;
      }

      if (this.cacheCanvasEl) {
        this.cacheCanvasEl[prop] = value;
      }

      this[prop] = value;

      return this;
    },

    _setCssDimension: function (prop, value) {
      this.lowerCanvasEl.style[prop] = value;

      if (this.upperCanvasEl) {
        this.upperCanvasEl.style[prop] = value;
      }

      if (this.wrapperEl) {
        this.wrapperEl.style[prop] = value;
      }

      return this;
    }
  });

  
  var canvasPlay = new ResponsiveCanvas('canvas-play');

	var canvasPalette = new ResponsiveCanvas('canvas-palette');

	generatePalette(canvasPlay, canvasPalette);

  canvasPlay.setDimensions({width: '98vw', height: '60vh'}, {
    cssOnly: true
  });

  canvasPalette.setDimensions({width: '98vw', height: '20vh'}, {
    cssOnly: true
  });

	canvasPalette.selectable = true;

});