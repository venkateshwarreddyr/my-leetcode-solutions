// Problem: Count Good Nodes in Binary Tree
// LeetCode: https://leetcode.com/problems/count-good-nodes-in-binary-tree/
// Language: javascript
// Runtime: 153 ms
// Memory: 69.6 MB
// Submitted: 2023-06-02

var goodNodes = function (r) {
    let a = []
    let cc = 0;
    function dfs(r) {
        if (!r) return;

        if ((a.length === 0) || (Math.max(...a) <= r.val)) {
            cc++;
        }

        a.push(r.val);
        dfs(r.left);
        dfs(r.right);
        a.pop()
    }

    dfs(r);
    return cc;
};

