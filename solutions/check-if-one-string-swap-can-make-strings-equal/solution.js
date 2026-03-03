// Problem: Check if One String Swap Can Make Strings Equal
// LeetCode: https://leetcode.com/problems/check-if-one-string-swap-can-make-strings-equal/
// Language: javascript
// Runtime: 64 ms
// Memory: 41.9 MB
// Submitted: 2023-05-23

cl = console.log
var areAlmostEqual = function (s1, s2) {
    if (s1 === s2) return true
    let n = s1.length;
    let swapIndex = []

    for (let i = 0; i < n; i++) {
        if (s1[i] !== s2[i]) {
            swapIndex.push(i)
        }
    }

    if (swapIndex.length === 2) {
        return s1[swapIndex[0]] === s2[swapIndex[1]] && s1[swapIndex[1]] === s2[swapIndex[0]]
    }

    return false
};
