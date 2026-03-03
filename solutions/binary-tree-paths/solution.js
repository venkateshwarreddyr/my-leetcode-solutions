// Problem: Binary Tree Paths
// LeetCode: https://leetcode.com/problems/binary-tree-paths/
// Language: javascript
// Runtime: 66 ms
// Memory: 44 MB
// Submitted: 2023-03-19

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
 * @return {string[]}
 */
var binaryTreePaths = function(root) {
    let arr = [];
    
    const parse = (node, path) => {
        
        path.push(node.val)
        if(!node.left && !node.right){
            arr.push(path.join("->"));
        } else {      
            
            if(node.left) {
                parse(node.left, [...path]);
            }
            if(node.right) {
                parse(node.right, [...path]);
            }
        }
            
    }
    
    parse(root, []);
    
    return arr;
};
