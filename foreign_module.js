var PublicFizzBuzz = {
  fizz_buzz_to: function(max) {
    return Private.fizz_buzz_recur(1, max, []);
  },

  some_other_function: function() {
    return "This is honestly only here for there to be a second public function.";
  }
};

var Private = {
  fizz_buzz_recur: function(current, max, accumulator) {
    if (current > max) {
      return accumulator;
    } else {
      if (current % 15 == 0) {
        return Private.fizz_buzz_recur(current + 1, max, accumulator.concat(["FizzBuzz"]));
      } else if (current % 5 == 0) {
        return Private.fizz_buzz_recur(current + 1, max, accumulator.concat(["Fizz"]));
      } else if (current % 3 == 0) {
        return Private.fizz_buzz_recur(current + 1, max, accumulator.concat(["Buzz"]));
      } else {
        return Private.fizz_buzz_recur(current + 1, max, accumulator.concat([current]));
      }
    }
  }
};

module.exports = PublicFizzBuzz;
