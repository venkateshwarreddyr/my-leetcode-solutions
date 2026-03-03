// Problem: Count Substrings That Satisfy K-Constraint I
// LeetCode: https://leetcode.com/problems/count-substrings-that-satisfy-k-constraint-i/
// Language: javascript
// Runtime: 75 ms
// Memory: 55.3 MB
// Submitted: 2024-08-21

/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var countKConstraintSubstrings = function (s, k) {
    let an = 0
    for (let i = 0; i < s.length; i++) {
        let ones = 0, zeros = 0;
        let ns = ""
        for (let j = i; j < s.length; j++) {
            ns+=s[j]
            s[j] === "1" ? ones++ : zeros++
            if (ones <= k || zeros <= k) an++
        }

    }

    return an
};
