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
    _addBubble();
    _addBubble();
    _addBubble();
    _addBubble();
    _addBubble();
    _addBubble();
    // _addBubble();
    // bubbleGrid.addBubble(bubbleGrid.bubbleGrid[1], bubbleGrid.bubbleGrid[2]);
    // bubbleGrid.addBubble(bubbleGrid.bubbleGrid[0], bubbleGrid.bubbleGrid[2]);
    // bubbleGrid.addBubble(bubbleGrid.bubbleGrid[5], bubbleGrid.bubbleGrid[0]);
    // bubbleGrid.addBubble(bubbleGrid.bubbleGrid[2], bubbleGrid.bubbleGrid[5]);

    _renderBubbleGrid($('#work'), circleRadii * 2);
  });
