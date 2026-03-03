// Problem: Maximum Product Subarray
// LeetCode: https://leetcode.com/problems/maximum-product-subarray/
// Language: javascript
// Runtime: 15 ms
// Memory: 61.8 MB
// Submitted: 2026-01-09

var maxProduct = function (a) {

    var maxProduct_ = function (a) {
        let n = a.length
        if (n == 1) return a[0]
        if (n == 0) return -Infinity

        let pp = new Array(n)
        let sp = new Array(n)
        let p = 1
        let p2 = 1
        for (let i = 0; i < n; i++) {
            p *= a[i]
            pp[i] = p
            p2 *= a[n - 1 - i]
            sp[n - 1 - i] = p2
        }
        if (pp[n - 1] > 0) return pp[n - 1]

        let max = a[0]

        let i = a.findIndex((e) => e < 0)
        if (i !== -1) {
            max = Math.max(max, pp[n - 1] / pp[i])
        }

        let j = a.findLastIndex((e) => e < 0)
        if (j !== -1) {
            max = Math.max(max, sp[0] / sp[j])
        }

        return max
    }

    let max = (a.includes(0)) ? 0 : a[0]

    let b = []
    for (let e of a) {
        if (e) {
            b.push(e)
        } else {
            max = Math.max(max, maxProduct_(b))
            b = []
        }
    }
    if (b.length) {
        max = Math.max(max, maxProduct_(b))
        b = []
    }

    return max
}

