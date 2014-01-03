function functionName() {

}

var functionName = function() {
  // this variable can only be used inside THIS function
  var y = 1;
}

// this variable can be used anywhere
var x = 0;

function factorial(n) {
  // the variable n, like y above, can only be used inside THIS function
  var result = 1;
  for (var i = 1; i <= n; i++) {
    // inside this loop, i will take on the value of 1 ... n
    // in the first iteration, i = 1, in the second iteration i = 2, ...
    // finally, in the last iteration i = n
    result = result * i;
  }
  // once this forloop finishes, result contains the product of all the numbers
  // from 1 to n
  return result;
}

var x = factorial(5);
console.log(x); // prints 5! = 120

function isOdd(n) {
  if (n % 2 != 0) {
    return true;
  }
  else {
    return false;
  }
}

function isOdd(n) {
  if (n % 2 != 0) {
    return true;
  }
  
  return false;
}

function isOdd(n) {
  var bool = n % 2 != 0;
  return bool;
}

function isOdd(n) {
  return n % 2 != 0;
}

///////////////////////
// tip calculator //

/**
 * Calculates the tip given the bill and percent.
 * @param `bill` The bill in dollars.
 * @param `percent` The tip percent as a decimal from 0 to 1.
 */
function tipCalculator(bill, percent) {
  var tip = bill * percent;
  return tip;
}
function tipCalculator(bill, percent) {
  return bill * percent;
}

/* functions and arrays */

var x = [0, 45, 42, 10, 53, 6, 78];

/** Finds largest element in numeric array, assumes array isn't empty. */
function largestValue(list) {
  var currentLargest = list[0];
  for (var i = 0; i < list.length; i++) {
    if (list[i] > currentLargest) {
      currentLargest = list[i];
    }
  }
  return currentLargest;
}

var largest = largestValue(x);
console.log(largest); // prints 78

function contains(needle, haystack) {
  for (var i = 0; i < haystack.length; i++) {
    if (haystack[i] == needle) {
      return true;
    }
  }
  // if we're out of the forloop, that means we never returned true
  // also, it means we checked every member of haystack, so we can 
  // safely return false
  return false;
}