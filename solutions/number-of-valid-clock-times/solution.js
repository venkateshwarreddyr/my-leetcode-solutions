// Problem: Number of Valid Clock Times
// LeetCode: https://leetcode.com/problems/number-of-valid-clock-times/
// Language: javascript
// Runtime: 58 ms
// Memory: 42 MB
// Submitted: 2023-05-24

/**
 * @param {string} time
 * @return {number}
 */
var countTime = function (time) {
    let [[h1, h2], [m1, m2]] = time.split(':').map(e => e.split(''))
    let an = 1
    if (h1 === '?' && h2 == '?') {
        an *= 24
    } else if (h1 === '?' && h2 > '3') {
        an *= 2
    } else if (h1 === '?') {
        an *= 3
    }

    if (h2 == '?' && h1 === '2') {
        an *= 4
    } else if (h2 == '?' && '0123456789'.includes(h1)) {
        an *= 10
    }

    if (m1 === '?' && m2 === '?') {
        an *= 60
    } else if (m1 === '?') {
        an *= 6;
    } else if (m2 === '?') {
        an *= 10
    }

    return an
};
