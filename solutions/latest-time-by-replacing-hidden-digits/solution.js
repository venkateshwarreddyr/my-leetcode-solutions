// Problem: Latest Time by Replacing Hidden Digits
// LeetCode: https://leetcode.com/problems/latest-time-by-replacing-hidden-digits/
// Language: javascript
// Runtime: 63 ms
// Memory: 41.5 MB
// Submitted: 2023-05-23

cl = console.log
var maximumTime = function (time) {
    let [[h1, h2], [m1, m2]] = time.split(':').map(e => e.split(''))

    if (h1 === '?') {
        if (h2 < 4 || h2 === '?') {
            h1 = '2'
        } else {
            h1 = '1';
        }
    }


    if (h2 == '?') {
        if (h1 === '2') {
            h2 = '3';
        } else {
            h2 = '9';
        }
    }

    if (m1 === '?') {
        m1 = '5';
    }

    if (m2 === '?') {
        m2 = 9;
    }

    return h1 + h2 + ":" + m1 + m2
};
