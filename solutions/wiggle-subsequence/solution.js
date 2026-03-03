// Problem: Wiggle Subsequence
// LeetCode: https://leetcode.com/problems/wiggle-subsequence/
// Language: javascript
// Runtime: 0 ms
// Memory: 52.6 MB
// Submitted: 2026-01-01

var wiggleMaxLength = function (nums) {
    if (nums.length <= 1) return nums.length;

    let prevDown = 1
    let prevUp = 1

    for (let i = 1; i < nums.length; i++) {
        if (nums[i - 1] < nums[i]) {
            let currUp = prevDown + 1;
            prevUp = currUp;
        } else if (nums[i - 1] > nums[i]) {
            let currDown = prevUp + 1;
            prevDown = currDown;
        }
    }

    return Math.max(prevUp, prevDown);
};
