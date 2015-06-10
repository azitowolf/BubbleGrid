
 var fullwidth = $(window).width();
 var fullheight = $(window).height();

$('.skill').click(function(){
  $(this).toggleClass("clicked");
  $(this).children("p").css("opacity", "1");
  $(this).siblings().removeClass("clicked");
  $(this).siblings().children("p").css("opacity", "0");

});

$('.ch-item').click(function(){
  console.log("clicked");
  $(this).children().addClass("clickedbubble");
  $(this).siblings().children().removeClass("clickedbubble");
})

$('#submit').click(function(){
  console.log('firing')
  var numberOfRings = $('#numberOfRings').val();
  var numberOfCircles = $('#numberOfCircles').val();
  var circleRadii = $('#circleRadii').val();
  var circleRatio = $('#circleRatio').val();
  bubbleGridPosition(circleRadii);
})


bubbleGridPosition = function(radius){

//build the central point

 var centerPointHeight = fullheight/2;
 var centerPointWidth = fullwidth/2;

//establish circle sizes
  var diameter = radius * 2;

  $('.innercircle').width(diameter);
  $('.innercircle').height(diameter);

//position circles
  var xOffset = radius;
  var yOffset = (Math.sqrt(3) * radius);

  var BC1XPosition = (centerPointWidth - xOffset);
  var BC1YPosition = (centerPointHeight + yOffset);

  var BC2XPosition = (centerPointWidth + xOffset);
  var BC2YPosition = (centerPointHeight + yOffset);

  // BC3XPosition = (centerPointWidth) - radius;
  // BC3YPosition = (centerPointHeight - circlespread) - radius;


  $('#BC1').css('bottom', BC1YPosition);
  $('#BC1').css('left', BC1XPosition);

  $('#BC2').css('bottom', BC2YPosition);
  $('#BC2').css('left', BC2XPosition);

  // $('#BC3').css('left', BC3XPosition);
  // $('#BC3').css('bottom', BC3YPosition);

  //   smallDiameter = (2 * diameter) / 4;
  //   smallRadius = smallDiameter/2;

  // $('.smallcircle').width(smallDiameter);
  // $('.smallcircle').height(smallDiameter);

  //   smallcirclespread = circlespread + smallRadius;

  // smallxOffset = Math.sqrt(3) * (smallcirclespread / 2);
  // smallyOffset = smallcirclespread / 2;

  // SC1XPosition = (centerPointWidth - smallRadius);
  // SC1YPosition = (centerPointHeight + smallcirclespread) - smallRadius;

  // SC2XPosition = (centerPointWidth + smallxOffset) - smallRadius;
  // SC2YPosition = (centerPointHeight - smallyOffset) - smallRadius;

  // SC3XPosition = (centerPointWidth - smallxOffset) - smallRadius;
  // SC3YPosition = (centerPointHeight - smallyOffset) - smallRadius;

  // $('#SC1').css('bottom', SC1YPosition);
  // $('#SC1').css('left', SC1XPosition);

  // $('#SC2').css('bottom', SC2YPosition);
  // $('#SC2').css('left', SC2XPosition);

  // $('#SC3').css('bottom', SC3YPosition);
  // $('#SC3').css('left', SC3XPosition);
};

//  $(window).load(function() {
//     // start up after 2sec no matter what
//     window.setTimeout(function(){
//         $('body').removeClass("loading").addClass('loaded');
//     }, 500);
//   bubbleGridPosition();

// }); // end load

$(window).on("resize", function(){
  console.log('firing');
  bubbleGridPosition();

});

$('.dot').click(function(){
  $.fn.moveTo();
  console.log('move');
});

  // bubbleGridPosition(125);





