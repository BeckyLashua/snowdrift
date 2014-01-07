for (var i = 0; i < 10; i++) {

}

var i = 0;
while (i++ < 10) {

}


var string = "some text here";
for (var j = string.length - 1; j >= 0; j++) {

}

var j = 0;
while (j++ < string.length - 1) {}

while (bool) {
  // ...
}

for (; bool; ) {

}

var k = 0;
k -= 2; // k = k - 2;
k += 2; // k = k + 2;

     
for (var i = 20; // this clause allows you to declare a variable BEFORE the loop starts executing
     i >= 0; // this condition must be checked before each iteration, as soon as it is false THE FIRST TIME, the loop stops
     i -= 2 // this clause executes after each iteration of the loop
) {

}
var i = 20;
while (i >= 0) {
  i-=2;
}

var x = true;

while (x) {
  if (someCondition) {
    x = false;
  }
}

var k = 100;
while (k % 3 != 0) {
  k--;
}

for (var k=100; k % 3 != 0; k--) {
}

for (var x = 256; x >= 1; x /= 2) {}

var x = 256;
while (x >= 1) {
  x /= 2;
}