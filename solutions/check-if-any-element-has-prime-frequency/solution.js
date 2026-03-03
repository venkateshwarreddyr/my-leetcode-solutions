// Problem: Check if Any Element Has Prime Frequency
// LeetCode: https://leetcode.com/problems/check-if-any-element-has-prime-frequency/
// Language: javascript
// Runtime: 3 ms
// Memory: 57.8 MB
// Submitted: 2025-10-12

/**
 * @param {number[]} nums
 * @return {boolean}
 */
function isPrime(n) {
    if (n <= 1) return false
    for (let i = 2; i < n; i++) {
        if (n % i === 0) return false
    }
    return true
}

var checkPrimeFrequency = function (nums) {
    const n = nums.length
    const f = new Array(100 + 1).fill(0) // 100 is max number
    for (let x of nums) f[x]++
    return nums.some(x => isPrime(f[x]))
};
