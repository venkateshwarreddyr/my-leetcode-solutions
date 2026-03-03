// Problem: Construct String from Binary Tree
// LeetCode: https://leetcode.com/problems/construct-string-from-binary-tree/
// Language: javascript
// Runtime: 104 ms
// Memory: 44.3 MB
// Submitted: 2021-05-25

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
 * @return {string}
 */
var tree2str = function(root) {
    let queue = [];
    let str = '';
    // queue.push(root);
    // str.push(root.val)
    // while (true) {
    // let r = queue.shift();
    // if(!r) break;
    // str.push('(')
    // r.left && queue.push(r.left);
    // str.push(r.val)
    // r.right && queue.push(r.right);
    // str.push(')')
    // }
    // return str.join('');
    const dfs = (r) => {
        if(!r) return;
        str+=('(');
        str+=(r.val);
        r.left&&dfs(r.left);
        if(r.left === null && r.right) str+='()'
        r.right&&dfs(r.right);
        str+=(')');
    }
    dfs(root);
    return str.substring(1, str.length-1);
};
