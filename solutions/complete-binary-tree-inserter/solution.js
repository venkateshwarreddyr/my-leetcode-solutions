// Problem: Complete Binary Tree Inserter
// LeetCode: https://leetcode.com/problems/complete-binary-tree-inserter/
// Language: javascript
// Runtime: 118 ms
// Memory: 64.6 MB
// Submitted: 2025-11-11

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
 */
var CBTInserter = function (root) {

    CBTInserter.prototype.insert = function (val) {
        let new_node = new TreeNode(val)
        let parent = null
        const q = [root]

        while (q.length) {
            const node = q.shift()
            if (node.left) q.push(node.left)
            else {
                parent = node
                node.left = new_node
                break
            }
            if (node.right) q.push(node.right)
            else {
                parent = node
                node.right = new_node
                break
            }
        }

        return parent.val
    };

    CBTInserter.prototype.get_root = function () {
        return root
    };

};

