// Problem: Array Partition
// LeetCode: https://leetcode.com/problems/array-partition/
// Language: javascript
// Runtime: 198 ms
// Memory: 47.2 MB
// Submitted: 2022-02-09

/**
 * @param {number[]} nums
 * @return {number}
 */
var arrayPairSum = function(nums) {
    sum = 0
    nums = nums.sort((a,b) => a-b);
    for(let i=0;i<nums.length;i+=2){
        sum+=nums[i]
    }
    return sum
};
