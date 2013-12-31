var x = 2 < 3;

if (x && !x) {
  console.log("This will never execute. Unless something is wrong with your CPU.");
}
else if (x) {
  console.log("2 is indeed less than 3.");
}

var dict = {
  "condition1": false,
  "condition2": 679 % 3 == 0,
};

if (dict['condition1'] && dict['condition2']) {
  dict['condition3'] = true;
}

if (dict['condition3']){
  console.log("True");
}
else {
  console.log("False");
}

for (var i = 0; i < 12; i++) {
  //var x = 5 + i++; // x = 5
  //var x = 5 + ++i; // x = 6
}

var i = 0;
for ( ; i < 12; i++) {

}

for (var i = 0; i < 12; ) {
  i++;
}

for (var i = 0; ; i++) {
  if (i >= 12) {
    break;
  }
}

var i = 0;
for (; ;) {
  if (i >= 12) break;
  i++;
}

var i = 0;
for (; ;) {
  if (i++ >= 12) break;
}

var i = 0;
while (i < 12) {
  i++;
}