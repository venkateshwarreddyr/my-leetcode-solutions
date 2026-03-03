// Problem: N-ary Tree Level Order Traversal
// LeetCode: https://leetcode.com/problems/n-ary-tree-level-order-traversal/
// Language: javascript
// Runtime: 92 ms
// Memory: 43.7 MB
// Submitted: 2021-08-06

/**
 * // Definition for a Node.
 * function Node(val,children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/**
 * @param {Node|null} root
 * @return {number[][]}
 */
var levelOrder = function(root) {
    if(!root) return []
    let res = [[root.val]];
    root.level = 0;
    let queue = [root];
    while(queue.length){
        let node = queue.shift();
        if(!res[node.level+1])
        res.push([])
        for(let n of node.children){
            n.level = node.level+1
            res[n.level].push(n.val)
            queue.push(n)
        }
    }
    return res.filter(e => e.length)
};
