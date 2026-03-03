// Problem: Symmetric Tree
// LeetCode: https://leetcode.com/problems/symmetric-tree/
// Language: javascript
// Runtime: 84 ms
// Memory: 40.9 MB
// Submitted: 2021-07-01

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
// var isSameTree = function(p, q) {
//     let stack = [{p,q}];
    
//     while(stack.length!=0){
//         let {p,q} = stack.pop()
//     if(p&&q){
//         if(p.val!=q.val) return false;
//     stack.push({p:p.left, q:q.right});
//     stack.push({p:p.right, q:q.left});
//     }
//         else if(p||q) return false
//     }
//     return true
// };
var isSameTree = function(p, q) {
    if(p == null && q == null) return true;
    if(p == null) return false;
    if(q == null) return false;
    if(p.val == q.val){
        return isSameTree(p.left, q.right) && isSameTree(p.right,q.left);
    }else{
        return false;
    }
};
var isSymmetric = function(root) {
    if(root)
    return isSameTree(root.left, root.right)
    return true
};
