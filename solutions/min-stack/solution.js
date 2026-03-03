// Problem: Min Stack
// LeetCode: https://leetcode.com/problems/min-stack/
// Language: javascript
// Runtime: 136 ms
// Memory: 46.8 MB
// Submitted: 2021-07-10

/**
 * initialize your data structure here.
 */
var MinStack = function() {
    this.st=[];
    this.sst = [];
};

/** 
 * @param {number} val
 * @return {void}
 */
MinStack.prototype.push = function(val) {
    this.st.push(val);
    this.sst.length?val<=this.sst[this.sst.length-1]&&this.sst.push(val):this.sst.push(val);
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function() {
    let x = this.st.pop();
    if(x === this.sst[this.sst.length-1]) this.sst.pop();
};

/**
 * @return {number}
 */
MinStack.prototype.top = function() {
    return this.st[this.st.length-1];
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function() {
    return this.sst[this.sst.length-1];
};

/** 
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(val)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */
