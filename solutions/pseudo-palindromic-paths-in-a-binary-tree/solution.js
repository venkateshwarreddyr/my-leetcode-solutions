// Problem: Pseudo-Palindromic Paths in a Binary Tree
// LeetCode: https://leetcode.com/problems/pseudo-palindromic-paths-in-a-binary-tree/
// Language: javascript
// Runtime: 358 ms
// Memory: 100.3 MB
// Submitted: 2024-01-24

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
 * @return {number}
 */
var pseudoPalindromicPaths  = function(root) {
    let obj = {};
    let ans = 0;
    function checkStack(){
        // let obj = {};
        // stack.forEach(e =>{
        //     if(!obj[e])obj[e]=0;
        //     obj[e]++
        // })
        let keys = Object.keys(obj);
        let odds = 0;
        let evens = 0;
        for(let key of keys){
            if(obj[key]%2 === 1) odds++;
            if(odds>1)
                return false
        }
        return true; 
    }
    function parseTreeDFS(node){
        // stack+=(node.val);
        if(!obj[node.val])obj[node.val]=0;
        obj[node.val]++;
        if(node.left == null && node.right == null){
            if(checkStack()) ans++
        }else{
        if(node.left) parseTreeDFS(node.left);
        if(node.right) parseTreeDFS(node.right);
        }
        obj[node.val]--;
    }
    parseTreeDFS(root)
    return ans;
};
