// Problem: GCD of Odd and Even Sums
// LeetCode: https://leetcode.com/problems/gcd-of-odd-and-even-sums/
// Language: javascript
// Runtime: 2 ms
// Memory: 57.1 MB
// Submitted: 2025-10-12

const gcd = (a, b) => (b ? gcd(b, a % b) : a);

var gcdOfOddEvenSums = function (n) {
    let sumEven = 0;
    let sumOdd = 0;

    for (let i = 0; n--; i += 2) {
        sumEven += i;
        sumOdd += i + 1;
    }

    return gcd(sumEven, sumOdd);
};
