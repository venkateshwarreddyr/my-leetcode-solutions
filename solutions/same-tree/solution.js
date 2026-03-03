// Problem: Same Tree
// LeetCode: https://leetcode.com/problems/same-tree/
// Language: javascript
// Runtime: 68 ms
// Memory: 40.3 MB
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
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {boolean}
 */
var isSameTree = function(p, q) {
    let stack = [{p,q}];
    
    while(stack.length!=0){
        let {p,q} = stack.pop()
    if(p&&q){
        if(p.val!=q.val) return false;
    stack.push({p:p.left, q:q.left});
    stack.push({p:p.right, q:q.right});
    }
        else if(p||q) return false
    }
    return true
};
