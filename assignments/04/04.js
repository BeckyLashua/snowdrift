/*
 * This object represents our queue data structure. 
 *
 * To call functions belonging to this object, use the "dot" operator. So, to 
 * add an element to the queue, you would do:
 * 
 *    queue.push(myNumber);
 *
 * and similar for other functions.
 */
var queue = {

    // the object that actually stores the queue's data
    array: [],
    /*
     * ######## MAJOR NOTE:  ########
     * in order to array, you must use this.array. So to add an element to array,
     * use this.array.push(newElement);
     *
     * This has to do with how variables are scoped, or what variables different
     * parts of the code have access to. This isn't very important right now, 
     * and wont come up for a while. For now just stick with this.array.
     */
    
    /**
     * Returns the number of elements in this queue.
     * @return {Number} The number of elements in the queue.
     */
    size: function() {
         return this.array.length;
    },
    
    /**
     * Returns the element at the front of the queue.
     * @return {mixed} The element at the front of the queue, or null if empty.
     */
    peak: function() {
          return this.array[0];
    },
    
    /**
     * Removes AND returns the element at the front of the queue.
     * @return {mixed} The element at the front of the queue.
     */
    pop: function() {
          var value = this.array[0];
          this.array.splice(0,1);
          return value;
         
          
          
           
    },

    /**
     * Inserts the given element into the back of the queue.
     * @param {mixed} The element to be inserted.
     */
    push: function(obj) {
         this.array.push(obj);
    },

    /**
     * Tests whether the given object is in the queue.
     * @param {mixed} The element to be tested.
     * @return {boolean} True if the object is in the queue, and false otherwise.
     */
    contains: function(obj) {
        for (var i = 0; i < this.array.length; i++) {
          if (this.array[i] === obj) {
            return true;
          }
       }
       
       return false;
    },

    /**
     * Removes the given element from the queue.
     * @param {mixed} The element to be removed.
     * @return {mixed} The element that was removed if it existed in the queue,
     *                 or false otherwise.
     */
    remove: function(obj) {
        // NOTE: this is a special kind of forloop. In English, it simply says:
        // "for every INDEX i in this.array, do the following ..."
        // it's just a shortcut for for (var i = 0; i < this.array.length; i++)
        for (var i in this.array) {
            if (this.array[i] == obj) {
                  this.array.splice(i,1);
                  return obj;
            }
        }
            
        return false;
        
        /* INSERT CODE HERE 
         * HINT: If we're at this point in the code, then we've searched every
         * element in this.array.
         */
    },
}

/* test cases to see if your code works */
for (var i = 0; i < 10; i++) {
  queue.push(i);
}

console.log(queue.size()); // 10
console.log(queue.contains(0)); // true
console.log(queue.contains(5)); // true ****
console.log(queue.contains(10)); // false

console.log(queue.remove(5)); // 5 
console.log(queue.size()); // 9
console.log(queue.contains(5)); // false

var front = queue.pop();
console.log(queue.size()); // 8
console.log(front); // 0 

var newFront = queue.peak();
console.log(queue.size()); // 8
console.log(newFront); // 1

newFront = queue.pop();
console.log(queue.size()); // 7
console.log(newFront); // 1 

newFront = queue.peak();
console.log(queue.size()); // 7
console.log(newFront); // 2
