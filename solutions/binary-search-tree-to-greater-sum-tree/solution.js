// Problem: Binary Search Tree to Greater Sum Tree
// LeetCode: https://leetcode.com/problems/binary-search-tree-to-greater-sum-tree/
// Language: javascript
// Runtime: 49 ms
// Memory: 49.3 MB
// Submitted: 2024-06-25

cl = console.log
var bstToGst = function (root) {
    let sum = 0
    function dfs(r) {
        if (!r) return;

        dfs(r.right)
        sum += r.val
        r.val = sum
        dfs(r.left)
    }
    dfs(root, 0)

    return root
};
