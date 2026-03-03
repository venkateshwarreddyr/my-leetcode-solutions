// Problem: Find Duplicate Subtrees
// LeetCode: https://leetcode.com/problems/find-duplicate-subtrees/
// Language: javascript
// Runtime: 101 ms
// Memory: 54.1 MB
// Submitted: 2023-06-26

cl = console.log
var findDuplicateSubtrees = function (root) {
    let arr = [];
    let set = {}

    function dfs(r) {
        if (!r) return;
        let s = [r.val, dfs(r.left), dfs(r.right)].toString()
        set[s] = set[s] || 0
        set[s]++
        if (set[s] === 2) {
            arr.push(r)
        }

        return s
    }

    dfs(root);

    return arr
};
