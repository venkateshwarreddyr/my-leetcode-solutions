// Problem: Maximum Number of Operations to Move Ones to the End
// LeetCode: https://leetcode.com/problems/maximum-number-of-operations-to-move-ones-to-the-end/
// Language: javascript
// Runtime: 6 ms
// Memory: 58.4 MB
// Submitted: 2025-11-13

var maxOperations = function (s) {
    let countOne = 0;
    let ans = 0;
    let i = 0;
    while (i < s.length) {
        if (s[i] === "0") {
            while (i + 1 < s.length && s[i + 1] === "0") {
                i++;
            }
            ans += countOne;
        } else {
            countOne++;
        }
        i++;
    }
    return ans;
};
