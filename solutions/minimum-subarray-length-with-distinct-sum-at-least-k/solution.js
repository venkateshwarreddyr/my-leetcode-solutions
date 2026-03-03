// Problem: Minimum Subarray Length With Distinct Sum At Least K
// LeetCode: https://leetcode.com/problems/minimum-subarray-length-with-distinct-sum-at-least-k/
// Language: javascript
// Runtime: 157 ms
// Memory: 83.6 MB
// Submitted: 2026-01-18

var minLength = function (a, k) {
    let n = a.length;
    let minLen = Infinity;
    let freq = {};
    let sum = 0;
    let i = 0;
 
    for (let j = 0; j < n; j++) {
        freq[a[j]] = (freq[a[j]] ?? 0) + 1;
        sum += freq[a[j]] === 1 ? a[j] : 0;
        while (i <= j && sum >= k) {
            let len = j - i + 1;
            minLen = Math.min(minLen, len);
            sum -= freq[a[i]] === 1 ? a[i] : 0;
            freq[a[i]] = (freq[a[i]] ?? 0) - 1;
            i++;
        }
    }
 
    if (minLen === Infinity) return -1;
    return minLen;
};
 
