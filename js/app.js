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
    var bubbleGrid = {};
    bubbleGrid = new BubbleGrid(circleRadii, 3);
    bubbleGrid.bubbleGridStart();
    bubbleGrid.addBubble(bubbleGrid.bubbleGrid[0], bubbleGrid.bubbleGrid[1]);
    bubbleGrid.addBubble(bubbleGrid.bubbleGrid[1], bubbleGrid.bubbleGrid[2]);
    bubbleGrid.addBubble(bubbleGrid.bubbleGrid[0], bubbleGrid.bubbleGrid[2]);

    bubbleGrid.renderBubbleGrid($('#work'), circleRadii * 2);
  });
