$(document).ready(function(){
  var totalRotation = 0;
  var segments = 0;
  var place = 0;
  var options = {};
  options[0] = 1;
  options[1] = 6;
  options[2] = 5;
  options[3] = 4;
  options[4] = 3;
  options[5] = 2;

  $("img").on("click", function(e) {

    segments = Math.floor(Math.random() * (50));
    totalRotation = 60 * segments;
    individualSegment = segments % 6
    console.log(options[individualSegment])

    $("img").rotate({ animateTo: totalRotation })
    e.preventDefault();
  })
})
