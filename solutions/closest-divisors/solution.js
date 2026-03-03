// Problem: Closest Divisors
// LeetCode: https://leetcode.com/problems/closest-divisors/
// Language: javascript
// Runtime: 8 ms
// Memory: 52.5 MB
// Submitted: 2025-11-21

/**
 * @param {number} num
 * @return {number[]}
 */
var closestDivisors = function (num) {
    const getPair = n => {
        for (let i = Math.floor(Math.sqrt(n)); i >= 1; i--) {
            if (n % i === 0) return [i, n / i];
        }
    };

    const pair1 = getPair(num + 1);
    const pair2 = getPair(num + 2);

    return Math.abs(pair1[0] - pair1[1]) < Math.abs(pair2[0] - pair2[1]) ? pair1 : pair2;
};
