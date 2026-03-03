// Problem: Majority Element II
// LeetCode: https://leetcode.com/problems/majority-element-ii/
// Language: javascript
// Runtime: 6 ms
// Memory: 55.6 MB
// Submitted: 2026-01-02

var majorityElement = function (a) {
    let n = a.length;
    let aThirdOfTotal = Math.trunc(n / 3);

    let ans = []; // Array
    let freq = {};
    for (let i = 0; i < n; i++) {
        let e = a[i]
        freq[e] = (freq[e] ?? 0) + 1
        if (freq[e] === aThirdOfTotal + 1) {
            ans.push(e);
        }
    }
    return ans
};

