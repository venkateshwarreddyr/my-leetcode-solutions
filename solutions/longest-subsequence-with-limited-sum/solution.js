// Problem: Longest Subsequence With Limited Sum
// LeetCode: https://leetcode.com/problems/longest-subsequence-with-limited-sum/
// Language: javascript
// Runtime: 79 ms
// Memory: 45.1 MB
// Submitted: 2023-07-06

var answerQueries = function (nums, qs) {
    let n = nums.length;
    let m = qs.length;
    let an = [];

    nums = nums.sort((a, b) => (a - b));

    for (let q of qs) {
        let sum = 0;
        for (let i = 0; i < n; i++) {
            sum += nums[i]
            if (sum > q) {
                an.push(i);
                break;
            }
        }

        if (sum <= q) {
            an.push(n);
        }
    }

    return an;
};
