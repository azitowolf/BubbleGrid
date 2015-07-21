function BubbleGrid(radius, numCircles) {

  this.bubbleGrid = [];
  this.radius = radius;
  this.diameter = radius * 2;
  var gridProperties = this;


  this.bubbleGridStart = function(radius) {

    this.bubbleGrid.push({
      x: startPos.x,
      y: startPos.y
    });
    this.bubbleGrid.push({
      x: this.bubbleGrid[0].x,
      y: this.bubbleGrid[0].y - this.diameter
    });
    this.bubbleGrid.push({
      x: this.bubbleGrid[0].x - (Math.sqrt(3) * this.radius),
      y: this.bubbleGrid[0].y - this.radius
    });

  };

  this.addBubble = function(one, two) {

    var newBub = {};


    if (one.x === two.x) {
      //default
      newBub.x = one.x + Math.sqrt(3) * this.radius;
      //check for existing bubble on one side
      this.bubbleGrid.forEach(function(bubble) {
        if (bubble.x === newBub.x) {
          newBub.x = one.x - Math.sqrt(3) * this.radius;
        }
      });

      if (one.y > two.y) {
        newBub.y = one.y - this.radius;
      } else {
        newBub.y = two.y - this.radius;
      }

      //case they are not vertically aligned
    } else if (one.x > two.x) {

      if (one.y > two.y) {

        newBub.y = one.y - this.diameter;
        newBub.x = one.x;

        //check for existing bubble on one side
        this.bubbleGrid.forEach(function(bubble) {
          if (bubble.x === newBub.x) {
            newBub.y = two.y + gridProperties.diameter;
            newBub.x = two.x;
          }
        });

      } else {
        newBub.y = one.y + this.diameter;
        newBub.x = one.x;
        //check for existing bubble on one side
        this.bubbleGrid.forEach(function(bubble) {
          if (bubble.x === newBub.x) {
            newBub.y = two.y - gridProperties.diameter;
            newBub.x = two.x;
          }
        });
      }
    } else if (two.x > one.x) {

      if (one.y > two.y) {

        newBub.y = one.y - this.diameter;
        newBub.x = one.x;

        //check for existing bubble on one side
        this.bubbleGrid.forEach(function(bubble) {
          if (bubble.x === newBub.x) {
            newBub.y = two.y + gridProperties.diameter;
            newBub.x = two.x;

          }
        });

      } else if (two.y > one.y) {
        newBub.y = one.y + this.diameter;
        newBub.x = one.x;
        //check for existing bubble on one side
        this.bubbleGrid.forEach(function(bubble) {
          if (bubble.x === newBub.x) {
            newBub.y = two.y - gridProperties.diameter;
            newBub.x = two.x;

          }
        });
      }
    }

    //push out new bubble
    this.bubbleGrid.push(newBub);

  };

  this.renderBubbleGrid = function(div, diameter) {
    console.log(this.bubbleGrid);
    this.bubbleGrid.forEach(function(bubble, i) {
      var html = '<div class="circle" id="C' + i + '"><div><h3>content</h3></div></div>';
      div.append(html);
      $('#C' + i).css('top', bubble.y);
      $('#C' + i).css('left', bubble.x);
      $('#C' + i).css('width', diameter).css('height', diameter);
    });
  };

}



// var bubbleGridPosition = function(radius) {

//   //establish circle sizes
//   var diameter = radius * 2;


//   //build the starter circle
//   var C1YPosition = fullheight / 2;
//   var C1XPosition = fullwidth / 2;


//   bubbleGrid.push({
//     x: C1XPosition,
//     y: C1YPosition
//   });
//   bubbleGrid.push({
//     x: bubbleGrid[0].x,
//     y: bubbleGrid[0].y - diameter
//   });
//   bubbleGrid.push({
//     x: bubbleGrid[0].x - (Math.sqrt(3) * radius),
//     y: bubbleGrid[0].y - radius
//   });

//   findThirdPoint(bubbleGrid[0], bubbleGrid[1], radius);
//   findThirdPoint(bubbleGrid[1], bubbleGrid[2], radius);
//   findThirdPoint(bubbleGrid[0], bubbleGrid[2], radius);
//   findThirdPoint(bubbleGrid[5], bubbleGrid[0], radius);
//   findThirdPoint(bubbleGrid[1], bubbleGrid[3], radius);


//   createBubble($('#work'), 1, bubbleGrid[0].x, bubbleGrid[0].y, diameter);
//   createBubble($('#work'), 2, bubbleGrid[1].x, bubbleGrid[1].y, diameter);
//   createBubble($('#work'), 3, bubbleGrid[2].x, bubbleGrid[2].y, diameter);
//   createBubble($('#work'), 4, bubbleGrid[3].x, bubbleGrid[3].y, diameter);
//   createBubble($('#work'), 5, bubbleGrid[4].x, bubbleGrid[4].y, diameter);
//   createBubble($('#work'), 6, bubbleGrid[5].x, bubbleGrid[5].y, diameter);


// };
