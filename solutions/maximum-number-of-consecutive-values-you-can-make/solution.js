// Problem: Maximum Number of Consecutive Values You Can Make
// LeetCode: https://leetcode.com/problems/maximum-number-of-consecutive-values-you-can-make/
// Language: javascript
// Runtime: 68 ms
// Memory: 65.2 MB
// Submitted: 2025-11-12

var getMaximumConsecutive = function (coins) {
    coins.sort((a, b) => a - b);
    let reachable = 0;

    for (let coin of coins) {
        if (coin > reachable + 1) break;
        reachable += coin;
    }

    return reachable + 1;
};
