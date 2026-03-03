// Problem: Minimum Deletion Cost to Make All Characters Equal
// LeetCode: https://leetcode.com/problems/minimum-deletion-cost-to-make-all-characters-equal/
// Language: javascript
// Runtime: 49 ms
// Memory: 79.5 MB
// Submitted: 2025-12-21

/**
 * @param {string} s
 * @param {number[]} cost
 * @return {number}
 */
var minCost = function (s, cost) {
    let ob = {};

    let sum = 0;
    let n = s.length;
    for (let i = 0; i < n; i++) {
        let ch = s[i];
        let v = cost[i];
        sum += v;
        ob[ch] = ob[ch] ?? 0;
        ob[ch] += v;
    }
    let values = Object.values(ob);
    if (values.length === 1) return 0;
    return sum - Math.max(...values);
};

