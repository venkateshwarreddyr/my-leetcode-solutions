// Problem: Balance a Binary Search Tree
// LeetCode: https://leetcode.com/problems/balance-a-binary-search-tree/
// Language: javascript
// Runtime: 6 ms
// Memory: 74.4 MB
// Submitted: 2026-02-09

var balanceBST = function (r) {
    let a = [];
    function dfs(r) {
        if (!r) return

        dfs(r.left);
        a.push(r.val);
        dfs(r.right);
    }
    dfs(r);

    function dfs_createbst(i, j) {
        if (i > j) return null

        let mid = Math.trunc(i / 2 + j / 2)
        return new TreeNode(
            a[mid], //
            dfs_createbst(i, mid - 1),
            dfs_createbst(mid + 1, j)
        );
    }
    return dfs_createbst(0, a.length - 1);
};

