// Problem: Even Odd Tree
// LeetCode: https://leetcode.com/problems/even-odd-tree/
// Language: javascript
// Runtime: 276 ms
// Memory: 98.9 MB
// Submitted: 2023-06-26

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
 * @return {boolean}
 */
var isEvenOddTree = function (root) {
    cl = console.log
    let finalan = root.val % 2 === 1
    function bfs(r) {
        let q = [r]
        let l = 1
        while (q.length) {
            let nq = []

            for (let e of q) {
                if (e) {
                    nq.push(e.left)
                    nq.push(e.right)
                }
            }
            let nnq = nq.filter(e => e).map(e => e.val)
            if (nnq.length)
                if (l % 2 === 1) {
                    let an = nnq.reduce((a, c) => {
                        return a && c % 2 === 0
                    },
                        true
                    );
                    for (let i = 1; i < nnq.length; i++) {
                        an = an && nnq[i - 1] > nnq[i]
                    }
                    finalan = finalan && an
                } else {
                    let an = nnq.reduce((a, c) => {
                        return a && c % 2 === 1
                    },
                        true
                    );
                    for (let i = 1; i < nnq.length; i++) {
                        an = an && nnq[i - 1] < nnq[i]
                    }
                    finalan = finalan && an
                }
            q = nq
            l++
        }
        return true;
    }

    bfs(root)
    return finalan
};
