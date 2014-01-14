var getFunction = function (num) {
  
  var x = 5;
  
  switch (num) {
    case 0: 
      return function(a) {
          return a + x;
      };
    case 1: 
      return function() {
          console.log("Hi");
      };
  }
}

var innerFunction = getFunction(0);
console.log(innerFunction(1)); // shuld pring 6
var innerFunction2 = getFunction(1);
innerFunction2(); // should print "Hi"