// [5 pts] Write a forloop that executes exactly 24 times
  for (var i = 0; i < 24; i++){
  }
// [15 pts] Write three equivalent forloops
  for (var i = 0; ;i++){
    if (i < 24){
      break;
    }
  }
  
  var i = 0;
  for ( ;i < 24; ){
    i++;
  }
  
  
  var i = 0;
  for ( ; i < 24 ; i++){
  }
  
  

// [10 pts] Write an equivalent while loop
  var i = 0;
  while(i < 24){
    i++;
  }

// [10 pts] Assume that var arr is an array, write a for-each loop to go 
// through every element of arr

  for (var i = 0; i <= arr.length; i++){
  }

// [15 pts] Write a function that PRINTS to the console all even 
// numbers from 0 to 20 inclusive, and then RETURNS true.
  var printingEven = function(num)
    for (var i = 0; i <= 20; i++){
      if (num % 2 == 0){
        console.log(num);
        return true;
      }
      return false;
    }
// [15 pts] Write a function that takes an array of strings and returns 
// the longest string.

  var longestString = function(array){
    var currentLongest = array[0];
    for (var i = 0; i <= array.length; i++){
      if (array[i].length > currentLongest.length){
         currentLongest = array[i];
      }
    return currentLongest; 
    }
    
  }
// [15 pts] Write a function that takes 3 arguments: a function f, and two
// arbitrary arguments x, and y. The function should call f inside of itself
// and pass x and y into f as arguments. Finally, the outer function should
// return the result of executing f.

  var functionCeption = function(f, x, y){
    return f(x, y);
  }


// [15 pts] Write a function that creates a "Car" object with the following 
// parameters: mpg, make, model, and mileage. 
var car = function(mpg, make, model, and mileage){
  this.mpg = mpg;
  this.make = make;
  this.model = model;
  this.mileage = mileage;
  
  this.getFullCarInfo = function(){
    return mpg + " " + make + " " + model " " + mileage;
  }
}













