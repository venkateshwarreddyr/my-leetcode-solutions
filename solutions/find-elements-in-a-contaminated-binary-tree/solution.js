// Problem: Find Elements in a Contaminated Binary Tree
// LeetCode: https://leetcode.com/problems/find-elements-in-a-contaminated-binary-tree/
// Language: javascript
// Runtime: 2601 ms
// Memory: 51.3 MB
// Submitted: 2023-06-02

var FindElements = function (r) {
    FindElements.prototype.find = function (t) {
        let dfsfind = (r) => {
            if (!r) return false

            if (r.val === t) {
                return true;
            }
            return dfsfind(r.left) || //
                dfsfind(r.right)
        }
        return dfsfind(r);
    };

    let dfs = (r, v) => {
        if (!r) return

        r.val = v;
        dfs(r.left, 2 * v + 1);
        dfs(r.right, 2 * v + 2);
    }

    dfs(r, 0);
};

