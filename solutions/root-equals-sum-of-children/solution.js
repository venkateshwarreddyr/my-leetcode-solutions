// Problem: Root Equals Sum of Children
// LeetCode: https://leetcode.com/problems/root-equals-sum-of-children/
// Language: javascript
// Runtime: 69 ms
// Memory: 43.7 MB
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
var checkTree = function(root) {
    let q = [root];
    
    while(q.length){
        let node = q.shift();
        if(node && node.left && node.right){
            if(node.left.val + node.right.val === node.val){
                q.push(node.left, node.right);   
            } else {
                return false
            }
        }
    }
    
    return true;
};
