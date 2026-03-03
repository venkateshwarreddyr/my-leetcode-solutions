// Problem: Get Equal Substrings Within Budget
// LeetCode: https://leetcode.com/problems/get-equal-substrings-within-budget/
// Language: javascript
// Runtime: 332 ms
// Memory: 60.9 MB
// Submitted: 2024-05-28


cl = console.log
var equalSubstring = function (s, t, maxCost) {
    const distance = (ch1, ch2) => {
        return Math.abs(ch1.charCodeAt(0) - ch2.charCodeAt(0))
    }

    let n = s.length
    let totalCost = 0
    let L = 0
    let R
    for (R = 0; R < n;) {
        cl(R, L)
        totalCost += distance(s[R], t[R]);
        R++

        if (totalCost > maxCost) {
            totalCost -= distance(s[L], t[L]);
            L++
        }

    }
    return R - L
};
