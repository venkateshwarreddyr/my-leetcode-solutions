// Problem: N-ary Tree Postorder Traversal
// LeetCode: https://leetcode.com/problems/n-ary-tree-postorder-traversal/
// Language: javascript
// Runtime: 88 ms
// Memory: 42.2 MB
// Submitted: 2021-06-30

/**
 * // Definition for a Node.
 * function Node(val,children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/**
 * @param {Node|null} root
 * @return {number[]}
 */
var postorder = function(root) {
        let arr = [];
    var parseTreeDFS = function (node) {
        
        // let child = node.children
            for(let child of node.children){
                parseTreeDFS(child);
            }
        arr.push(node.val)
};
    root && parseTreeDFS(root)
return arr
};
