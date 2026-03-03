// Problem: Binary Search Tree Iterator
// LeetCode: https://leetcode.com/problems/binary-search-tree-iterator/
// Language: javascript
// Runtime: 140 ms
// Memory: 55.3 MB
// Submitted: 2023-06-26

var BSTIterator = function (r) {
    let a = []
    function dfs(r) {
        if (!r) return

        dfs(r.left)
        a.push(r.val)
        dfs(r.right)
    }
    dfs(r)

    let i = 0
    let n = a.length

    BSTIterator.prototype.next = function () {
        return a[i++]
    };
    BSTIterator.prototype.hasNext = function () {
        return (i < n)
    };
};

