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
/* x = 128 [5] */

var x = ((dict['a'] && dict['d']) || dict['b']);
/* x = true [10] */

var x = ((25 % 3 == 0) || (dict['e'] % 64)) && dict['c'];
/* x = true [15] */

/* 
 * [5] Add two different items to x
 */
dict[f] = 63 < 52;
dict[g] = 10 % 2;


/* 
 * [10] Create an array with two items where the indices are not numbers.
 */
var kittens = {
  a: is,
  b: cutes;
} 

/* 
 * [25] In the space provided show what would be printed to the console if 
 * this code is executed.
 * (nothing would be added, because we did not command it to print. We didn't use console.log(). 
 * But as for the value of x, right now it stands at being "false"*/
 
var x = 17,
    y = ((true || false) || (false && false)) && !false, /* true*/
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
 * 0
 * 2
 * 4
 * 11
 */
 
/* 
 * [15] Write 3 equivalent but distinct forloops for the followin while loop:
 */
 
var i = 0;
while (i < 32) {
  i++;
}
  for (var i = 0; i < 32; i++) {
  }
  
  for (var i = 0; i < 32; ) {
  i++;
  }
  
  for (var i = 0; i++;) {
    if (i >= 32)
      break;
  }
  
  


/*
 * [5] Complete this forloop so that it executes exactly 16 times
 */
 
for (var i = 0; i < 16; i++) {

}

/*
 * [15] Complete this forloop so that it executes exactly 16 times 
 */
for (var i = 0; i < 32; i = i + 2) {}

/*
 * [10] Complete this forloop so that it executes exactly TEN times
 */
for (i = -2; i < 8; i++) {}

/*
 * [15] Complete this forloop so that it executes exactly 16 times
 */
for (var i = 0; i < 64; i = i + 4) {}

/*
 * [5] How many times will this forloop executes?
 */
for (var i = -4; i < 0; i++) {}

/*
 * [10] How many times will this forloop executes?
 */
for (var i = 0; i != 3; i++) {}
3 times

/*
 * [15] How many times will this forloop executes?
 */
for (var i = 1; i % 3 != 0; i++) {}
2
/*
 * [15] What does the following code print? 
 */
var j = 0;
for (var i = 0; j < 10; j++) {
  i = i + 10;
}
console.log(i);
10 times. 