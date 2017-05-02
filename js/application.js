$(document).ready(function(){
  var options = {};
  options[0] = "1: Chickens";
  options[1] = "6: Cows";
  options[2] = "5: Sheep";
  options[3] = "4: Ducks";
  options[4] = "3: Fish";
  options[5] = "2: Pigs";

  var spinner = new Spinner({
    targetElement: "img",
    segments:      6,
    options:       options
  })
})

var Spinner = function(args) {
  this.targetElement = args.targetElement || "img";
  this.segments      = args.segments || 6;
  this.options       = args.options  || {};

  this.initializeSpinner();
}

Spinner.prototype.initializeSpinner = function() {
  var MAX_ROTATIONS  = 50;
  var spinner = this;
  var degreesPerSegment = 360/spinner.segments;

  $(spinner.targetElement).on("click", function(e) {
    var turns = Math.floor(Math.random() * (MAX_ROTATIONS));
    var totalRotation = degreesPerSegment * turns;
    individualSegment = turns % spinner.segments;

    console.log(spinner.options[individualSegment])

    $("img").rotate({ animateTo: totalRotation })
  })
}

