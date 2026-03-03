// Problem: Largest Perimeter Triangle
// LeetCode: https://leetcode.com/problems/largest-perimeter-triangle/
// Language: javascript
// Runtime: 104 ms
// Memory: 45.5 MB
// Submitted: 2023-05-29

cl = console.log
var largestPerimeter = function (nums) {
    nums.sort((a, b) => b - a)
    let n = nums.length

    for (let i = 0; i < n - 2; i++) {
        if (nums[i] < nums[i + 1] + nums[i + 2]) {
            return nums[i] + nums[i + 1] + nums[i + 2]
        }
    }

    return 0
};
