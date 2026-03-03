// Problem: Reverse Odd Levels of Binary Tree
// LeetCode: https://leetcode.com/problems/reverse-odd-levels-of-binary-tree/
// Language: javascript
// Runtime: 245 ms
// Memory: 92.2 MB
// Submitted: 2023-06-03

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
 * @return {TreeNode}
 */
var reverseOddLevels = function (root) {

    let q = [root]
    let l = 0
    while (q.length) {
        let r = q[0]
        if (!r) continue;
        let nq = []
        for (let i = 0; i < q.length; i++) {
            q[i].left && nq.push(q[i].left)
            q[i].right && nq.push(q[i].right)
        }
        if (l % 2 === 1) {
            let n = q.length
            for (let i = 0; i < n / 2; i++) {
                let temp = q[i].val
                q[i].val = q[n - 1 - i].val
                q[n - 1 - i].val = temp;
            }
        }
        q = nq
        l++
    }

    return root
};
