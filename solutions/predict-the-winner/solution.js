// Problem: Predict the Winner
// LeetCode: https://leetcode.com/problems/predict-the-winner/
// Language: javascript
// Runtime: 244 ms
// Memory: 41.5 MB
// Submitted: 2024-01-07

/**
 * @param {number[]} nums
 * @return {boolean}
 */
var predictTheWinner = function(nums) {
    

    function fn(i, j) {
        if(i === j) {
            return nums[i]
        }

        let left = nums[i] - fn(i+1, j)
        let right = nums[j] - fn(i, j-1)

        return Math.max(left, right)
    }

    return fn(0, nums.length-1) >= 0
};
