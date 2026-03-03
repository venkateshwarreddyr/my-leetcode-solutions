// Problem: Maximum XOR for Each Query
// LeetCode: https://leetcode.com/problems/maximum-xor-for-each-query/
// Language: javascript
// Runtime: 388 ms
// Memory: 69 MB
// Submitted: 2021-06-05

/**
 * @param {number[]} nums
 * @param {number} maximumBit
 * @return {number[]}
 */
var getMaximumXor = function(nums, maximumBit) {
    let newArr = [];
    let ans = (1<<maximumBit) -1;
    
    for(let i = 0; i<nums.length;i++){
        ans = ans^nums[i]
        newArr.push(ans)
    }
    return newArr.reverse()
};
