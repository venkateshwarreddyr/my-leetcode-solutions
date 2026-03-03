// Problem: Delete Node in a BST
// LeetCode: https://leetcode.com/problems/delete-node-in-a-bst/
// Language: javascript
// Runtime: 0 ms
// Memory: 65.5 MB
// Submitted: 2026-01-02

var deleteNode = function (root, targetVal) {
    function dfs(n) {
        if (!n) return n;

        if (n.val > targetVal) {
            n.left = dfs(n.left);
            return n;
        }
        if (n.val < targetVal) {
            n.right = dfs(n.right);
            return n;
        }

        // n.val === targetVal, so delete n

        if (!n.right) return n.left;
        if (!n.left) return n.right;

        let inorderSuccessor = n.right;
        while (inorderSuccessor.left) {
            inorderSuccessor = inorderSuccessor.left;
        }
        inorderSuccessor.left = n.left;

        return n.right;
    }

    return dfs(root);
};
