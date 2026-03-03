// Problem: Binary Tree Level Order Traversal
// LeetCode: https://leetcode.com/problems/binary-tree-level-order-traversal/
// Language: javascript
// Runtime: 86 ms
// Memory: 45.9 MB
// Submitted: 2023-06-15

cl = console.log
var levelOrder = function (root) {
    let an = []
    if (!root) return an
    function bfs(r) {
        let q = [r]

        while (q.length) {
            let nq = []
            let a = []
            for (let i = 0; i < q.length; i++) {
                q[i].left && nq.push(q[i].left)
                q[i].right && nq.push(q[i].right)
                a.push(q[i].val)
            }

            q = nq
            an.push(a)
        }
    }
    bfs(root)
    return an
};
