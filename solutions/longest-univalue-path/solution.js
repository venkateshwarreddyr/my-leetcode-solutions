// Problem: Longest Univalue Path
// LeetCode: https://leetcode.com/problems/longest-univalue-path/
// Language: javascript
// Runtime: 259 ms
// Memory: 99.8 MB
// Submitted: 2023-06-14

var longestUnivaluePath = function (r) {
    let maxpathlen = 0

    var dfs = function (r) {
        if (!r) return 0

        let lmaxpathlen = dfs(r.left);
        let rmaxpathlen = dfs(r.right);

        lmaxpathlen = (r.val === r.left?.val) ? lmaxpathlen + 1 : 0
        rmaxpathlen = (r.val === r.right?.val) ? rmaxpathlen + 1 : 0

        maxpathlen = Math.max(maxpathlen, lmaxpathlen + rmaxpathlen)
        return Math.max(lmaxpathlen, rmaxpathlen)
    };

    dfs(r)
    return maxpathlen
};

