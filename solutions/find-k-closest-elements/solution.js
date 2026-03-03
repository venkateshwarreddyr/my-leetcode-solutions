// Problem: Find K Closest Elements
// LeetCode: https://leetcode.com/problems/find-k-closest-elements/
// Language: javascript
// Runtime: 16 ms
// Memory: 61.9 MB
// Submitted: 2025-12-25

var findClosestElements = function (arr, k, target) {
    let n = arr.length;

    let min_diff = Infinity;
    let min_diff_i = -1;
    for (let i = 0; i < arr.length; i++) {
        let diff = Math.abs(target - arr[i])
        if (diff <= min_diff) {
            min_diff = diff;
            min_diff_i = i;
        } else {
            break;
        }
    }

    let index = min_diff_i
    return arr
        .slice(Math.max(0, index - k), Math.min(index + k, n - 1) + 1)
        .sort((a, b) => Math.abs(a - target) - Math.abs(b - target) || a - b)
        .slice(0, k)
        .sort((a, b) => a - b);
};

