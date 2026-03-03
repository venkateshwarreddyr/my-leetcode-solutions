// Problem: Fibonacci Number
// LeetCode: https://leetcode.com/problems/fibonacci-number/
// Language: javascript
// Runtime: 43 ms
// Memory: 52.7 MB
// Submitted: 2025-07-31

/**
 * @param {number} n
 * @return {number}
 */
var fib = function(n) {
    if(n <= 1) return n

    let prev2 = 0
    let prev1 = 1

    for(let i = 2; i <= n; i++) {
        let curr = prev1 + prev2

        prev2 = prev1
        prev1 = curr
    }

    return prev1
};
