// Problem: Distribute Coins in Binary Tree
// LeetCode: https://leetcode.com/problems/distribute-coins-in-binary-tree/
// Language: javascript
// Runtime: 65 ms
// Memory: 51.5 MB
// Submitted: 2024-05-18

var distributeCoins = function (r) {
    let sum = 0;

    function dfs(r) {
        if (!r) return 0;

        let left = dfs(r.left);
        let right = dfs(r.right)

        let neededOrExtra = r.val + left + right - 1;
        sum += Math.abs(neededOrExtra);
        return neededOrExtra;
    }

    dfs(r);
    return sum;
};
