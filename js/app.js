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

var createEquilateral = function(c1x, c1y, c2x, c2y) {
  var newCircleX;
  var newCircleY;

  if (c1x = c2x) {
    newCircleX = c1x + Math.sqrt(3) * radius;
    newCircleY = c1y > c2y ? c1y - radius : c1y + radius
  }

}

var bubbleGridPosition = function(radius) {

  //establish circle sizes
  var diameter = radius * 2;

  //build the starter circle
  var C1YPosition = fullheight / 2;
  var C1XPosition = fullwidth / 2;

  //position bubbles
  var C2XPosition = (C1XPosition);
  var C2YPosition = (C1YPosition - diameter);

  var C3XPosition = (C1XPosition - (Math.sqrt(3) * radius));
  var C3YPosition = (C1YPosition - radius);

  var C4XPosition = (C3XPosition);
  var C4YPosition = (C3YPosition + diameter);

  var C5XPosition = (C3XPosition);
  var C5YPosition = (C3YPosition - diameter);

  var C6XPosition = (C1XPosition + (Math.sqrt(3) * radius));
  var C6YPosition = (C1YPosition - radius);

  //create bubbles
  createBubble($('#work'), 1, C1XPosition, C1YPosition, diameter);
  createBubble($('#work'), 2, C2XPosition, C2YPosition, diameter);
  createBubble($('#work'), 3, C3XPosition, C3YPosition, diameter);
  createBubble($('#work'), 4, C4XPosition, C4YPosition, diameter);
  createBubble($('#work'), 5, C5XPosition, C5YPosition, diameter);
  createBubble($('#work'), 6, C6XPosition, C6YPosition, diameter);


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
