// Problem: Shuffle the Array
// LeetCode: https://leetcode.com/problems/shuffle-the-array/
// Language: javascript
// Runtime: 416 ms
// Memory: 48.7 MB
// Submitted: 2021-06-26

/**
 * @param {number[]} nums
 * @param {number} n
 * @return {number[]}
 */
var shuffle = function(nums, n) {
    let counter = 0
    for(let i = 0; i< nums.length;i++){
        nums.splice(i+1, 0, nums.splice(n+counter,1)[0]);
        console.log({nums})
        counter++;
        i++
    }
    return nums
};
