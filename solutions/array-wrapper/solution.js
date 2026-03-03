// Problem: Array Wrapper
// LeetCode: https://leetcode.com/problems/array-wrapper/
// Language: javascript
// Runtime: 49 ms
// Memory: 41.8 MB
// Submitted: 2023-12-13

/**
 * @param {number[]} nums
 * @return {void}
 */
var ArrayWrapper = function(nums) {
    this.nums = nums
    ArrayWrapper.prototype.valueOf = function() {
        return this.nums.reduce((a, c) => a+c, 0)
    }

    ArrayWrapper.prototype.toString = function() {
        return JSON.stringify(this.nums)
    }
};


/**
 * const obj1 = new ArrayWrapper([1,2]);
 * const obj2 = new ArrayWrapper([3,4]);
 * obj1 + obj2; // 10
 * String(obj1); // "[1,2]"
 * String(obj2); // "[3,4]"
 */
