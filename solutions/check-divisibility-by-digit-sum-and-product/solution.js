// Problem: Check Divisibility by Digit Sum and Product
// LeetCode: https://leetcode.com/problems/check-divisibility-by-digit-sum-and-product/
// Language: javascript
// Runtime: 0 ms
// Memory: 55.4 MB
// Submitted: 2025-10-12

/**
 * @param {number} n
 * @return {boolean}
 */
var checkDivisibility = function (n) {
    let nOri = n
    let sum = 0
    let prod = 1
    while (n) {
        sum += n % 10
        prod *= n % 10
        n = Math.trunc(n / 10)
    }
    const result = nOri % (sum + prod)
    return result === 0;
};
