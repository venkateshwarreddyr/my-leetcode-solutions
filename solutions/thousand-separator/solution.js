// Problem: Thousand Separator
// LeetCode: https://leetcode.com/problems/thousand-separator/
// Language: javascript
// Runtime: 55 ms
// Memory: 42.1 MB
// Submitted: 2023-06-01

/**
 * @param {number} n
 * @return {string}
 */
var thousandSeparator = function (n) {
    n = n.toString()
    let nlen = n.length;

    let an = ""
    let c = 0
    for (let i = nlen - 1; i > -1; i--) {
        an = n[i] + an
        c++
        if (c % 3 === 0 && i !== 0) {
            an = '.' + an
        }
    }

    return an;
};
