/* 
  [10] Fill in the body of the following function. 
  
  The function takes a list as an argument and an index (or key).
  The function returns true if the value corresponding to the key is negative,
  or false otherwise.
*/

function isNegative(list, key) {
    if (list[key] < 0) {
      return true;
    }
    else {
      return false;
    }
}

/* 
  [20] Fill in the body of the following function.

  The function takes a list as an argument, and must return the INDEX 
  (or the KEY) of last smallest value in the list. You may assume that the
  list contains only numerical values.
*/

function smallestValue(list) {
  var currentSmallestIndex = 0;
  for (var i = 0; i !== list.length; i++) {
      if (list[i] <= list[currentSmallestIndex]) {
        currentSmallestIndex = i;
      }
     }
    return currentSmallestIndex;
}



/*
  [30] Fill in the body of the following function.
  
  The function takes two arguments: a list and a number. The function returns
  a list of all the values from given list that are less than the given number.
*/

function getValuesLessThan(list, number) {
    var newlist = [];
    for (i = 0; i !== list.length; i++) {
      if (list[i] < number) {
      newlist.push(list[i]);
    }
   }
    return newlist;
}

/*
  [40] Fill in code in the following function.
  
  The following function sorts lists of numbers from smallest to largest.
  It works by finding the largest value in the list and then swapping it with
  the last element in the list, then finding the second largest value and 
  swapping it with the second-to-last element, and so on.
  
  Your job is to fill in the gaps.
*/

function weakSort(list) {
    // the outer loop counts down from the front of the list to the bottom
    for (var j = list.length - 1; j >= 0; j--) {
        
        // this variable remembers the INDEX of the largest value
        var indexOfLargest = 0; 
        
        // this loop finds the index of the largest value
        for (var i = 0; i <= j; i++) {
            if (list[i] > list[indexofLargest]) { /* FILL IN THE PROPER CONDITIONAL HERE */
                indexOfLargest = i;
            }
        }
        
        // at this point in the code, indexOfLargest must contain the index 
        // of the largest value.
        
        // the following code SWAPS the value associated with indexOfLargest 
        // with the jth element of the list
        var temp = list[j]; // remember what the jth element of list is
        list[j] = list[indexOfLargest];
        list[indexOfLargest] = temp;/* FILL IN CORRECT NEW VALUE HERE */; 
    }
}