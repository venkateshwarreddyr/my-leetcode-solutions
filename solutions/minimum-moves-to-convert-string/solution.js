// Problem: Minimum Moves to Convert String
// LeetCode: https://leetcode.com/problems/minimum-moves-to-convert-string/
// Language: javascript
// Runtime: 54 ms
// Memory: 42.5 MB
// Submitted: 2023-05-24

/**
 * @param {string} s
 * @return {number}
 */
var minimumMoves = function (s) {
    let n = s.length;
    let c = 0;

    for (let i = 0; i < n; i++) {
        if (s[i] === 'X'){
            c++;
            i+=2
        }
    }

    return c;
};
