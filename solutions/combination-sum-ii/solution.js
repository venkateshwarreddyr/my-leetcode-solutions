// Problem: Combination Sum II
// LeetCode: https://leetcode.com/problems/combination-sum-ii/
// Language: javascript
// Runtime: 43 ms
// Memory: 51.9 MB
// Submitted: 2024-08-13

/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum2 = function (candidates, target) {
    let n = candidates.length;
    candidates.sort((a, b) => a - b)
    let an = []
    function bt(start, a, sum) {
        if (sum === target) {
            an.push([...a])
            return;
        }
        if (sum > target) return;

        for (let i = start; i < n; i++) {
            if (i > start && candidates[i] === candidates[i - 1]) continue
            a.push(candidates[i])
            bt(i + 1, a, sum + candidates[i])
            a.pop()
        }
    }
    bt(0, [], 0)


    return an;
};
