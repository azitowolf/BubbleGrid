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

  orientation = function(one, two) {
    var O = "";
    if (one.x === two.x) {
      O = 'verticallyAligned';
    } else {
      if (one.y > two.y) {
        O = 'diagonalDown';
      } else {
        O = 'diagonalUp';
      }
    }
    console.log(O);
    return O;
  };

  _addBubble = function(index1, index2) {

    var one = bubbleGrid[index1];
    var two = bubbleGrid[index2];

    var newBub = {};

    var right = false;
    var left = false;

    orientation(one, two);

    if (orientation(one, two) === 'verticallyAligned') {
      //middle set Y
      if (one.y > two.y) {
        newBub.y = one.y - radius;
      } else {
        newBub.y = two.y - radius;
      }


      //check for existing bubbles around current set
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

    } else if (orientation(one, two) === 'diagonalUp') {
      //find out which input is right and which is left
      var bottom;
      var top;
      one.x > two.x ? bottom = one : bottom = two;
      one.x > two.x ? top = two : top = one;

      //check for existing bubbles around current set
      bubbleGrid.forEach(function(bubble) {
        if (bubble.x === top.x && bubble.y === top.y - diameter) {
          right = true;
        } else if (bubble.x === bottom.x && bubble.y === bottom.y + diameter) {
          left = true;
        }
      });
      if (right && !left) {
        newBub.y = bottom.y + diameter;
        newBub.x = bottom.x;
        bubbleGrid.push(newBub);
      } else if (left && !right) {
        newBub.y = top.y - diameter;
        newBub.x = top.x;
        bubbleGrid.push(newBub);
      } else {
        return;
      }

    } else if (orientation(one, two) === 'diagonalDown') {

      var bottom2;
      var top2;

      one.x > two.x ? bottom2 = two : bottom2 = one;
      one.x > two.x ? top2 = one : top2 = two;
      debugger;
      //check for existing bubbles around current set
      bubbleGrid.forEach(function(bubble) {
        if (bubble.x === top2.x && bubble.y === top2.y - diameter) {
          right = true;
        } else if (bubble.x === bottom2.x && bubble.y === bottom2.y + diameter) {
          left = true;
        }
      });
      if (right && !left) {
        newBub.y = bottom2.y + diameter;
        newBub.x = bottom2.x;
        bubbleGrid.push(newBub);
      } else if (left && !right) {
        newBub.y = top2.y - diameter;
        newBub.x = top2.x;
        bubbleGrid.push(newBub);
      } else {
        return;
      } // End Diagonal Down
    }
  }; // End addBubble function

  _renderTill = function(numCircles) {
    while (bubbleGrid.length < numCircles) {
      var one = bubbleGrid[0];
      var two = bubbleGrid[1];
      _addBubble(one, two);
      one += 1;
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
