// Problem: Count Number of Distinct Integers After Reverse Operations
// LeetCode: https://leetcode.com/problems/count-number-of-distinct-integers-after-reverse-operations/
// Language: javascript
// Runtime: 524 ms
// Memory: 90.7 MB
// Submitted: 2022-10-16

/**
 * @param {number[]} nums
 * @return {number}
 */
var countDistinctIntegers = function(nums) {
    let newset = new Set();
    nums.forEach((item) => {
        newset.add(item);
        newset.add(Number(item.toString().split("").reverse().join("")));
    });
    
    return newset.size;
};
