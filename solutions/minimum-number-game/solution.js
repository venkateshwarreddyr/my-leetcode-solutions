// Problem: Minimum Number Game
// LeetCode: https://leetcode.com/problems/minimum-number-game/
// Language: javascript
// Runtime: 67 ms
// Memory: 44.8 MB
// Submitted: 2023-12-24

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var numberGame = function(nums) {
    let an = []
    nums.sort((a, b) => a-b)
    
    for(let i=1;i<nums.length;i+=2) {
        an.push(nums[i])
        an.push(nums[i-1])
    }
    
    return an
};
