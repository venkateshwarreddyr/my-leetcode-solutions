// Problem: Minimum Number of Operations to Make All Array Elements Equal to 1
// LeetCode: https://leetcode.com/problems/minimum-number-of-operations-to-make-all-array-elements-equal-to-1/
// Language: javascript
// Runtime: 1 ms
// Memory: 56.5 MB
// Submitted: 2025-11-12

const gcd = (a, b) => (a ? gcd(b % a, a) : b);

var minOperations = function (nums) {
    const n = nums.length;
    let countOnes = 0;
    let arrayGCD = 0;

    for (const x of nums) {
        if (x === 1) {
            countOnes++;
        }
        arrayGCD = gcd(arrayGCD, x);
    }

    if (countOnes > 0) {
        return n - countOnes;
    }

    if (arrayGCD > 1) {
        return -1;
    }
    
    let minLen = n + 1;

    for (let i = 0; i < n; i++) {
        let currentGCD = nums[i];
        for (let j = i + 1; j < n; j++) {
            currentGCD = gcd(currentGCD, nums[j]);
            if (currentGCD === 1) {
                minLen = Math.min(minLen, j - i + 1);
                break;
            }
        }
    }

    return minLen + n - 2;
};
