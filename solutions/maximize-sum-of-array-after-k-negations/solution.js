// Problem: Maximize Sum Of Array After K Negations
// LeetCode: https://leetcode.com/problems/maximize-sum-of-array-after-k-negations/
// Language: javascript
// Runtime: 65 ms
// Memory: 42.5 MB
// Submitted: 2023-06-01

cl = console.log
var largestSumAfterKNegations = function (nums, k) {
    let n = nums.length;

    nums.sort((a, b) => a - b)
    for (let i = 0; i < n && k; i++) {
        if (k && nums[i] < 0) {
            nums[i] = -nums[i]
            k--;
        } else if (k) {
            if (k % 2 === 1) {
                // nums[i - 1] = -nums[i - 1]
                if (nums[i] > nums[i - 1]) {
                    nums[i - 1] = -nums[i - 1]
                } else {
                    nums[i] = -nums[i]
                }
            }
            k = 0
            break;
        }
    }
    if (k) {
        if (k % 2 === 1) {
            nums[n - 1] = -nums[n - 1]
        }
    }
    return nums.reduce((a, c) => a + c, 0)
};
