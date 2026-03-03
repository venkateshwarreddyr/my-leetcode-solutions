// Problem: Find the Array Concatenation Value
// LeetCode: https://leetcode.com/problems/find-the-array-concatenation-value/
// Language: javascript
// Runtime: 73 ms
// Memory: 42.6 MB
// Submitted: 2023-02-12

/**
 * @param {number[]} nums
 * @return {number}
 */
var findTheArrayConcVal = function(nums) {
    let sum = 0;
    
    while(nums.length>1){
        let first = nums.shift();
        let last = nums.pop();
        sum = sum + Number(first.toString() + last.toString());
    }
    
    if(nums.length === 1){
        let last = nums.pop();
        sum+=last;
    }
    
    return sum;
};
