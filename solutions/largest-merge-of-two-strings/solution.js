// Problem: Largest Merge Of Two Strings
// LeetCode: https://leetcode.com/problems/largest-merge-of-two-strings/
// Language: javascript
// Runtime: 9 ms
// Memory: 61.4 MB
// Submitted: 2025-12-25

var largestMerge = function (s1, s2) {
    let mergedstr = "";

    while (s1 && s2) {
        if (s1 > s2) {
            mergedstr += s1[0]
            s1 = s1.slice(1)
        } else {
            mergedstr += s2[0]
            s2 = s2.slice(1)
        }
    }
    mergedstr += s1
    mergedstr += s2

    return mergedstr;
};

