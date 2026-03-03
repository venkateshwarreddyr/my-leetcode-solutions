// Problem: Make Costs of Paths Equal in a Binary Tree
// LeetCode: https://leetcode.com/problems/make-costs-of-paths-equal-in-a-binary-tree/
// Language: javascript
// Runtime: 9 ms
// Memory: 68 MB
// Submitted: 2025-12-30

var minIncrements = function (n, a) {
    let total = 0;

    function dfs(i) {
        if (2 * i < n) {

            dfs(2 * i); // left child
            dfs(2 * i + 1);

            total += Math.abs(a[2 * i - 1] - a[2 * i]); // diff of chldren
            a[i - 1] += Math.max(a[2 * i - 1], a[2 * i]); // add max of chldren to parent cost
        }
    }

    dfs(1); // start from root
    return total;
};

