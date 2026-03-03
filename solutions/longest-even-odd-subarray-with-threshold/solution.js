// Problem: Longest Even Odd Subarray With Threshold
// LeetCode: https://leetcode.com/problems/longest-even-odd-subarray-with-threshold/
// Language: javascript
// Runtime: 181 ms
// Memory: 49.9 MB
// Submitted: 2023-07-02

var longestAlternatingSubarray = function (a, t) {
    let nums = a
    let n = a.length

    cl = console.log

    let max = 0
    for (let l = 0; l < n; l++) {
        if (
            (nums[l] % 2 == 0) &&
            (nums[l] <= t)
        ) {
            let cc = 1
            for (let i = l + 1; i < n; i++) {
                if (
                    ((nums[i - 1] % 2) != (nums[i] % 2)) &&
                    (nums[i] <= t)
                ) {
                    cc++
                } else {
                    break
                }
            }
            max = Math.max(max, cc)
        }
    }
    return max
};
