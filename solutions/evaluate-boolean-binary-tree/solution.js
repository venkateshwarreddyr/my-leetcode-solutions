// Problem: Evaluate Boolean Binary Tree
// LeetCode: https://leetcode.com/problems/evaluate-boolean-binary-tree/
// Language: javascript
// Runtime: 70 ms
// Memory: 48.4 MB
// Submitted: 2023-05-10

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
var evaluateTree = function(root) {
    
    const parse = (node) => {
        
        if(node.val === 0) return false
        if(node.val === 1) return true
    
            if(node.val === 2) {
               return parse(node.left) || parse(node.right)
            } else if(node.val === 3)  {
                return parse(node.left) && parse(node.right)
            }
        
            
    }
    
    return parse(root)
};
