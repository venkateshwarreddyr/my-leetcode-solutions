// Problem: Perfect Squares
// LeetCode: https://leetcode.com/problems/perfect-squares/
// Language: javascript
// Runtime: 162 ms
// Memory: 52.9 MB
// Submitted: 2024-05-12


var numSquares = function (n) {
    let memo = new Array(n+1).fill(Infinity)
    memo[0] = 0
    for(let i = 0; i<= n; i++){
        for (let j = 1; j*j <= i; j++) {
            memo[i] = Math.min(memo[i], 1 + memo[i - j * j])
        }
    }

    return memo[n]
};
