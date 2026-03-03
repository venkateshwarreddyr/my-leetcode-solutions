// Problem: Maximum Depth of N-ary Tree
// LeetCode: https://leetcode.com/problems/maximum-depth-of-n-ary-tree/
// Language: javascript
// Runtime: 80 ms
// Memory: 41.8 MB
// Submitted: 2021-05-29

/**
 * // Definition for a Node.
 * function Node(val,children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/**
 * @param {Node|null} root
 * @return {number}
 */
var maxDepth = function(root) {
    if(!root) return 0;
    root.height = 1;
    let MaxHeight = 1
    function parseTree(node){
        if(node === null) return;
        if(MaxHeight<node.height){
            MaxHeight = node.height;
        }
        for(let child of node.children){
            child.height = node.height+1;
            // console.log(child.height);
            parseTree(child)
        }
    }
    parseTree(root);
    return MaxHeight;
};
