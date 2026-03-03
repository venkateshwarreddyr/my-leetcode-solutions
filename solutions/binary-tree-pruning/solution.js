// Problem: Binary Tree Pruning
// LeetCode: https://leetcode.com/problems/binary-tree-pruning/
// Language: javascript
// Runtime: 60 ms
// Memory: 41.9 MB
// Submitted: 2023-06-02

var pruneTree = function (r) {
    function dfs(r) {
        if (!r) return null;

        r.left = dfs(r.left);
        r.right = dfs(r.right);

        if (r.val == 0) {
            if (!r.left && !r.right) {
                return null;
            }
        }
        return r;
    }

    return dfs(r);
};

