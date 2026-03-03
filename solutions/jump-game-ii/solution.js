// Problem: Jump Game II
// LeetCode: https://leetcode.com/problems/jump-game-ii/
// Language: javascript
// Runtime: 59 ms
// Memory: 50.5 MB
// Submitted: 2024-05-08

/**
 * @param {number[]} nums
 * @return {number}
 */
var jump = function (nums) {
    let n = nums.length
    let ans = 0, currEnd = 0, currFar = 0;

    for (let i = 0; i < n - 1; i++) {
        currFar = Math.max(currFar, i + nums[i])

        if(i === currEnd) {
            ans++
            currEnd = currFar
        }
        
    }

    return ans

};
