$(document).ready(function(){
  var totalRotation = 0;
  var segments = 0;
  var place = 0;

  var digit = function(angle) {
    switch(angle) {
        case 0:
        return 1;
        break;

        case 60:
        return 6;
        break;

        case 120:
        return 5;
        break;

        case 180:
        return 4;
        break;

        case 240:
        return 3;
        break;

        case 300:
        return 2;
        break;

        default: return 1; // exit this handler for other keys
    }
  }

  $("img").on("click", function(e) {

    segments = Math.floor(Math.random() * (50));
    totalRotation = 60 * segments;
    place = segments % 6
    console.log(digit(place * 60))

    $("img").rotate({ animateTo: totalRotation })
    e.preventDefault();
  })
})
