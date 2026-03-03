// Problem: Increasing Triplet Subsequence
// LeetCode: https://leetcode.com/problems/increasing-triplet-subsequence/
// Language: javascript
// Runtime: 0 ms
// Memory: 74.3 MB
// Submitted: 2025-12-31

var increasingTriplet = function (a) {
    let n = a.length;

    let smallest = Infinity;
    let secondSmallest = Infinity;
    for (let i = 0; i < n; i++) {
        if (a[i] <= smallest) {
            smallest = a[i];
        } else if (a[i] <= secondSmallest) {
            secondSmallest = a[i];
        } else {
            return true; // thirdSmallest
        }
    }

    return false;
};
