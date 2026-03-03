// Problem: Four Divisors
// LeetCode: https://leetcode.com/problems/four-divisors/
// Language: javascript
// Runtime: 83 ms
// Memory: 62.9 MB
// Submitted: 2026-01-04

function getFactors(n) {
    const factors = [];
    for (let i = 1; i * i <= n; i++) {
        if (n % i === 0) {
            factors.push(i);
            if (i !== n / i) factors.push(n / i);
        }
    }
    return factors.sort((a, b) => a - b);
}

var sumFourDivisors = function (nums) {
    let sum = 0
    for (let num of nums) {
        let factors = getFactors(num)
        if (factors.length === 4) {
            sum += factors.reduce((a, c) => a + c, 0)
        }
    }

    return sum
};
