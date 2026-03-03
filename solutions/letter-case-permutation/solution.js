// Problem: Letter Case Permutation
// LeetCode: https://leetcode.com/problems/letter-case-permutation/
// Language: javascript
// Runtime: 87 ms
// Memory: 44.7 MB
// Submitted: 2023-07-11

/**
 * @param {string} s
 * @return {string[]}
 */
var letterCasePermutation = function (S) {
    let n = S.length
    S = S.toLowerCase()
    let an = []
    let regex = /[0-9]/

    function bt(i, s) {

        if (s.length === n) {
            an.push(s)
            return;
        }


        if (S[i].match(regex)) {
            bt(i + 1, s + S[i])
        } else {
            bt(i + 1, s + S[i])
            bt(i + 1, s + S[i].toUpperCase())
        }
    }

    bt(0, "")

    return an;
};
