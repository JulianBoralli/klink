// var snap = 20;
// var canvasWidth = document.getElementById('canvas-play').width;
// var canvasHeight = document.getElementById('canvas-play').height;

// function findNewPos(distX, distY, target, obj) {
//   // See whether to focus on X or Y axis
//   if(Math.abs(distX) > Math.abs(distY)) {
//     if (distX > 0) {
//       target.setLeft(obj.getLeft() - target.getWidth());
//     } else {
//       target.setLeft(obj.getLeft() + obj.getWidth());
//     }
//   } else {
//     if (distY > 0) {
//       target.setTop(obj.getTop() - target.getHeight());
//     } else {
//       target.setTop(obj.getTop() + obj.getHeight());
//     }
//   }
// }

// canvasPlay.on('object:moving', function (options) {
//   options.target.setCoords();
//   canvasPlay.forEachObject(function (obj) {
//     if (obj === options.target) return;

//     // If objects intersect
//     if (options.target.isContainedWithinObject(obj) || options.target.intersectsWithObject(obj) || obj.isContainedWithinObject(options.target)) {
//       var distX = ((obj.getLeft() + obj.getWidth()) / 2) - ((options.target.getLeft() + options.target.getWidth()) / 2);
//       var distY = ((obj.getTop() + obj.getHeight()) / 2) - ((options.target.getTop() + options.target.getHeight()) / 2);
//       // Set new position
//       findNewPos(distX, distY, options.target, obj);
//     }

//   // SNAPPING 

//     // if bottom points are on same Y axis
//     if(Math.abs((options.target.getTop() + options.target.getHeight()) - (obj.getTop() + obj.getHeight())) < snap) {
//       // target bottom left to object bottom right
//       if(Math.abs(options.target.getLeft() - (obj.getLeft() + obj.getWidth())) < snap) {
//         options.target.setLeft(obj.getLeft() + obj.getWidth());
//         options.target.setTop(obj.getTop() + obj.getHeight() - options.target.getHeight());
//       }
//       // target bottom right to object bottom left
//       if(Math.abs((options.target.getLeft() + options.target.getWidth()) - obj.getLeft()) < snap) {
//         options.target.setLeft(obj.getLeft() - options.target.getWidth());
//         options.target.setTop(obj.getTop() + obj.getHeight() - options.target.getHeight());
//       }
//     }

//     // if top points are on same Y axis
//     if(Math.abs(options.target.getTop() - obj.getTop()) < snap) {
//       // target top left to object top right
//       if(Math.abs(options.target.getLeft() - (obj.getLeft() + obj.getWidth())) < snap) {
//         options.target.setLeft(obj.getLeft() + obj.getWidth());
//         options.target.setTop(obj.getTop());
//       }
//       // target top right to object top left
//       if(Math.abs((options.target.getLeft() + options.target.getWidth()) - obj.getLeft()) < snap) {
//         options.target.setLeft(obj.getLeft() - options.target.getWidth());
//         options.target.setTop(obj.getTop());
//       }
//     }
//   });

//   options.target.setCoords();
  
// // INTERSECTING

//   var outerAreaLeft = null,
//     outerAreaTop = null,
//     outerAreaRight = null,
//     outerAreaBottom = null;

//   canvasPlay.forEachObject(function (obj) {
//     if (obj === options.target) return;
//     if (options.target.isContainedWithinObject(obj) || options.target.intersectsWithObject(obj) || obj.isContainedWithinObject(options.target)) {
      
//       var intersectLeft = null,
//         intersectTop = null,
//         intersectWidth = null,
//         intersectHeight = null,
//         intersectSize = null,
//         targetLeft = options.target.getLeft(),
//         targetRight = targetLeft + options.target.getWidth(),
//         targetTop = options.target.getTop(),
//         targetBottom = targetTop + options.target.getHeight(),
//         objectLeft = obj.getLeft(),
//         objectRight = objectLeft + obj.getWidth(),
//         objectTop = obj.getTop(),
//         objectBottom = objectTop + obj.getHeight();

//       // find intersect info for X axis
//       if(targetLeft >= objectLeft && targetLeft <= objectRight) {
//         intersectLeft = targetLeft;
//         intersectWidth = obj.getWidth() - (intersectLeft - objectLeft);
//       } else if(objectLeft >= targetLeft && objectLeft <= targetRight) {
//         intersectLeft = objectLeft;
//         intersectWidth = options.target.getWidth() - (intersectLeft - targetLeft);
//       };

//       // find intersect infofor Y axis
//       if(targetTop >= objectTop && targetTop <= objectBottom) {
//         intersectTop = targetTop;
//         intersectHeight = obj.getHeight() - (intersectTop - objectTop);
//       } else if(objectTop >= targetTop && objectTop <= targetBottom) {
//         intersectTop = objectTop;
//         intersectHeight = options.target.getHeight() - (intersectTop - targetTop);
//       }

//       // find intersect size (0 if objs are touching but not overlapping)
//       if(intersectWidth > 0 && intersectHeight > 0) {
//         intersectSize = intersectWidth * intersectHeight;
//       }

//       // set outer snapping area
//       if(obj.getLeft() < outerAreaLeft || outerAreaLeft == null) {
//         outerAreaLeft = obj.getLeft();
//       }
//       if(obj.getTop() < outerAreaTop || outerAreaTop == null) {
//         outerAreaTop = obj.getTop();
//       }
//       if((obj.getLeft() + obj.getWidth()) > outerAreaRight || outerAreaRight == null) {
//         outerAreaRight = obj.getLeft() + obj.getWidth();
//       }
//       if((obj.getTop() + obj.getHeight()) > outerAreaBottom || outerAreaBottom == null) {
//         outerAreaBottom = obj.getTop() + obj.getHeight();
//       }

//       // reposition intersecting objs
//       if(intersectSize) {
//         var distX = (outerAreaRight / 2) - ((options.target.getLeft() + options.target.getWidth()) / 2);
//         var distY = (outerAreaBottom / 2) - ((options.target.getTop() + options.target.getHeight()) / 2);

//         findNewPos(distX, distY, options.target, obj);
//       }
//     }
//   });
// });