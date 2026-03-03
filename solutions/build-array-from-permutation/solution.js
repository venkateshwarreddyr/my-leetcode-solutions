// Problem: Build Array from Permutation
// LeetCode: https://leetcode.com/problems/build-array-from-permutation/
// Language: javascript
// Runtime: 80 ms
// Memory: 43.4 MB
// Submitted: 2021-07-04

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var buildArray = function(nums) {
    let newArr = [];
    for(let i = 0; i<nums.length;i++){
        newArr.push(nums[nums[i]])
    }
    return newArr;
};
