$(document).ready(function(){
  var spinner = new Spinner({
    targetElement: "img",
    segments:      6
  })
})

var Spinner = function(args) {
  this.targetElement = args.targetElement;
  this.segments      = args.segments || 6;
  this.options       = {};

  this.options[0] = "1: Chickens";
  this.options[1] = "6: Cows";
  this.options[2] = "5: Sheep";
  this.options[3] = "4: Ducks";
  this.options[4] = "3: Fish";
  this.options[5] = "2: Pigs";

  this.initializeSpinner();
}

Spinner.prototype.initializeSpinner = function() {
  var MAX_ROTATIONS  = 50;
  var spinner = this;
  var degreesPerSegment = 360/spinner.segments;
  var totalRotation = 0;
  var turns = 0;
  var place = 0;

  $(spinner.targetElement).on("click", function(e) {

    turns = Math.floor(Math.random() * (MAX_ROTATIONS));
    totalRotation = degreesPerSegment * turns;
    individualSegment = turns % spinner.segments;

    console.log(spinner.options[individualSegment])

    $("img").rotate({ animateTo: totalRotation })
  })
}

