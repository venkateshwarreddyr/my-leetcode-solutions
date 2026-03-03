// Problem: Kth Largest Sum in a Binary Tree
// LeetCode: https://leetcode.com/problems/kth-largest-sum-in-a-binary-tree/
// Language: javascript
// Runtime: 379 ms
// Memory: 130.8 MB
// Submitted: 2023-06-07

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
 * @param {number} k
 * @return {number}
 */
var kthLargestLevelSum = function(root, k) {
    let ans = [];
    const parse = (node) => {
        if(isNaN(ans[node.level])) ans.push(0);
        ans[node.level]+=node.val;
        if (node.left) {
            node.left.level = node.level+1
            parse(node.left)}
        if(node.right) {
             node.right.level = node.level+1
            parse(node.right)}
        
    }
    root.level=0;
    parse(root);
    console.log({ans})
    return ans.sort((a, b) => b-a)[k-1] || -1;
};
