  var fullwidth = $(window).width();
  var fullheight = $(window).height();

  var startPos = {
    x: fullwidth / 2,
    y: fullheight / 2
  };

  $('#submit').click(function() {
    var numberOfRings = $('#numberOfRings').val();
    var numberOfCircles = $('#numberOfCircles').val();
    var circleRadii = $('#circleRadii').val();
    var circleRatio = $('#circleRatio').val();
    $('#work').html(' ');
    bg = BubbleGridInit(circleRadii, numberOfCircles);
    _bubbleGridStart();
    _addBubble(0, 1);
    _addBubble(0, 2);
    _addBubble(2, 1);


    _renderBubbleGrid($('#work'), circleRadii * 2);
  });
