// Problem: Closest Prime Numbers in Range
// LeetCode: https://leetcode.com/problems/closest-prime-numbers-in-range/
// Language: javascript
// Runtime: 145 ms
// Memory: 64.7 MB
// Submitted: 2026-01-17

var closestPrimes = function (left, right) {
    const isPrime = getIsPrimeArray(right);

    let res = [-1, -1]; //  closest prime indexes
    let L = -1; //       L prime index
    let minDiff = Infinity;

    for (let R = left; R <= right; R++) {
        if (isPrime[R] === 1) {
            if (L !== -1) {
                const diff = R - L;
                if (diff < minDiff) {
                    minDiff = diff;
                    res = [L, R];
                }
            }
            L = R;
        }
    }

    return res;
};

function getIsPrimeArray(right) {
    const isPrime = new Array(right + 1).fill(1);
    isPrime[0] = 0;
    isPrime[1] = 0;

    for (let R = 2; R * R <= right; R++) {
        if (isPrime[R] === 1) {
            for (let multiple = 2 * R; multiple <= right; multiple += R) {
                isPrime[multiple] = 0;
            }
        }
    }

    return isPrime;
}

