// Problem: N-ary Tree Preorder Traversal
// LeetCode: https://leetcode.com/problems/n-ary-tree-preorder-traversal/
// Language: javascript
// Runtime: 88 ms
// Memory: 42.2 MB
// Submitted: 2021-06-30

/**
 * // Definition for a Node.
 * function Node(val, children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/**
 * @param {Node|null} root
 * @return {number[]}
 */
var preorder = function(root) {
    let arr = [];
    var parseTreeDFS = function (node) {
        arr.push(node.val)
        // let child = node.children
            for(let child of node.children){
                parseTreeDFS(child);
            }
};
    root && parseTreeDFS(root)
return arr
};
