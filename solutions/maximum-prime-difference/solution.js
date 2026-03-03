// Problem: Maximum Prime Difference
// LeetCode: https://leetcode.com/problems/maximum-prime-difference/
// Language: javascript
// Runtime: 66 ms
// Memory: 72.2 MB
// Submitted: 2025-12-27

var isPrime = (n) => {
    if (n < 2) return false;
    if (n === 2) return true;
    if (n % 2 === 0) return false;
    for (let i = 3; i * i <= n; i += 2) {
        if (n % i === 0) {
            return false;
        }
    }
    return true;
};

var maximumPrimeDifference = function (a) {
    let firstIndex;
    for (let i = 0; i < a.length; i++) {
        if (isPrime(a[i])) {
            firstIndex = i
            break;
        }
    }
    let lastIndex
    for (let i = a.length - 1; i >= 0; i--) {
        if (isPrime(a[i])) {
            lastIndex = i
            break;
        }
    }
    return lastIndex - firstIndex
};

