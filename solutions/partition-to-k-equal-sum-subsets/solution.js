// Problem: Partition to K Equal Sum Subsets
// LeetCode: https://leetcode.com/problems/partition-to-k-equal-sum-subsets/
// Language: javascript
// Runtime: 6 ms
// Memory: 54.6 MB
// Submitted: 2025-10-27


var canPartitionKSubsets = function (a, k) {
    const total = a.reduce((a, b) => a + b, 0);
    if (total % k !== 0) return false;
    const target = total / k;

    a.sort((a, b) => b - a);
    if (a[0] > target) return false;

    const n = a.length;
    const memo = new Map();

    function backtrack(used, currSum, groupsFormed) {
        if (groupsFormed === k - 1) return true; // last group automatically valid
        if (currSum === target) {
            // start forming next group
            const res = backtrack(used, 0, groupsFormed + 1);
            memo.set(used, res);
            return res;
        }
        if (memo.has(used)) return memo.get(used);

        for (let i = 0; i < n; i++) {
            if ((used & (1 << i)) !== 0) continue; // already used
            if (currSum + a[i] > target) continue;

            if (backtrack(used | (1 << i), currSum + a[i], groupsFormed)) {
                memo.set(used, true);
                return true;
            }

            if (currSum === 0) break;
        }
        memo.set(used, false);
        return false;
    }

    return backtrack(0, 0, 0);
};

