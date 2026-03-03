// Problem: Find Consecutive Integers from a Data Stream
// LeetCode: https://leetcode.com/problems/find-consecutive-integers-from-a-data-stream/
// Language: javascript
// Runtime: 442 ms
// Memory: 110.7 MB
// Submitted: 2023-06-07

/**
 * @param {number} value
 * @param {number} k
 */
var DataStream = function(value, k) {
    v = value
    f = k
    x = 0
};

/** 
 * @param {number} num
 * @return {boolean}
 */
DataStream.prototype.consec = function(num) {
    if(num === v){
        x++
    } else {
        x=0
    }
    return x>=f
};

/** 
 * Your DataStream object will be instantiated and called as such:
 * var obj = new DataStream(value, k)
 * var param_1 = obj.consec(num)
 */
