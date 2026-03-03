// Problem: Create Binary Tree From Descriptions
// LeetCode: https://leetcode.com/problems/create-binary-tree-from-descriptions/
// Language: javascript
// Runtime: 445 ms
// Memory: 77.3 MB
// Submitted: 2024-07-15

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[][]} descriptions
 * @return {TreeNode}
 */
var createBinaryTree = function (descriptions) {
    cl = console.log
    let ob = {}
    let findroot = new Set(descriptions.map(e => e[0]))
    descriptions.forEach(([p, c, l]) => {
        findroot.delete(c)
        if (!ob[p])
            ob[p] = new TreeNode(p)
        if (l) {
            ob[p].left = ob[c] ? ob[c] : new TreeNode(c)
        } else {
            ob[p].right = ob[c] ? ob[c] : new TreeNode(c)
        }
    })

    let root = ob[[...findroot][0]]

    function dfs(r, p, l) {
        if (!r) return
        if (ob[r.val] && p) {
            if (l) {
                p.left = ob[r.val]
                delete ob[r.val]
                dfs(p.left, p, 1)
            } else {
                p.right = ob[r.val]
                delete ob[r.val]
                dfs(p.right, p, 0)
            }
        } else {
            dfs(r.left, r, 1)
            dfs(r.right, r, 0)
        }
    }

    dfs(root, null)
    return root

};
