// Problem: Search in a Binary Search Tree
// LeetCode: https://leetcode.com/problems/search-in-a-binary-search-tree/
// Language: javascript
// Runtime: 79 ms
// Memory: 49.4 MB
// Submitted: 2023-05-10

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
 * @param {number} val
 * @return {TreeNode}
 */
var searchBST = function(root, val) {
    let st = [root];
    
    while(st.length){
        node = st.shift();
        
        if(node){
            if(node.val === val) return node
            if(node.val>val){
                st.push(node.left)
            } else {
                st.push(node.right)
            }
        }
    }
    
    return null
};
