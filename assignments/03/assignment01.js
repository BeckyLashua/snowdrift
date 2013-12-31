/* THERE ARE A TOTAL OF [175] points */

/* 
 * Fill in the blanks. 
 */
var dict = {
  a: true,
  b: false,
  c: a || b,
  d: 1 < 10,
  e: 128;
}

var x = dict['e'];
/* x = ? [5] */

var x = ((dict['a'] && dict['d']) || dict['b']);
/* x = ? [10] */

var x = ((25 % 3 == 0) || (dict['e'] % 64)) && dict['c'];
/* x = ? [15] */

/* 
 * [5] Add two different items to x
 */
var x = [];

/* 
 * [10] Create an array with two items where the indices are not numbers.
 */
var x = /* CODE HERE */;

/* 
 * [25] In the space provided show what would be printed to the console if 
 * this code is executed.
 */
 
var x = 17,
    y = ((true || false) || (false && false)) && !false,
    z = "this is a string";

if ('this is a string' == z) {
  console.log(0);
  if (y) {
    console.log(2);
    if (!y || true) {
      console.log(4);
    }
    else if (true) {
      console.log(5);
    }
    else {
      console.log(6);
    }
  }
  else {
    console.log(3);
  }
  
  if (x - 20 < 0 && x - 2 % 3 == 0) {
    console.log(11);
  }
  else {
    console.log(12);
  }
}
else {
  console.log(1);
  if (y) {
    console.log(7);
    if (x - 15 > 2) {
      console.log(9);
    }
    else {
      console.log(10);
    }
  }
  else {
    console.log(8);
  }
}

/*
 * Print the numbers in order as they would be if this code was executed:
 *
 */
 
/* 
 * [15] Write 3 equivalent but distinct forloops for the followin while loop:
 */
 
var i = 0;
while (i < 32) {
  i++;
}

/*
 * [5] Complete this forloop so that it executes exactly 16 times
 */
 
for (var i = 0; /* PUT CODE HERE */; i++) {

}

/*
 * [15] Complete this forloop so that it executes exactly 16 times 
 */
for (var i = 0; /* PUT YOUR CODE HERE */; i = i + 2) {}

/*
 * [10] Complete this forloop so that it executes exactly TEN times
 */
for (/* PUT YOUR CODE HERE */; i < 8; i++) {}

/*
 * [15] Complete this forloop so that it executes exactly 16 times
 */
for (var i = 0; i < 64; /* PUT YOUR CODE HERE */) {}

/*
 * [5] How many times will this forloop executes?
 */
for (var i = -4; i < 0; i++) {}

/*
 * [10] How many times will this forloop executes?
 */
for (var i = 0; i != 3; i++) {}

/*
 * [15] How many times will this forloop executes?
 */
for (var i = 1; i % 3 != 0; i++) {}

/*
 * [15] What does the following code print? 
 */
var j = 0;
for (var i = 0; j < 10; j++) {
  i = i + 10;
}
console.log(i);