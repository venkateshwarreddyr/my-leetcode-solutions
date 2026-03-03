// Problem: Cousins in Binary Tree II
// LeetCode: https://leetcode.com/problems/cousins-in-binary-tree-ii/
// Language: javascript
// Runtime: 529 ms
// Memory: 156 MB
// Submitted: 2023-06-26

cl = console.log
var replaceValueInTree = function (root) {
    let arr = [];

    var dfs = function (r, l, p) {
        if (!r) return;
        arr[l] = (r.val + (arr[l] || 0));
        r.childval = (r.left?.val || 0) + (r.right?.val || 0)
        dfs(r.left, l + 1);
        dfs(r.right, l + 1);
    };
    dfs(root, 0, null);

    var dfs2 = function (r, l, p) {
        if (!r) return;
        if (l === 0) {
            r.val = 0
        } else {
            r.val = arr[l] - (p?.childval || 0)
        }

        dfs2(r.left, l + 1, r);
        dfs2(r.right, l + 1, r);


    };

    dfs2(root, 0, null);

    return root;
};

