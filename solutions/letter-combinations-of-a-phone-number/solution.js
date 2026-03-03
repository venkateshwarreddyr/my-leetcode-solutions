// Problem: Letter Combinations of a Phone Number
// LeetCode: https://leetcode.com/problems/letter-combinations-of-a-phone-number/
// Language: javascript
// Runtime: 58 ms
// Memory: 41.9 MB
// Submitted: 2023-08-03

cl = console.log
/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function (digits) {
    let ob = {
        2: "abc",
        3: "def",
        4: "ghi",
        5: "jkl",
        6: "mno",
        7: "pqrs",
        8: "tuv",
        9: "wxyz",
    }
    let an = []
    function bt(s, start) {
        let n = digits.length
        if (s && s.length === n) {
            an.push(s)
            return;
        }
        if (start === n) return

        for (let c of ob[digits[start]]) {
            bt(s + c, start + 1)
        }
    }
    bt("", 0)

    return an;
};
