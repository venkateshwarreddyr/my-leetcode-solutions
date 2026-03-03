// Problem: N-th Tribonacci Number
// LeetCode: https://leetcode.com/problems/n-th-tribonacci-number/
// Language: javascript
// Runtime: 59 ms
// Memory: 41.9 MB
// Submitted: 2023-07-10

var tribonacci = function (n) {
    let inmemory = new Array(n + 1)

    function T(n) {
        if (n in inmemory) return inmemory[n]

        if (n < 0) throw new Error("ERROR: < 0")
        if (n > 37) throw new Error("ERROR: > 37")

        if (n === 0) return inmemory[n] = 0
        if (n === 1) return inmemory[n] = 1
        if (n === 2) return inmemory[n] = 1

        if (n >= 0) return inmemory[n] = T(n - 3) + T(n - 2) + T(n - 1)
    }

    return T(n)
};

