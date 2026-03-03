// Problem: Trim a Binary Search Tree
// LeetCode: https://leetcode.com/problems/trim-a-binary-search-tree/
// Language: javascript
// Runtime: 70 ms
// Memory: 48 MB
// Submitted: 2023-06-26

var trimBST = function (r, lo, hi, parent) {
    let r2 = -1
    function dfs(r) {
        if (!r) return

        if (r.val < lo) {
            r2 = r.right
            dfs(r.right)
            return
        } else if (r.val > hi) {
            r2 = r.left
            dfs(r.left)
            return
        }

        if (r.left && r.left.val < lo) {
            r.left = r.left.right
            dfs(r)
        } else {
            dfs(r.left)
        }

        if (r.right && r.right.val > hi) {
            r.right = r.right.left
            dfs(r)
        } else {
            dfs(r.right)
        }
    }
    dfs(r)
    return (r2 !== -1) ? r2 : r
};

/*
                    1
                null    2

                                    2, 4
*/

