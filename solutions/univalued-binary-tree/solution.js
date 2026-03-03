// Problem: Univalued Binary Tree
// LeetCode: https://leetcode.com/problems/univalued-binary-tree/
// Language: javascript
// Runtime: 76 ms
// Memory: 40.5 MB
// Submitted: 2021-06-30

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
var isUnivalTree = function(root) {
    let stack = [root];
let node;
    
    while(stack.length!=0){
        node = stack.pop()
if(node.left && node.val !== node.left.val){
        return false
    }
    if(node.right && node.val !== node.right.val){
        return false
    }  
    node.left && stack.push(node.left);
    node.right && stack.push(node.right);
    }
    return true;
};
