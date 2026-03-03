// Problem: Sum of Left Leaves
// LeetCode: https://leetcode.com/problems/sum-of-left-leaves/
// Language: javascript
// Runtime: 92 ms
// Memory: 44.7 MB
// Submitted: 2022-01-31

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
 * @return {number}
 */
var sumOfLeftLeaves = function(root) {
    sum = 0
    parse = (node) => {
        
        if((!node.left) && (!node.right) && node.isLeft) {
                                           sum+=node.val}
        if(node.left) {
            node.left.isLeft  = 1
          parse(node.left)  
        } 
        node.right && parse(node.right)
    }
    parse(root)
    return sum
};
