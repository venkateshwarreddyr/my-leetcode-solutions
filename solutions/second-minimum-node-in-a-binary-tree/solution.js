// Problem: Second Minimum Node In a Binary Tree
// LeetCode: https://leetcode.com/problems/second-minimum-node-in-a-binary-tree/
// Language: javascript
// Runtime: 51 ms
// Memory: 41.6 MB
// Submitted: 2023-05-30

cl = console.log
var findSecondMinimumValue = function (root) {
    let min1 = Infinity;
    let min2 = Infinity;
    function dfs(r) {
        if (!r) return;
        dfs(r.left);
        if (r.val < min1) {
            min2 = min1;
            min1 = r.val;
        } else if (r.val < min2 && r.val > min1) {
            min2 = r.val;
        }
        dfs(r.right);
    }

    dfs(root);

    return min2 === Infinity ? -1 : min2
};
