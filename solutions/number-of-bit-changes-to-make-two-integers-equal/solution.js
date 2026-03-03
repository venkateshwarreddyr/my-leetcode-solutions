// Problem: Number of Bit Changes to Make Two Integers Equal
// LeetCode: https://leetcode.com/problems/number-of-bit-changes-to-make-two-integers-equal/
// Language: javascript
// Runtime: 65 ms
// Memory: 49.5 MB
// Submitted: 2024-07-21

/**
 * @param {number} n
 * @param {number} k
 * @return {number}
 */
var minChanges = function (n, k) {
    let cc = 0

    let x = 1

    while (x <= n || x <= k) {
        if (x & k && !(x & n)) {
            return -1
        } else if (!(x & k) && x & n) {
            cc++
        }

        x += x
    }

    return cc
};
