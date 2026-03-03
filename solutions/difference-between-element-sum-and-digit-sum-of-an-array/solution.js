// Problem: Difference Between Element Sum and Digit Sum of an Array
// LeetCode: https://leetcode.com/problems/difference-between-element-sum-and-digit-sum-of-an-array/
// Language: javascript
// Runtime: 59 ms
// Memory: 44.5 MB
// Submitted: 2023-02-27

/**
 * @param {number[]} nums
 * @return {number}
 */
var differenceOfSum = function(nums) {
    let element = 0;
    let digit = 0;
    for(let num of nums){
        element+=num;
        do {
          element -= (num % 10)
          num = Math.floor((num) / 10)
        } while (num > 0)
    }
    
    return Math.abs(element);
};
