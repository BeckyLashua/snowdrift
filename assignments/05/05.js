/*
 * This object represents our priority queue data structure. 
 *
 * To call functions belonging to this object, use the "dot" operator. So, to 
 * add an element to the priority queue, you would do:
 * 
 *    priorityQueue.push(myNumber);
 *
 * and similar for other functions.
 */
var priorityQueue = {

    // the object that actually stores the priority queue's data
    array: [],
    
    // the maximum capacity of the priority queue, default is 10
    maximumCapacity: 10,
    
    /**
     * Returns the maximum capacity of this queue.
     * @return {Number} The maximum capacity of this priority queue.
     */
    getMaximumCapacity: function() {
        /* ENTER NEW CODE HERE */
    },
    
    /**
     * Sets the maximum capacity of this queue.
     * @param {Number} The new maximum capacity of this priority queue.
     * @return {boolean} True if the capacity was changed, false otherwise.
     */
     setMaximumCapacity: function(newMaximumCapacity) {
        /* ENTER NEW CODE HERE */
     },
    
    /**
     * Returns the number of elements in this priorityQueue.
     * @return {Number} The number of elements in the priorityQueue.
     */
    size: function() {
        return this.array.length;
    },
    
    /**
     * Returns the element at the front of the priorityQueue.
     * @return {mixed} The element at the front of the priorityQueue, or null if empty.
     */
    peak: function() {
        return this.size() == 0 ? null : this.array[0];
    },
    
    /**
     * Removes AND returns the element at the front of the priorityQueue.
     * @return {mixed} The element at the front of the priorityQueue.
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
     * Inserts the given element into its appropriate position in the queue.
     * @param {mixed} The element to be inserted.
     * @return {boolean} True if the element was inserted successfully, and 
     *                   false otherwise.
     */
    push: function(obj) {
        /* ENTER NEW CODE HERE */
        
        /* You must change the code in this method so that it does 2 additional
         * things:
         * 
         * 1) The queue never contains more elements than this.maximumCapacity,
         *    and
         * 2) The element is inserted in a way that preserves the ordering in 
         *    the queue, or the "priority" of the queue.
         */
    },

    /**
     * Tests whether the given object is in the priorityQueue.
     * @param {mixed} The element to be tested.
     * @return {boolean} True if the object is in the priorityQueue, and false otherwise.
     */
    contains: function(obj) {
        for (i in this.array) {
            if (this.array[i] == obj)
                return true;
        }
        
        return false;
    },

    /**
     * Removes the given element from the priorityQueue.
     * @param {mixed} The element to be removed.
     * @return {mixed} The element that was removed if it existed in the priorityQueue,
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
for (var i = 20; i > 10; i--) {
  priorityQueue.push(i);
}

console.log(priorityQueue.getMaximumCapacity()); // 10

console.log(priorityQueue.size()); // 10
console.log(priorityQueue.contains(20)); // true;
console.log(priorityQueue.contains(10)); // false;

console.log(priorityQueue.peak()); // 11
console.log(priorityQueue.pop()); // 11
console.log(priorityQueue.pop()); // 12
console.log(priorityQueue.peak()); // 13

console.log(priorityQueue.size()); // 8

console.log(priorityQueue.push(10)); // true
console.log(priorityQueue.push(11)); // true
console.log(priorityQueue.push(9)); // false

console.log(priorityQueue.contains(9)); // false
console.log(priorityQueue.contains(10)); // true

console.log(priorityQueue.peak()); // 10

console.log(priorityQueue.setMaximumCapacity(10)); // false
console.log(priorityQueue.setMaximumCapacity(12)); // true
console.log(priorityQueue.push(9)); // true
console.log(priorityQueue.push(14.5)); // true

while (priorityQueue.size() > 0) {
    console.log(priorityQueue.pop());
}

// 9, 10, 11, 13, 14, 14.5, 15, 16, 17, 18, 19, 20