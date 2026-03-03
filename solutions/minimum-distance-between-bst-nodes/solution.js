// Problem: Minimum Distance Between BST Nodes
// LeetCode: https://leetcode.com/problems/minimum-distance-between-bst-nodes/
// Language: javascript
// Runtime: 54 ms
// Memory: 43.9 MB
// Submitted: 2023-05-26

cl = console.log
var minDiffInBST = function (root) {
    let an = Infinity
    let arr = []

    const dfs = (r) => {
        if (!r) return;

        dfs(r.left)
        arr.push(r.val)
        dfs(r.right)
    }

    dfs(root)
    for (let i = 1; i < arr.length; i++) {
        an = Math.min(arr[i] - arr[i - 1], an)
    }
    return an;
};
