// Problem: Minimum Number of Operations to Make X and Y Equal
// LeetCode: https://leetcode.com/problems/minimum-number-of-operations-to-make-x-and-y-equal/
// Language: javascript
// Runtime: 27 ms
// Memory: 62.9 MB
// Submitted: 2025-12-13

cl = console.log

var minimumOperationsToMakeEqual = function (x, y) {
    let ops = 0
    let set = new Set()
    let q = [x]

    while (q.length) {
        let q2 = []
        for (let x of q) {
            if (x === y) return ops
            if (set.has(x)) continue
            set.add(x)
            if (x % 11 === 0) q2.push(x / 11)
            if (x % 5 === 0) q2.push(x / 5)
            q2.push(x - 1)
            q2.push(x + 1)
        }
        ops++
        q = q2
    }

    return ops
}

var minimumOperationsToMakeEqual222222222 = function (Xval, Yval) {
    if (Yval >= Xval) return Yval - Xval

    let ob = {}
    function fn(y) {
        let key = y
        if (ob[key] !== undefined) return ob[key]
        if (y === Xval) return ob[key] = 0

        let min = Infinity
        if (Xval > y) {
            min = Math.min(min, fn(y + 1), fn(y * 5), fn(y * 11))
        } else {
            min = Math.min(min, fn(y - 1))
        }
        return ob[key] = 1 + min
    }

    return fn(Yval)
};

