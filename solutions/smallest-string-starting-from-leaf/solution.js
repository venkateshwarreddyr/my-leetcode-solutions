// Problem: Smallest String Starting From Leaf
// LeetCode: https://leetcode.com/problems/smallest-string-starting-from-leaf/
// Language: javascript
// Runtime: 88 ms
// Memory: 48.3 MB
// Submitted: 2023-07-20

cl = console.log
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
var smallestFromLeaf = function (root) {
    let an = []
    function dfs(r, a) {
        if (!r) {
            return;
        }
        a.push(String.fromCharCode(97 + r.val))
        if (!r.left && !r.right) {
            an.push([...a].reverse().join(""))
        }
        dfs(r.left, a);
        dfs(r.right, a);
        a.pop()

    }

    dfs(root, []);
    cl(an)
    return an.sort()[0]

};
