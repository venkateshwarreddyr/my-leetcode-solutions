// Problem: Tuple with Same Product
// LeetCode: https://leetcode.com/problems/tuple-with-same-product/
// Language: javascript
// Runtime: 1051 ms
// Memory: 195.4 MB
// Submitted: 2025-10-19

var tupleSameProduct = function (a) {
    let n = a.length

    // a * b = c * d
    // 1 * 6 = 2 * 3

    let o = {}
    for (let i = 0; i < n; i++) {
        for (let j = i + 1; j < n; j++) {
            let p = a[i] * a[j]
            o[p] = (o[p] || 0) + 1
        }
    }
    // let cl = console.log
    // cl(o)

    let sum = 0
    for (let [k, v] of Object.entries(o)) {
        sum += ((v - 1) * v) / 2
    }
    return sum * 8
};

