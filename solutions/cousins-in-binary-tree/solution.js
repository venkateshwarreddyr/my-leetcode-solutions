// Problem: Cousins in Binary Tree
// LeetCode: https://leetcode.com/problems/cousins-in-binary-tree/
// Language: javascript
// Runtime: 60 ms
// Memory: 44.2 MB
// Submitted: 2023-05-31

cl = console.log
var isCousins = function (root, x, y) {
    let foundLevel = -1
    let foundParent = -1
    let an;
    function dfs(r, lvl, parent) {
        if (!r) return;
        if (an !== undefined) return;
        if (r.val === x) {
            if (foundParent > -1) {
                an = foundLevel === lvl && foundParent !== parent
                return;
            } else {
                foundLevel = lvl
                foundParent = parent
            }
        } else if (r.val === y) {
            if (foundParent > -1) {
                an = foundLevel === lvl && foundParent !== parent
                return;
            } else {
                foundLevel = lvl
                foundParent = parent
            }
        }
        dfs(r.left, lvl + 1, r.val);
        dfs(r.right, lvl + 1, r.val);
    }

    dfs(root, 0, root.val);

    return an;

};
