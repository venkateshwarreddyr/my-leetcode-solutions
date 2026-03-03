// Problem: Recover Binary Search Tree
// LeetCode: https://leetcode.com/problems/recover-binary-search-tree/
// Language: javascript
// Runtime: 2 ms
// Memory: 64.8 MB
// Submitted: 2025-12-30

function recoverTree(root) {
    let x, y, prev;

    const dfs = (curr) => {
        if (!curr) return;

        dfs(curr.left);
        if (prev && prev.val > curr.val) {
            if (x === undefined) x = prev;
            y = curr;
        }
        prev = curr;
        dfs(curr.right);
    };

    dfs(root);

    [x.val, y.val] = [y.val, x.val];
}

