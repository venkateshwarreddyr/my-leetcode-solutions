// Problem: Find All The Lonely Nodes
// LeetCode: https://leetcode.com/problems/find-all-the-lonely-nodes/
// Language: javascript
// Runtime: 65 ms
// Memory: 54.7 MB
// Submitted: 2024-04-28

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
 * @return {number[]}
 */
var getLonelyNodes = function(root) {
    let an = []

    function fn(root) {
        if(!root) return 0

        if(root?.left && root?.right) {
            return fn(root.left) + fn(root.right)
        }

        if(root?.left) {
            an.push(root.left.val)
            return fn(root.left)
        }

        if(root?.right) {
            an.push(root.right.val)
            return fn(root.right)
        }
    }
    fn(root)

    return an

};
