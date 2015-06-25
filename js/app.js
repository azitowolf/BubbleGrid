var fullwidth = $(window).width();
var fullheight = $(window).height();

var createBubble = function(div, id, xOffset, yOffset, diameter) {
  var html = '<div class="circle" id="C' + id + '"><div><h3>content</h3></div></div>'
  div.append(html);
  $('#C' + id).css('top', yOffset);
  $('#C' + id).css('left', xOffset);
  $('#C' + id).css('width', diameter).css('height', diameter);
}

$('#submit').click(function() {
  var numberOfRings = $('#numberOfRings').val();
  var numberOfCircles = $('#numberOfCircles').val();
  var circleRadii = $('#circleRadii').val();
  var circleRatio = $('#circleRatio').val();
  $('#work').html(' ');
  bubbleGridPosition(circleRadii);
})

var findThirdPoint = function(circle1, circle2) {

  var newBub = {};

  // case they are vertically aligned
  if (circle1.x === circle2.x) {
    //check for existing circle on one side
    newBub.x = circle1.x - Math.sqrt(3) * radius;

    bubbleGrid.forEach(function(bubble) {
      if (bubble.x === circle1.x - Math.sqrt(3) * radius) {
        newBub.x = circle1.x + Math.sqrt(3) * radius;
      }
    })

    if (circle1.y > circle2.y) {
      newBub.y = circle1.y - radius
    } else {
      newBub.y = circle2.y - radius;
    }

    console.log(newBub)

    //push out new bubble
    bubbleGrid.push(newBub)


  } else {

    if (circle1.x > circle2.x) {
      if (circle1.y > circle2.y) {
        newBub.y = circle1.y - diameter
      } else {
        newBub.y = circle1.y + diameter
      }
    }

  }

  //case they are not vertically aligned



}

var bubbleGrid = [];

var bubbleGridPosition = function(radius) {

  //establish circle sizes
  var diameter = radius * 2;

  //build the array


  //build the starter circle
  var C1YPosition = fullheight / 2;
  var C1XPosition = fullwidth / 2;


  bubbleGrid.push({
    x: C1XPosition,
    y: C1YPosition
  });
  bubbleGrid.push({
    x: bubbleGrid[0].x,
    y: bubbleGrid[0].y - diameter
  });
  bubbleGrid.push({
    x: bubbleGrid[0].x - (Math.sqrt(3) * radius),
    y: bubbleGrid[0].y - radius
  });
  bubbleGrid.push({
    x: bubbleGrid[0].x - (Math.sqrt(3) * radius),
    y: bubbleGrid[0].y - radius
  });

  //position bubbles
  // var C2XPosition = (C1XPosition);
  // var C2YPosition = (C1YPosition - diameter);

  // var C3XPosition = (C1XPosition - (Math.sqrt(3) * radius));
  // var C3YPosition = (C1YPosition - radius);

  // var C4XPosition = (C3XPosition);
  // var C4YPosition = (C3YPosition + diameter);

  // var C5XPosition = (C3XPosition);
  // var C5YPosition = (C3YPosition - diameter);

  // var C6XPosition = (C1XPosition + (Math.sqrt(3) * radius));
  // var C6YPosition = (C1YPosition - radius);

  //create bubbles
  createBubble($('#work'), 1, bubbleGrid[0].x, bubbleGrid[0].y, diameter);
  createBubble($('#work'), 2, bubbleGrid[1].x, bubbleGrid[1].y, diameter);
  createBubble($('#work'), 3, bubbleGrid[2].x, bubbleGrid[2].y, diameter);
  // createBubble($('#work'), 4, C4XPosition, C4YPosition, diameter);
  // createBubble($('#work'), 5, C5XPosition, C5YPosition, diameter);
  // createBubble($('#work'), 6, C6XPosition, C6YPosition, diameter);


};

//  $(window).load(function() {
//     // start up after 2sec no matter what
//     window.setTimeout(function(){
//         $('body').removeClass("loading").addClass('loaded');
//     }, 500);
//   bubbleGridPosition();

// }); // end load

// $(window).on("resize", function(){
//   console.log('firing');
//   bubbleGridPosition();

// });
