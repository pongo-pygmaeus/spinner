$(document).ready(function(){
  var value = 0
  $("img").on("click", function(e) {
    value = Math.floor(Math.random() * (3600 - 45)) + 45;
    $("img").rotate({ animateTo: value })
    e.preventDefault();
  })
})
