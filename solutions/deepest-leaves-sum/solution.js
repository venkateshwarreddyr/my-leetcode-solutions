// Problem: Deepest Leaves Sum
// LeetCode: https://leetcode.com/problems/deepest-leaves-sum/
// Language: javascript
// Runtime: 174 ms
// Memory: 97.2 MB
// Submitted: 2023-06-02

var deepestLeavesSum = function (r) {
    let deepestLevel = 0,
        s = 0;

    function dfs(r, level) {
        if (!r) return;
        level++;
        if (level > deepestLevel) {
            deepestLevel = level;
            s = 0;
        }
        if (level === deepestLevel) {
            s += r.val;
        }
        dfs(r.left, level);
        dfs(r.right, level);
    }

    dfs(r, 0);
    return s;
};

