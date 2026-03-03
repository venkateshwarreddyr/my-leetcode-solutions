// Problem: Maximum Enemy Forts That Can Be Captured
// LeetCode: https://leetcode.com/problems/maximum-enemy-forts-that-can-be-captured/
// Language: javascript
// Runtime: 62 ms
// Memory: 42.2 MB
// Submitted: 2023-05-24

// cl = console.log
var captureForts = function (a) {
    let n = a.length;
    let ob = {}

    let i = 0
    let j = 0;
    let an = 0;
    while (i < n) {
        // cl({ an, i }, a[i])
        if (a[i] === 1) {
            j = i + 1
            while (a[j] === 0) {
                j++
            }
            if (a[j] === 1) {
                i = j - 1
            } else if (j < n) {
                an = Math.max(an, j - i - 1)
                i = j - 1
            }
        }
        // cl({ an, i }, a[i])

        if (a[i] === -1) {
            j = i + 1
            while (a[j] === 0) {
                j++
            }
            if (a[j] === -1) {
                i = j - 1
            } else if (j < n) {
                an = Math.max(an, j - i - 1)
                i = j - 1
            }
        }
        i++
    }

    return an;
};
