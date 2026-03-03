// Problem: All Elements in Two Binary Search Trees
// LeetCode: https://leetcode.com/problems/all-elements-in-two-binary-search-trees/
// Language: javascript
// Runtime: 177 ms
// Memory: 59.7 MB
// Submitted: 2023-06-02

var getAllElements = function (r1, r2) {
    function dfs(r, a) {
        if (!r) return

        dfs(r.left, a);
        a.push(r.val);
        dfs(r.right, a);
    }

    var a = [];
    dfs(r1, a)

    var b = [];
    dfs(r2, b)

    return [...a, ...b].sort((a, b) => a - b)
}

