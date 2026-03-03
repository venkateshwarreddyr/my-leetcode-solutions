// Problem: 4Sum II
// LeetCode: https://leetcode.com/problems/4sum-ii/
// Language: javascript
// Runtime: 212 ms
// Memory: 62 MB
// Submitted: 2025-12-30

var fourSumCount = function (a, b, c, d) {
    let freq = {};
    for (let e1 of a) {
        for (let e2 of b) {
            let s = e1 + e2;
            freq[s] = (freq[s] || 0) + 1;
        }
    }

    let sum = 0;
    for (let e3 of c) {
        for (let e4 of d) {
            let s = 0 - (e3 + e4);
            sum += freq[s] || 0;
        }
    }
    return sum;
};

