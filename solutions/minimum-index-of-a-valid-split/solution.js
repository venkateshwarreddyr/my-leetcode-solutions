// Problem: Minimum Index of a Valid Split
// LeetCode: https://leetcode.com/problems/minimum-index-of-a-valid-split/
// Language: javascript
// Runtime: 252 ms
// Memory: 65.4 MB
// Submitted: 2023-07-16

cl = console.log
var minimumIndex = function (a) {
    let f = {}
    let n = a.length

    let [maxkey, maxval] = [null, 0]
    for (let e of a) {
        f[e] = f[e] || 0
        f[e]++
        if (maxval <= f[e]) {
            maxkey = e
            maxval = f[e]
        }
    }
    let newmaxval = 0

    let i = 0
    for (let e of a) {
        if (e == maxkey) {
            newmaxval++
            maxval--
        }
        if (newmaxval * 2 > (i + 1) && maxval * 2 > (n - i - 1)) return i

        i++
    }

    return -1

};
