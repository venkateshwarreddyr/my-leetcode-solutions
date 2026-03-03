// Problem: Subtree of Another Tree
// LeetCode: https://leetcode.com/problems/subtree-of-another-tree/
// Language: javascript
// Runtime: 79 ms
// Memory: 48.8 MB
// Submitted: 2023-05-30

cl = console.log
var isSubtree = function (root, subRoot) {
    function isEqual(r, sr) {
        if (!r || !sr) return !r && !sr
        if (r.val !== sr.val) return false
        return isEqual(r.left, sr.left) && isEqual(r.right, sr.right);
    }

    function dfs(r) {
        if (!r) return false;
        return isEqual(r, subRoot) || dfs(r.left) || dfs(r.right);
    }

    return dfs(root);

};
