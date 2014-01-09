var isEven = function(number) {
    if (number % 2 === 0) {
        return true;
    }
    else if (isNaN(number) === true){
        return "Your input is not a number";
    }
    else {
        return false;
    }
  // Your code goes here!
  
};

console.log(isEven(3));