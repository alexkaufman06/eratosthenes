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
