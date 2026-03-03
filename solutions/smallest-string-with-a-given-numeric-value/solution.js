// Problem: Smallest String With A Given Numeric Value
// LeetCode: https://leetcode.com/problems/smallest-string-with-a-given-numeric-value/
// Language: javascript
// Runtime: 187 ms
// Memory: 72.3 MB
// Submitted: 2023-07-20

/**
 * @param {number} n
 * @param {number} k
 * @return {string}
 */
var getSmallestString = function (n, k) {
    let abc = " abcdefghijklmnopqrstuvwxyz"
    let s = ""

    for (let i = 26; i > 0; i--) {
        while (k - i >= n - 1 && n) {
            s = abc[i] + s
            k -= i
            n--
        }
    }


    return s
};
