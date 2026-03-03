// Problem: Number of Distinct Averages
// LeetCode: https://leetcode.com/problems/number-of-distinct-averages/
// Language: javascript
// Runtime: 57 ms
// Memory: 42.1 MB
// Submitted: 2023-05-20

/**
 * @param {number[]} nums
 * @return {number}
 */
var distinctAverages = function (nums) {
    let n = nums.length;
    nums.sort((a, b) => a - b);

    let avgSet = new Set();
    for (let i = 0; i < n / 2; i++) {
        avgSet.add((nums[i] + nums[n - 1 - i]) / 2)
    }

    return avgSet.size

};
