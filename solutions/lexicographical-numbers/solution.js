// Problem: Lexicographical Numbers
// LeetCode: https://leetcode.com/problems/lexicographical-numbers/
// Language: javascript
// Runtime: 96 ms
// Memory: 49.3 MB
// Submitted: 2023-06-14

/**
 * @param {number} n
 * @return {number[]}
 */
var lexicalOrder = function (N) {

    let an = []

    function dfs(n) {
        if (n > N) return;
        an.push(n)
        dfs(n * 10)
        if (n % 10 !== 9)
            dfs(n + 1);
    }

    dfs(1)

    return an
};
