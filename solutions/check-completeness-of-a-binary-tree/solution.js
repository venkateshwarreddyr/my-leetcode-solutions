// Problem: Check Completeness of a Binary Tree
// LeetCode: https://leetcode.com/problems/check-completeness-of-a-binary-tree/
// Language: javascript
// Runtime: 62 ms
// Memory: 43.5 MB
// Submitted: 2023-06-26

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isCompleteTree = function (root) {
    cl = console.log
    function bfs(r) {
        let q = [r]

        while (q.length) {
            let e = q.shift()
            if (e) {
                q.push(e.left)
                q.push(e.right)
            } else {
                while (q.length > 0)
                    if (q.pop()) return false
            }
        }

        return true;
    }


    return bfs(root);

};
