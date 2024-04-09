var MinStack = function() {
    this.items = [];
};

/** 
 * @param {number} val
 * @return {void}
 */
 MinStack.prototype.push = function(val) {
    this.items.push({
        value: val,
        min: this.items.length === 0 ? val : Math.min(val, this.getMin())
    });
};

/**
 * @return {void}
 */
 MinStack.prototype.pop = function() {
    this.items.pop();
};

/**
 * @return {number}
 */
 MinStack.prototype.top = function() {
    return this.items[this.items.length -1].value;
};

/**
 * @return {number}
 */
 MinStack.prototype.getMin = function() {
    return this.items[this.items.length-1].min;
};

let minStack = new MinStack();

minStack.push(-2);
minStack.push(0);
minStack.push(-3);
console.log('get Min----', minStack.getMin()); // return -3
minStack.pop();
minStack.top();    // return 0
console.log('get Min',minStack.getMin());
console.log('minStack', minStack);