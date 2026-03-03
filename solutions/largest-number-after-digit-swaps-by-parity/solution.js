// Problem: Largest Number After Digit Swaps by Parity
// LeetCode: https://leetcode.com/problems/largest-number-after-digit-swaps-by-parity/
// Language: javascript
// Runtime: 65 ms
// Memory: 43.5 MB
// Submitted: 2023-05-26

cl = console.log
var largestInteger = function (num) {
    let s = num.toString().split('')
    let n = s.length;
    let odds = []
    let evens = []

    for (let e of s) {
        if (e % 2 === 0) {
            evens.push(e)
        } else {
            odds.push(e)
        }
    }
    odds.sort((a, b) => b - a)
    evens.sort((a, b) => b - a)
    for (let i = 0; i < n; i++) {
        if (s[i] % 2 === 0)
            s[i] = evens.shift()
        else
            s[i] = odds.shift()
    }

    return +s.join('')
};
