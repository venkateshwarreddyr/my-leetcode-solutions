// Problem: Sum of Root To Leaf Binary Numbers
// LeetCode: https://leetcode.com/problems/sum-of-root-to-leaf-binary-numbers/
// Language: javascript
// Runtime: 80 ms
// Memory: 40.9 MB
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
 * @return {number}
 */
var sumRootToLeaf = function(root) {
    let sum = 0;
    let tempSum = [];
var parseTreeDFS = function (node) {

    tempSum.push(node.val);    
    if(node.left===null && node.right === null){
        sum += parseInt(tempSum.join(''), 2);
        // console.log(tempSum)
    }
  node.left && parseTreeDFS(node.left);
  node.right && parseTreeDFS(node.right);
    tempSum.pop();
};
parseTreeDFS(root)
    return sum
};
