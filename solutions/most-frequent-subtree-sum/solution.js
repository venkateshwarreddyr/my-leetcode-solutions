// Problem: Most Frequent Subtree Sum
// LeetCode: https://leetcode.com/problems/most-frequent-subtree-sum/
// Language: javascript
// Runtime: 98 ms
// Memory: 52.8 MB
// Submitted: 2023-06-26

cl = console.log
var findFrequentTreeSum = function (root) {
    let ob = {}

    function dfs(r) {
        if (!r) return 0;
        sum = r.val + dfs(r.left) + dfs(r.right)
        ob[sum] = ob[sum] || 0
        ob[sum]++

        return sum;
    }

    dfs(root)

    let an = []
    let max = Math.max(...Object.values(ob))

    for (let [k, v] of Object.entries(ob)) {
        if (v === max)
            an.push(k)
    }

    return an;
};
