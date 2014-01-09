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
        return this.array.length == 0 ? null : this.array[0];
    },
    
    /**
     * Removes AND returns the element at the front of the queue.
     * @return {mixed} The element at the front of the queue.
     */
    pop: function() {
        if (this.size() == 0)
            return null;
        // the element to be returned
        var returnValue = this.array[0];
        // remove element using .splice
        this.array.splice(0, 1);
        // return the element
        return returnValue;
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
        for (i in this.array) {
            if (this.array[i] == obj)
                return true;
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
        for (i in this.array) {
            if (this.array[i] == obj) {
                // remove the object with .splice
                this.array.splice(i, 1);
                return obj;
            }
        }
        
        return false;
    },
}

/* test cases to see if your code works */
for (var i = 0; i < 10; i++) {
  queue.push(i);
}

console.log(queue.size()); // 10
console.log(queue.contains(0)); // true
console.log(queue.contains(5)); // true
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
