// Problem: Binary Tree Tilt
// LeetCode: https://leetcode.com/problems/binary-tree-tilt/
// Language: javascript
// Runtime: 56 ms
// Memory: 46.7 MB
// Submitted: 2023-05-26

cl = console.log

var findTilt = function (root) {
    let an = 0

    const dfs = (r) => {
        if (!r) return
        dfs(r.left)
        dfs(r.right)
        an += Math.abs((r.left?.val || 0) - (r.right?.val || 0))
        r.val += ((r.left?.val || 0) + (r.right?.val || 0))
    }

    dfs(root)

    return an;
};
