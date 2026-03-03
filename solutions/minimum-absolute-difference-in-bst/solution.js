// Problem: Minimum Absolute Difference in BST
// LeetCode: https://leetcode.com/problems/minimum-absolute-difference-in-bst/
// Language: javascript
// Runtime: 60 ms
// Memory: 47.4 MB
// Submitted: 2023-05-30

cl = console.log
var getMinimumDifference = function (root) {
    let an = Infinity;
    let prev = null
    function dfs(r) {
        if (!r) return;

        dfs(r.left)
        if (prev === null) {
            prev = r.val
        } else {
            an = Math.min(Math.abs(r.val - prev), an)
            prev = r.val
        }
        dfs(r.right)
    }
    dfs(root)
    return an
};
