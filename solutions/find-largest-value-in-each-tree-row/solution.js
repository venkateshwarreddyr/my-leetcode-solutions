// Problem: Find Largest Value in Each Tree Row
// LeetCode: https://leetcode.com/problems/find-largest-value-in-each-tree-row/
// Language: javascript
// Runtime: 67 ms
// Memory: 47.7 MB
// Submitted: 2023-10-24

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
 * @return {number[]}
 */
var largestValues = function(r) {
    if(!r) return []
    let an = []
    let q = [r]
    
    while(q.length){
        
        let nq = []
        let max = -Infinity
        for(let e of q) {
            max = Math.max(max, e.val)
            if(e.left){
                nq.push(e.left)
            }

            if(e.right){
                nq.push(e.right)
            }
        }
        an.push(max)
        q = nq
    }
    
    return an
};
