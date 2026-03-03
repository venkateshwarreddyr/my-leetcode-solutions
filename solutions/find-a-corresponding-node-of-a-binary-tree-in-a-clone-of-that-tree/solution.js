// Problem: Find a Corresponding Node of a Binary Tree in a Clone of That Tree
// LeetCode: https://leetcode.com/problems/find-a-corresponding-node-of-a-binary-tree-in-a-clone-of-that-tree/
// Language: javascript
// Runtime: 277 ms
// Memory: 86.7 MB
// Submitted: 2023-05-10

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} original
 * @param {TreeNode} cloned
 * @param {TreeNode} target
 * @return {TreeNode}
 */

var getTargetCopy = function(original, cloned, target) {
    let ans = null
    const parse = (node) => {
        if(!node){
            return;
        }

        if(node.val === target.val){
            ans=node;
            return;
        }
        
        parse(node.left);
        parse(node.right);
    }
    parse(cloned)
    return ans
};
