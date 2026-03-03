// Problem: Pow(x, n)
// LeetCode: https://leetcode.com/problems/powx-n/
// Language: javascript
// Runtime: 56 ms
// Memory: 41.5 MB
// Submitted: 2023-07-24

const myPow = function (x, n) {
    if (n < 0) {
        x = 1 / x
        n = -n
    }
    let p = 1
    while (n) {
        if (n % 2) {
            p = p * x
            n = n - 1 // p increases
        } else {
            x = x * x
            n = n / 2 // not p, but x increases
        }
    }
    return p
}
