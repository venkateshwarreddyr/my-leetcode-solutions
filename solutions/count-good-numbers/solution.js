// Problem: Count Good Numbers
// LeetCode: https://leetcode.com/problems/count-good-numbers/
// Language: javascript
// Runtime: 0 ms
// Memory: 57.4 MB
// Submitted: 2026-01-17

/**
 * @param {number} n
 * @return {number}
 */
var countGoodNumbers = function (n) {
    let mod = 10 ** 9 + 7
    let ans = 5

    let even = (n / 2)
    let odd = (n / 2)

    if (n % 2 === 1) {
        even = Math.ceil(n / 2)
        odd = Math.floor(n / 2)
    }

    return Number(modPower(5, even, mod) * modPower(4, odd, mod) % BigInt(mod))
};


const modPower = (n, p, m) => {
    // Convert inputs to BigInt to handle large numbers
    let base = BigInt(n);
    let exp = BigInt(p);
    let mod = BigInt(m);

    // Handle modulus 1 case
    if (mod === 1n) return 0n;

    let result = 1n;
    base = base % mod;

    while (exp > 0n) {
        // If exponent is odd, multiply base with result
        if (exp % 2n === 1n) {
            result = (result * base) % mod;
        }

        // Exponent must be even now, divide by 2
        exp = exp / 2n;
        // Square the base
        base = (base * base) % mod;
    }

    return result;
};
