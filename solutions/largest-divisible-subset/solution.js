// Problem: Largest Divisible Subset
// LeetCode: https://leetcode.com/problems/largest-divisible-subset/
// Language: javascript
// Runtime: 20 ms
// Memory: 58.3 MB
// Submitted: 2026-01-17

var largestDivisibleSubset = function (nums) {
    const n = nums.length;
    if (n === 0) return [];

    // dp[i] = length of longest divisble sequence chain ending at i
    const dp = new Array(n).fill(1);
    // prev[i] = index of previous element in chain
    const prev = new Array(n).fill(-1);

    nums.sort((a, b) => a - b);

    let maxLength = 1;
    let lastIndexInChain = 0;

    for (let R = 0; R < n; R++) {
        for (let L = 0; L < R; L++) {
            if (nums[R] % nums[L] === 0) {
                if (dp[L] + 1 > dp[R]) {
                    dp[R] = dp[L] + 1; // extend chain ending at L
                    if (dp[R] > maxLength) {
                        maxLength = dp[R];
                        lastIndexInChain = R;
                    }
                    prev[R] = L; // update prev
                }
            }
        }
    }

    // reconstruct the chain subset
    const res = [];
    let R = lastIndexInChain;

    while (R !== -1) {
        res.push(nums[R]);
        R = prev[R];
    }

    return res.reverse();
};

