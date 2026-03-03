// Problem: Path Sum II
// LeetCode: https://leetcode.com/problems/path-sum-ii/
// Language: javascript
// Runtime: 11 ms
// Memory: 67 MB
// Submitted: 2025-07-02

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
 * @param {number} targetSum
 * @return {number[][]}
 */
var pathSum = function(root, targetSum) {
    let arr = [];
    if(!root) return arr;
    const parse = (node, sum, tsum) => {
        sum.push(node.val);
        tsum+=node.val;
        if(!node.left && !node.right){
            if(tsum === targetSum)
                arr.push(sum);
        } else {  
            if(node.left) {
                parse(node.left, [...sum], tsum);
            }
            if(node.right) {
                parse(node.right, [...sum], tsum);
            }
        }    
    }
    
    parse(root, [], 0);
    
    return arr;
};
