// Problem: Count Complete Tree Nodes
// LeetCode: https://leetcode.com/problems/count-complete-tree-nodes/
// Language: javascript
// Runtime: 106 ms
// Memory: 69.5 MB
// Submitted: 2023-07-25

var countNodes = function (r) {

    function depthLeftMostNode(r) {
        if (!r) return 0
        return 1 + depthLeftMostNode(r.left)
    }
    function depthRightMostNode(r) {
        if (!r) return 0
        return 1 + depthRightMostNode(r.right)
    }

    function dfs(r) {
        const ldepth = depthLeftMostNode(r);
        const rdepth = depthRightMostNode(r);

        if (ldepth === rdepth)
            return Math.pow(2, ldepth) - 1;

        return 1 + dfs(r.left) + dfs(r.right)
    }
    return dfs(r);
};
