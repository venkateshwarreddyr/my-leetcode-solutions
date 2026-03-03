// Problem: Find Pivot Index
// LeetCode: https://leetcode.com/problems/find-pivot-index/
// Language: javascript
// Runtime: 71 ms
// Memory: 44.7 MB
// Submitted: 2023-05-22

/**
 * @param {number[]} nums
 * @return {number}
 */
var pivotIndex = function (nums) {
    let tsum = nums.reduce((a, c) => a + c, 0);
    let sum = 0;
    for (let i = 0; i < nums.length; i++) {
        tsum -= nums[i]
        if (sum === tsum) {
            return i
        }
        sum += nums[i]
    }

    return -1
};
