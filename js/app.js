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

$(document).ready(function(){

	$(".main").onepage_scroll({
   sectionContainer: "section",     // sectionContainer accepts any kind of selector in case you don't want to use section
   easing: "ease",                  // Easing options accepts the CSS3 easing animation such "ease", "linear", "ease-in",
                                    // "ease-out", "ease-in-out", or even cubic bezier value such as "cubic-bezier(0.175, 0.885, 0.420, 1.310)"
   animationTime: 1000,             // AnimationTime let you define how long each section takes to animate
   pagination: true,                // You can either show or hide the pagination. Toggle true for show, false for hide.
   updateURL: false,                // Toggle this true if you want the URL to be updated automatically when the user scroll to each page.
   beforeMove: function(index) {

   },  // This option accepts a callback function. The function will be called before the page moves.
   afterMove: function(index) {

   },   // This option accepts a callback function. The function will be called after the page moves.
   loop: false,                     // You can have the page loop back to the top/bottom when the user navigates at up/down on the first/last page.
   keyboard: true,                  // You can activate the keyboard controls
   responsiveFallback: false,        // You can fallback to normal page scroll by defining the width of the browser in which
                                    // you want the responsive fallback to be triggered. For example, set this to 600 and whenever
                                    // the browser's width is less than 600, the fallback will kick in.
   direction: "vertical"            // You can now define the direction of the One Page Scroll animation. Options available are "vertical" and "horizontal". The default value is "vertical".  
	});
});

bubbleGridPosition = function(){
  fullwidth = $(window).width();
  fullheight = $(window).height();

  centerPointHeight = fullheight/2;
  centerPointWidth = fullwidth/2;

    diameter = 250;   

  $('.bigcircle').width(diameter);
  $('.bigcircle').height(diameter);
  
    circlespread = 150;

  radius = ($('.bigcircle').height()/2);
  yOffset = circlespread / 2;
  xOffset = Math.sqrt(3) * (circlespread / 2);

  BC1XPosition = (centerPointWidth - xOffset) - radius;
  BC1YPosition = (centerPointHeight + yOffset) - radius; 

  BC2XPosition = (centerPointWidth + xOffset) - radius;
  BC2YPosition = (centerPointHeight + yOffset) - radius; 

  BC3XPosition = (centerPointWidth) - radius;
  BC3YPosition = (centerPointHeight - circlespread) - radius; 


  $('#BC1').css('bottom', BC1YPosition);
  $('#BC1').css('left', BC1XPosition);

  $('#BC2').css('bottom', BC2YPosition);
  $('#BC2').css('left', BC2XPosition);

  $('#BC3').css('left', BC3XPosition);
  $('#BC3').css('bottom', BC3YPosition);

    smallDiameter = (2 * diameter) / 4;
    smallRadius = smallDiameter/2;

  $('.smallcircle').width(smallDiameter);
  $('.smallcircle').height(smallDiameter);

    smallcirclespread = circlespread + smallRadius;

  smallxOffset = Math.sqrt(3) * (smallcirclespread / 2);
  smallyOffset = smallcirclespread / 2;  

  SC1XPosition = (centerPointWidth - smallRadius);
  SC1YPosition = (centerPointHeight + smallcirclespread) - smallRadius;

  SC2XPosition = (centerPointWidth + smallxOffset) - smallRadius;
  SC2YPosition = (centerPointHeight - smallyOffset) - smallRadius; 

  SC3XPosition = (centerPointWidth - smallxOffset) - smallRadius;
  SC3YPosition = (centerPointHeight - smallyOffset) - smallRadius; 

  $('#SC1').css('bottom', SC1YPosition);
  $('#SC1').css('left', SC1XPosition);

  $('#SC2').css('bottom', SC2YPosition);
  $('#SC2').css('left', SC2XPosition);

  $('#SC3').css('bottom', SC3YPosition);
  $('#SC3').css('left', SC3XPosition);
};

 $(window).load(function() {
    // start up after 2sec no matter what
    window.setTimeout(function(){
        $('body').removeClass("loading").addClass('loaded');
    }, 1000);
  bubbleGridPosition();

}); // end load

$(window).on("resize", function(){
  console.log('firing');
  bubbleGridPosition();

});

$('.dot').click(function(){
  $.fn.moveTo();
  console.log('move');
});









