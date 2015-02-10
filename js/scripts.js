var prime = function(upperLimit) {
  var numberArray = [];
  var primes = [];
  var prime = true;

  for (var i = 2; i <= upperLimit; i++) {
    numberArray.push(i);
  }

  numberArray.forEach(function(number) {
    for (var i = 2; i <= 9; i++) {
      if ((number % i === 0) && (i !== number)) {
        prime = false;
      }
    }

    if (prime) {
      primes.push(number);
    }
    prime = true;
  });
  return primes;
};

$(document).ready(function() {
  $("form#prime-finder").submit(function(event) {

    var number = parseInt($("input#number").val());
    var answer = prime(number).join(", ");

    $(".prime-numbers").text(answer);
    $("#result").show();

    event.preventDefault();
  });
});
