// Problem: Find Indices With Index and Value Difference II
// LeetCode: https://leetcode.com/problems/find-indices-with-index-and-value-difference-ii/
// Language: javascript
// Runtime: 92 ms
// Memory: 55.2 MB
// Submitted: 2023-10-15

var findIndices = function (nums, indexDifference, valueDifference) {
    let n = nums.length;
    let sufmax = new Array(n);
    let sufmin = new Array(n);
    for (let i = 0, max2 = -Infinity, min2 = Infinity; i < n; i++) {
        sufmax[n - 1 - i] = max2 = Math.max(max2, nums[n - 1 - i]);
        sufmin[n - 1 - i] = min2 = Math.min(min2, nums[n - 1 - i]);
    }

    for (let i = 0; i < nums.length; i++) {
        if (Math.abs(nums[i] - sufmax[i + indexDifference]) >= valueDifference ||
            Math.abs(nums[i] - sufmin[i + indexDifference]) >= valueDifference) {
            for (let j = i + indexDifference; j < nums.length; j++)
                if (Math.abs(nums[i] - nums[j]) >= valueDifference) {
                    return [i, j];
                }
        }

    }
    return [-1, -1];
};
