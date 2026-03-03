// Problem: Clone N-ary Tree
// LeetCode: https://leetcode.com/problems/clone-n-ary-tree/
// Language: javascript
// Runtime: 127 ms
// Memory: 63.4 MB
// Submitted: 2024-04-30

/**
 * // Definition for a Node.
 * function Node(val, children) {
 *    this.val = val === undefined ? 0 : val;
 *    this.children = children === undefined ? [] : children;
 * };
 */

/**
 * @param {Node|null} node
 * @return {Node|null}
 */
var cloneTree = function(root) {
    if(!root) return null
    let val = root.val
    let children = root.children.map(node => cloneTree(node))

    return new Node(val, children)
    
};
