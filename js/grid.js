function BubbleGridInit(radius, numCircles) {

  var bubbleGrid = [];
  var radius = radius;
  var diameter = radius * 2;

  _bubbleGridStart = function() {

    bubbleGrid.push({
      x: startPos.x,
      y: startPos.y
    });
    bubbleGrid.push({
      x: bubbleGrid[0].x,
      y: bubbleGrid[0].y - diameter
    });
    bubbleGrid.push({
      x: bubbleGrid[0].x - (Math.sqrt(3) * radius),
      y: bubbleGrid[0].y - radius
    });

  };

  //NEEDS TO NOT ADD BUBBLE IF BOTH SIDES FILLED

  _addBubble = function() {

    var one = bubbleGrid[0];
    var two = bubbleGrid[1];

    var newBub = {};

    if (one.x === two.x) {
      //middle set Y
      if (one.y > two.y) {
        newBub.y = one.y - radius;
      } else {
        newBub.y = two.y - radius;
      }

      var right = false;
      var left = false;
      //check for existing bubble on one side
      bubbleGrid.forEach(function(bubble) {

        if (bubble.x === one.x - Math.sqrt(3) * radius) {

          left = true;
        } else if (bubble.x === one.x + Math.sqrt(3) * radius) {

          right = true;
        }
      });

      if (right && !left) {
        newBub.x = one.x - Math.sqrt(3) * radius;
        bubbleGrid.push(newBub);
      } else if (left && !right) {
        newBub.x = one.x + Math.sqrt(3) * radius;
        bubbleGrid.push(newBub);
      } else {
        return;
      }

      //case they are not vertically aligned
    } else if (one.x > two.x) {

      if (one.y > two.y) {

        newBub.y = one.y - diameter;
        newBub.x = one.x;

        //check for existing bubble on one side
        bubbleGrid.forEach(function(bubble) {
          if (bubble.x === newBub.x) {
            newBub.y = two.y + diameter;
            newBub.x = two.x;
          }
        });

      } else {
        newBub.y = one.y + diameter;
        newBub.x = one.x;
        //check for existing bubble on one side
        bubbleGrid.forEach(function(bubble) {
          if (bubble.x === newBub.x) {
            newBub.y = two.y - diameter;
            newBub.x = two.x;
          }
        });
      }
    } else if (two.x > one.x) {

      if (one.y > two.y) {

        newBub.y = one.y - diameter;
        newBub.x = one.x;

        //check for existing bubble on one side
        bubbleGrid.forEach(function(bubble) {
          if (bubble.x === newBub.x) {
            newBub.y = two.y + diameter;
            newBub.x = two.x;

          }
        });

      } else if (two.y > one.y) {
        newBub.y = one.y + diameter;
        newBub.x = one.x;
        //check for existing bubble on one side
        bubbleGrid.forEach(function(bubble) {
          if (bubble.x === newBub.x) {
            newBub.y = two.y - diameter;
            newBub.x = two.x;

          }
        });
      }
    }

    //push out new bubble
    // bubbleGrid.push(newBub);

  };

  _renderTill = function(numCircles) {
    while (bubbleGrid.length > numCircles) {

    }
  };

  _renderBubbleGrid = function(div, diameter) {
    console.log(bubbleGrid);
    bubbleGrid.forEach(function(bubble, i) {
      var html = '<div class="circle" id="C' + i + '"><div><h3>content</h3></div></div>';
      div.append(html);
      $('#C' + i).css('top', bubble.y);
      $('#C' + i).css('left', bubble.x);
      $('#C' + i).css('width', diameter).css('height', diameter);
    });
  };

  return bubbleGrid;

};
