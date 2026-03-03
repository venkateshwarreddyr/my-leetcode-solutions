// Problem: Split Array by Prime Indices
// LeetCode: https://leetcode.com/problems/split-array-by-prime-indices/
// Language: javascript
// Runtime: 6 ms
// Memory: 73.4 MB
// Submitted: 2026-02-20

var splitArray = function (nums) {
    function getPrimeStatusArray(limit) {
        const isPrimeStatus = new Uint8Array(limit).fill(1);

        // 0 and 1 are not prime
        if (limit > 0) isPrimeStatus[0] = 0;
        if (limit > 1) isPrimeStatus[1] = 0;

        // Sieve of Eratosthenes logic
        for (let factor = 2; factor * factor < limit; factor++) {
            if (isPrimeStatus[factor] === 1) {
                for (let multiple = factor * factor; multiple < limit; multiple += factor) {
                    isPrimeStatus[multiple] = 0;
                }
            }
        }
        return isPrimeStatus;
    }

    const n = nums.length;
    const isPrimeIndex = getPrimeStatusArray(n);

    let sumAtPrimeIndices = 0;
    let sumAtNonPrimeIndices = 0;

    for (let i = 0; i < n; i++) {
        if (isPrimeIndex[i] === 1) {
            sumAtPrimeIndices += nums[i];
        } else {
            sumAtNonPrimeIndices += nums[i];
        }
    }

    return Math.abs(sumAtPrimeIndices - sumAtNonPrimeIndices);
};

var splitArray2222222 = function (nums) {
    function isPrime(n) {
        if (n < 2) return false;
        for (let i = 2; i <= Math.sqrt(n); i++) {
            if (n % i === 0) return false;
        }
        return true;
    }

    let sumAtPrimeIndices = 0;
    let sumAtNonPrimeIndices = 0;

    for (let i = 0; i < nums.length; i++) {
        if (isPrime(i)) {
            sumAtPrimeIndices += nums[i];
        } else {
            sumAtNonPrimeIndices += nums[i];
        }
    }

    return Math.abs(sumAtPrimeIndices - sumAtNonPrimeIndices);
};

