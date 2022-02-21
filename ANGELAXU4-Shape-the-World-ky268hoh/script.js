var $text = $("#text");
var numbers = ["First", "Second", "Third", "Fourth", "Fifth", "Sixth", "Seventh", "Eighth", "Ninth", "Tenth"];

for (var i = 1; i <= 10; ++i) {
  (function(index) {
    setTimeout(function() { 
      $text.html(numbers[index-1] + " sentence");
    }, i * 1000);
  })(i);
}